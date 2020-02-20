class Api::CartsController < ApplicationController
    before_action :ensure_logged_in, only: [:show]

    def show
        @cart = Cart.includes(purchases: [anime: :studio]).find_by(user_id: current_user.id)
        render :show
    end
end