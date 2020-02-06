# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord

    attr_reader :password
    after_initialize :ensure_session_token

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :session_token, presence: true, uniqueness: true
    validates :password, length: {minimum: 6}, allow_nil: true
    
    def self.find_by_credentials(un_or_email,pw)
        likeEmail = false
        likeEmail = true if (un_or_email.split("@").length ==  2) && (!un_or_email.split("@")[0].include?(".")) && (un_or_email.split("@")[1].split(".").length == 2)
        user = likeEmail ? User.find_by(email: un_or_email) : User.find_by(username: un_or_email)
        return nil if user.nil?
        user.is_password?(pw) ? user : nil
    end

    def is_password?(pw)
        BCrypt::Password.new(self.password_digest).is_password?(pw)
    end

    def self.generate_session_token 
        SecureRandom.urlsafe_base64(16)
    end

    def password=(pw)
        @password = pw
        self.password_digest = BCrypt::Password.create(pw)
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end
end
