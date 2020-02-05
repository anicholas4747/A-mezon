class  SessionsController < ApplicationController

    before_action :ensure_logged_in, only: [:destroy]
    def new
        render :new
    end
    
    def create
        @user = User.find_by_credentials(
            params[:user][:un_or_email],
            params[:user][:password]
        )
        if @user
            log_in(@user)
            render :users_url
        else
            flash.now[:errors] = ["Invalid Credentials, Please Try Again..."]
            render :new
        end
    end

    def destroy
        logout
        redirect_to new_session_url
    end
end
