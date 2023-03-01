class ApplicationController < ActionController::API
    def hello_world
        count = (count || 0) + 1
        render json: { count: count }
    end
end
