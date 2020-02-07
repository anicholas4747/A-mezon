class ApplicationController < ActionController::Base
    helper_method :current_user

    def current_user
        @user ||= User.find_by(session_token: session[:session_token])
    end

    def ensure_logged_in
        render json: {message: "No User Found"}, status: 404 unless logged_in?
        return
    end

    def log_in(user)
        session[:session_token] = user.reset_session_token!
    end

    def logout
        current_user.reset_session_token!
        session[:session_token] = nil
    end

    def logged_in?
        !!current_user
    end

end
