class WeedReportsController < ApplicationController

    def index
        @weed_reports = WeedReport.all

        render json: @weed_reports
    end

    def new
        @weed_report = current_user.weed_reports.new
    end

    def create

        if user_signed_in?
            @weed_report = current_user.weed_reports.new(weed_report_params)
            @weed_report.client = Client.find_or_create_by(name: params[:client_id])

            if @weed_report.save
                render json: @weed_report
            else
                render json: {error: 'Error creating weed report'}
            end
        end
    end

    private

    def weed_report_params
        params.require(:weed_report).permit(:client_id, :type, :address, :latitude, :longitude, :notes)
    end
end
