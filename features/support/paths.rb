def path_to(page_name)
  case page_name
  when "the home page"
    "#{root_url}"
  when "the about page"
    "#{root_url}#about"
  when "the portfolio page"
    "#{root_url}#portfolio"
  when "the contact page"
    "#{root_url}#contact"
  end
end