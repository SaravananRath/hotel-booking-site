RailsAdmin.config do |config|
  # REQUIRED:
  # Include the import action
  # See https://github.com/sferik/rails_admin/wiki/Actions
  config.actions do
    all
    import
  end

  config.configure_with(:import) do |config|
    config.line_item_limit = 10000000
  end
end