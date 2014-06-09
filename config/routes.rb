Rails.application.routes.draw do
  root to: 'home#index', as: :homepage, via: :get
  get '/:slug' => 'pages#show', as: :static, slug: /[a-z0-9_\/]+/
end
