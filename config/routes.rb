Rails.application.routes.draw do
  root to: 'pages#show', as: :homepage, via: :get, slug: 'welcome'
  get '/:slug' => 'pages#show', as: :static, slug: /[a-z0-9_\/]+/
end
