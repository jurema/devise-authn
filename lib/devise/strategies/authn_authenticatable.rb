require 'devise'

module Devise
  module Strategies
    class AuthNAuthenticatable < Base

      def valid?
        true
      end

      def authenticate!
        if authn_logged_in?
          user = find_by_account_id(current_account_id)
          success!(user)
        else
          return fail(:invalid_login)
        end
      end

      def find_by_account_id(current_account_id)
        return unless current_account_id
        if defined?(User)
          @user = User.find_by_account_id(current_account_id)
        else
          @user = Spree::User.find_by_account_id(current_account_id)
        end

        @user
      end

      def authn_logged_in?
        !! current_account_id
      end

      def current_account_id
        return unless request.host
        Keratin::AuthN.subject_from(cookies[:facepage], audience: request.host)
      end
    end
  end
end
