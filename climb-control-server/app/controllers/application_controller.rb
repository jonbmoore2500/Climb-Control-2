class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'
    
    # setters GET ONLY
    get '/setters' do 
      setters = Setter.all.order(name: :asc)
      setters.to_json
    end

    # climbers GET ONLY
    get '/climbers' do 
      climbers = Climber.all
      climbers.to_json(:methods => [:hardest_climb, :average_difficulty, :favorite_setter], :include => :climbs)
    end

    # problems FULL CRUD
    get '/problems' do 
      all_problems = Problem.all
      all_problems.to_json(:methods => :days_remaining, :include => :setter)
    end

    post '/problems' do
      new_problem = Problem.create(
        difficulty: params[:difficulty],
        date_set: params[:date_set],
        date_to_remove: params[:date_to_remove],
        climb_type: params[:climb_type],
        setter_id: params[:setter_id]
      )
      new_problem.to_json(:methods => :days_remaining, :include => :setter)
    end

    patch '/problems/:id' do
      # editable fields: difficulty, date_to_remove
      edited_problem = Problem.find(params[:id])
      edited_problem.update(
        difficulty: params[:difficulty],
        date_to_remove: params[:date_to_remove]
      )
      edited_problem.to_json(:methods => :days_remaining, :include => :setter)
    end

    delete '/problems/:id' do 
      delete_program = Problem.find(params[:id])
      delete_program.destroy
      delete_program.to_json
    end

    # climbs POST only
    post '/climbs' do 
      new_climb = Climb.create(
        climber_id: params[:climber_id],
        problem_id: params[:problem_id]
      )
      new_climb.to_json(include: :climber)
    end
  end