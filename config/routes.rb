Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :anime, only: [:index]
    get "/anime/genres", to: "anime#genres"
    get "/anime/search", to: "anime#search"
    get "/anime/years", to: "anime#years"
    get "/anime/titles", to: "anime#titles"
    get "/anime/recs", to: "anime#recs"
    get "/anime/:title", to: "anime#show"

    get "/studio/:name", to: "studios#show"
    resources :studios, only: [:index]

    resources :reviews, only: [:show, :create, :update, :destroy]
    get "/anime/:title/reviews", to: "reviews#index"

    get "/users/exists", to: "users#exists"
    get "/user/:username/reviews", to: "users#reviews"
    resources :users, only: [:create, :show, :update]
    
    resource :session, only: [:create, :destroy]
  end

  root to: "root#root"
end
