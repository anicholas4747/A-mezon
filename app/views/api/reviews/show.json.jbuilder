json.extract! @review, :id, :title, :body, :rating, :updated_at
json.anime @review.anime.title
json.imageURL @review.anime.image_url