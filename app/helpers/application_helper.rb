module ApplicationHelper
  def meta_tags
    render 'shared/meta'
  end

  def selected?(path)
    current_page?(path) ? 'selected' : ''
  end

  def current_page
    case request.path
      when '/'
        return 'home'
      when '/about'
        return 'about'
      when '/portfolio'
        return 'portfolio'
      when '/contact'
        return 'contact'
    end
  end
end
