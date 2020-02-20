class Api::CartsController < ApplicationController
    before_action :ensure_logged_in, only: [:show]

    def show
        @cart = Cart.includes(:purchases, :anime).find_by(user_id: current_user.id)
        render :show
    end
end