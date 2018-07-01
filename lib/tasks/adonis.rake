namespace :adonis do
  desc "Mapping only valid photos"
  task mapphotos: :environment do
    Adoni.mapphotos
  end
end