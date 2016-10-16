Rails.application.routes.draw do
	get 'chart/index'
 	root 'chart#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
