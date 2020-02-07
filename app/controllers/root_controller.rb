class RootController < ApplicationController
    def root
        render :root
    end
    def logo
        render "/root/logo.svg"
    end
end
