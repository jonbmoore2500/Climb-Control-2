class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'
    
    # setters GET ONLY
    get '/setters/:id' do 
      setter = Setter.find(params[:id])
      setter.to_json(include: :problems)
    end
    
    get '/setters' do 
      setters = Setter.all.order(name: :asc)
      setters.to_json
    end

    # climbers GET ONLY
    get '/climbers/:id' do 
      climber = Climber.find(params[:id])
      climber.to_json(include: :climbs)
    end

    get '/climbers' do 
      climbers = Climber.all
      climbers.to_json
    end

    # problems FULL CRUD
    get '/problems' do 
      all_problems = Problem.all
      all_problems.to_json
      # only problems that have not been removed
      #current_problems = all_problems.select { |x| x.days_remaining > 0 }
      #current_problems.to_json

    end

    post '/problems' do
      new_problem = Problem.create(
        difficulty: params[:difficulty],
        date_set: params[:date_set],
        date_to_remove: params[:date_to_remove],
        climb_type: params[:climb_type],
        setter_id: params[:setter_id]
      )
      new_problem.to_json
    end

    patch '/problems/:id' do
      # editable fields: difficulty, date_to_remove
      edited_problem = Problem.update(
        difficulty: params[:difficulty],
        date_to_remove: params[:date_to_remove]
      )
      edited_problem.to_json
    end

    # climbs GET AND POST (done)
    get '/climbs' do 
      climbs = Climb.all
      climbs.to_json
    end

    post '/climbs' do 
      new_climb = Climb.create(
        climber_id: params[:climber_id],
        problem_id: params[:problem_id]
      )
      new_climb.to_json
    end
  end