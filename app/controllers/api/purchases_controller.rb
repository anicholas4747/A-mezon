class Api::PurchasesController < ApplicationController
    before_action :ensure_logged_in, only: [:create, :update, :destroy]
    
    def create
        purchase = Purchase.new(purchase_params)
        purchase.cart_id = current_user.cart.id
        if purchase.save
            @cart = Cart.includes(purchases: [anime: :studio]).find_by(id: purchase.cart_id)
            render "api/carts/show"
        else
            render json: ["Missing Info, could not create new cart item"], status: 422
        end
    end

    def update
        purchase = Purchase.find_by(id: params[:id])
        if purchase.update(purchase_params)
            @cart = Cart.includes(purchases: [anime: :studio]).find_by(id: purchase.cart_id)
            render "api/carts/show"
        else
            render json: {message: purchase.errors.full_messages}, status: 422
        end
    end

    def destroy
        purchase = Purchase.find_by(id: params[:id])
        Purchase.delete_all_from_cart(params[:id])
        @cart = Cart.includes(purchases: [anime: :studio]).find_by(id: purchase.cart_id)
        render "api/carts/show"
    end

    private
    def purchase_params
        params.require(:purchase).permit(:anime_id, :quantity)
    end
end