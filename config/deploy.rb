# config valid for current version and patch releases of Capistrano


set :application, "hotelbeds"
set :repo_url, "git@github.com:pSenthil202/hotelbeds.git"
set :scm, :git

# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
set :deploy_to, "/var/www/hotelbeds"

# Default value for :format is :airbrussh.
set :format, :pretty
set :log_level, :debug

# You can configure the Airbrussh format using :format_options.
# These are the defaults.
# set :format_options, command_output: true, log_file: "log/capistrano.log", color: :auto, truncate: :auto

# Default value for :pty is false
set :pty, true

# Default value for :linked_files is []
append :linked_files, "config/database.yml"

# Default value for linked_dirs is []
append :linked_dirs, "bin", "log", "tmp/cache", "tmp/cache", "vendor/bundle", "tmp/sockets", "public/system"


# Default value for default_env is {}
set :stages, %w(development production)
set :default_stage, "development"
set :ssh_options, {:forward_agent => true,
	 :user=> "root",
   :keepalive => true,
   :keepalive_interval => 3000}
set :user, "root"
set :migration_role, 'app' # Defaults to 'db'
set :assets_roles, [:app] # Defaults to [:web]

# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for keep_releases is 5
set :keep_releases, 3
