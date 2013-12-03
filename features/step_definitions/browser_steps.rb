Given %r{^I (?:am on|visit) (.*)$} do |page_name|
  visit(path_to(page_name))
end