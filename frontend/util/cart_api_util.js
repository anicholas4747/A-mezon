export const fetchCart = (cartId) => (
    $.ajax({
        method: "GET",
        url: `/api/carts/${cartId}`
    })
);

export const addToCart = (purchase) => (
    $.ajax({
        method: "POST",
        url: `/api/purchases`,
        data: { purchase }
    })
);

export const updateCartItem = ({id, anime_id, quantity}) => (
    $.ajax({
        method: "PATCH",
        url: `/api/purchases/${id}`,
        data: { 
            purchase: {
                anime_id: anime_id,
                quantity: quantity
            }
        }
    })
);

export const deleteCartItem = (purchaseId) => (
    $.ajax({
        method: "DELETE",
        url: `/api/purchases/${purchaseId}`
    })
);