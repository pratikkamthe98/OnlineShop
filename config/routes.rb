Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'orders/index'
      get 'orders/show'
      get 'orders/new'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'carts/show'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'products/index'
      post 'products/create'
      get '/show/:id', to: 'products#show'
      delete '/destroy/:id', to: 'products#destroy'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
