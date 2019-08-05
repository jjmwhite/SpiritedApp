Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create, :show] do
      resources :bottles, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :bottles, only: [:index, :show, :create, :update, :destroy]
    resources :distilleries, only: [:index, :show]
    resources :regions, only: [:show]
  end

end
