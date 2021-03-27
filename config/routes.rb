Rails.application.routes.draw do
  root "homepege#top"
  get "home/top"     => "homepege#top"
  get "home/profile" => "homepege#profile"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
