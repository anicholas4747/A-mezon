# A(ni)mezon

My full-stack project for App Academy is an Amazon.com clone for buying anime. 
It is called **`Aにmezon`** [A-meh-zon].

`Features:`
- Reviews (users will be able to create, read, update, and destroy reviews for individual anime)
- Search (search bar will dynamically show results partially matching user searches as they type)
- Product Listing (results of the user's search will be displayed, with the ability to filter on particular product groups)
- Cart (Cart that keeps track of the current user's items and gives the ability to buy)
- Language Toggle (ability to change between English and Japanese Versions of the site)

`Pages:`
- Home Page
- Search Results
- Product Page (+ Customer Reviews)
- Cart
- Checkout
- Profile Page
- Sign In / Sign Up

`Page Details:`
-  Every page except the Sign-In/Sign-Up will have the following nav bar:
    - App Logo (+ link back to Home Page)
    - Search Bar
    - Search by Genre Drop-Down
    - Language Change Drop-Down
    - Account Drop-Down (+ ability to view profile, sign in/out, etc)
    - Cart
- Home Page
    - Product Ads (change every 15sec)
    - Recently Viewed
    - Product Recommendations
- Search Results
    - Left Pane w Filter Options (Genre, Price, Studio)
    - List of Products matching the criteria (show first 10)
    - Previous/Next Page button
- Product Page
    - Product Name & Price
    - Product Picture & Video
    - Product Description
    - Add to Cart Form (w/ Quantity Select)
    - Add Product Review Form
    - Product Reviews
- Cart
    - Items in your cart
    - Checkout Button
- Checkout
    - Checkout Form (Shipping Info, Card Info, Checkout Button)
    - Order Summary
- Profile Page
    - Profile Pic
    - Edit Profile Button (which reveals Form)
    - My Reviews
- Sign-In / Sign-Up
    - Auth Form
    - Demo Sign-In

`Tables:`
- Users
    - profile_pic
    - username
    - email
    - password_digest
    - session_token
- Carts
    - user_id
    - anime_id
- Reviews
    - title
    - body
    - rating
    - author_id
    - anime_id
- Anime
    - title
    - description
    - genre
    - price
    - studio_id
- Trailers
    - video_url
    - anime_id
- Pictures
    - image_url
    - anime_id
- Studios
    - name
    - site_url

`Associations:`
- Users have many items in their cart
- Carts are join tables linking users to the anime they have in their cart
- Users have many authored reviews
- Reviews belong to a specific user
- Reviews belong to a specific anime
- Anime have many reviews
- Anime have many trailers
- Trailers belong to a specific anime
- Anime have many pictures
- Pictures belong to a specific anime
- Anime belong to a specific studio
- Studios have many produced anime
