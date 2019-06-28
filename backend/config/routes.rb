Rails.application.routes.draw do
  post "/login", to: "users#login"

  get "/persist", to: "users#persist"

  post "/snacks/:id/buy", to: "snacks#buy"
  resources :snacks, only: [:index]
  resources :users, only: [:show]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
