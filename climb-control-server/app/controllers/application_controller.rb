class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'
    
    # setters
    get '/setters' do 
      setters = Setter.all.order(name: :asc)
      setters.to_json
    end

    # climbers

    get '/climbers/:id' do 
      climber = Climber.find(params[:id])
      climber.to_json(include: :climbs)
    end

    get '/climbers' do 
      climbers = Climber.all
      climbers.to_json
    end

    # problems
    get '/problems' do 
      problems = Problem.all
      problems.to_json
    end

    # climbs
    get '/climbs' do 
      climbs = Climb.all
      climbs.to_json
    end


    
  end