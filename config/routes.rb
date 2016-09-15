Rails.application.routes.draw do
	get 'imdb/index', to: 'imdb#index'
  get 'imdb/search/:keyword', to: 'imdb#search'

  root to: 'imdb#index'
end
