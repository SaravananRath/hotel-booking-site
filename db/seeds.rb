unless Rails.env.production?
  connection = ActiveRecord::Base.connection
  sql = File.read(File.join(File.dirname(__FILE__),'seedData','country_state_city.sql'))
  statements = sql.split(/;$/)
  statements.pop
  ActiveRecord::Base.transaction do
    statements.each do |statement|
      connection.execute(statement)
    end
  end
end