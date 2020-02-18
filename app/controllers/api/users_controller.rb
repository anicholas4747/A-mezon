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

    def show
        @user = User.find_by(id: params[:id])
        render :show
    end

    def exists
        if params[:password]
            user = User.find_by_credentials(params[:username], params[:password])
        else
            user = User.has_an_account(params[:un_or_email])
        end
        
        @result = {exists: (user ? 1 : 0)}
        if current_user
            @result[:id] = current_user.id
            @result[:username] = current_user.username
        end
        render :exists
    end

    def reviews
        @user = User.includes(authored_reviews: :anime).find_by(username: params[:username])
        render :profile
    end

    def update
        @user = User.find_by(id: params[:id])
        if @user.update(user_params)
            render :show
        else
            render json: {message: @user.errors.full_messages}, status: 422
        end
    end

    private
    def user_params
        params.require(:user).permit(:username,:email,:password)
    end
end