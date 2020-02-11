Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    get "/users/exists", to: "users#exists"
    resource :session, only: [:create, :destroy]
  end

  root to: "root#root"
  get "/logo", to: "root#logo"
end
