class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'
    
    # setters
    get '/setters' do 
      setters = Setter.all.order(name: :asc)
      setters.to_json
    end
    
  end