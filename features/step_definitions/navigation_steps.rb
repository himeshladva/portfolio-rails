Then(/^I should see the navigation bar$/) do
  page.should have_selector("nav")
end

Then(/^it is within the header$/) do
  page.should have_selector("header.masthead nav")
end

When(/^I click on the "(.*?)" link$/) do |link|
  within "nav" do
    click_link(link)
  end
end

Then(/^I should be on the "(.*?)" page$/) do |page|
  pending
end