module ApplicationHelper
  def meta_tags
    render 'shared/meta'
  end

  def page_meta(options)
    @page_meta_options = options
  end

  def page_title
    @page_meta_options[:title]
  end

  def selected?(path)
    current_page?(path) ? 'selected' : ''
  end

  def current_page
    params[:action] == 'index' ? 'home' : params[:action]
  end
end
