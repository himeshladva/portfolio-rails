PortfolioRails::Application.routes.draw do
  root to: "home#index"

  get 'about', to: "home#about", as: :page_about
  get 'portfolio', to: "home#portfolio", as: :page_portfolio
  get 'contact', to: "home#contact", as: :page_contact
end
