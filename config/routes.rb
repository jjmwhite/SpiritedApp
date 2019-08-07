Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create, :show] do
      resources :bottles, only: [:index]
      resources :ratings, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :bottles, only: [:index, :create, :update, :destroy]
    resources :bottles, only: [:show] do
      resources :ratings, only: [:index, :show, :create, :update, :destroy]
    end
    resources :distilleries, only: [:index, :show]
    resources :regions, only: [:show]
  end

end
