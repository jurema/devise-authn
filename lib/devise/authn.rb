require "devise/authn/version"
require 'devise/strategies/authn_authenticatable'

module Devise
  module AuthN
    if defined?(::Rails)
      require "devise/authn/engine"
    else
      gem_path = File.expand_path('..', File.dirname(__FILE__))
      assets_path = File.join(gem_path, 'assets')
      if defined?(::Sprockets)
        Sprockets.append_path(File.join(assets_path, 'javascripts'))
      elsif defined?(::Hanami)
        Hanami::Assets.sources << assets_path
      end
    end
  end
end
