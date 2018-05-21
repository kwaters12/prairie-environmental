class SessionsController < Devise::SessionsController
    respond_to :json

    private

    def sign_up_params
        params.require(:registration).permit(:name, :email, :password)
    end

    def account_update_params
        params.require(:user).permit(:name, :email, :password, :current_password)
    end
end
