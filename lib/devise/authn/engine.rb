module Devise
  module AuthN
    class Engine < ::Rails::Engine
      initializer 'devise-authn.assets' do |app|
        app.config.assets.paths << root.join('vendor', 'assets', 'javascripts').to_s
      end
    end
  end
end