class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            log_in(@user)
            render :show
        else
            render json: {message: @user.errors.full_messages}, status: 422
        end
    end
    def exists
        user = User.has_an_account(params[:un_or_email])
        @result = {exists: (user ? 1 : 0)}
        render :exists
    end

    private
    def user_params
        params.require(:user).permit(:username,:email,:password)
    end
end