Rails.application.routes.draw do
  root "homepege#top"
  get "home/top"     => "homepege#top"
  get "home/profile" => "homepege#profile"
  get "home/my_work" => "homepege#my_work"
  get "home/firm"    => "homepege#firm"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
