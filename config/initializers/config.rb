def yaml_config(filename)
  YAML.load_file(Rails.root.join('config', filename))
end

# Pass environment by CONFIG = yaml_config('config.yml')[Rails.env]
CONFIG = yaml_config('config.yml')["default"]
