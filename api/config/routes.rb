Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'

  mount ForestLiana::Engine => '/forest'

  resources :weed_reports
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
