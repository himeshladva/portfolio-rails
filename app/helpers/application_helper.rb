module ApplicationHelper
  def meta_tags
    render 'shared/meta'
  end

  def selected?(path)
    current_page?(path) ? 'selected' : ''
  end

  def current_page
    params[:action] == 'index' ? 'home' : params[:action]
  end
end
