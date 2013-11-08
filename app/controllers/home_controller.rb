class HomeController < ApplicationController
  def index
  end

  def about
    redirect_to "#{root_url}#about"
  end

  def portfolio
    redirect_to "#{root_url}#portfolio"
  end

  def contact
    redirect_to "#{root_url}#contact"
  end
end
