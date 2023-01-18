# Climb Control ReadMe


### Description

This is the Climb Control app, fulfilling the requirements of my Phase 3 project at Flatiron.

It incorporates a React frontend and a Ruby/Sinatra backend to create a climbing gym organizer, maintaining tables for Setters, Problems, Climbs, and Climbers and displaying data from those tables and their relationships. 

## Client

Climb Control utilizes a React client, incorporating Client-Side Routing to separate Climber and Route displays.

##### To Run:

Run "npm start" to run the app and access it in your browser via [http://localhost:3000]

#### Components

App
 - handles essential GET requests upon loading, passing to other components
 - provides context to certain components

Header
 - contains app title
 - displays NavBar

NavBar
 - provides links to different routes for purposes of client side routing

Home
 - explains basic functionality for new users

Climbers
 - displays all ClimberCards

ClimberCard
 - on click, displays information about a given Climber in a modal 
 - contains ClimbForm

ClimbForm
 - with a dropdown of Problems, lets a Climber be paired with a Problem in a Climb

Problems
 - displays all ProblemCards
 - includes EditForm on selection of a Problem
 - includes ProblemForm

ProblemCard
 - displays information about a given Problem
 - allows the selection of a Problem to open EditForm in Problems

EditForm
 - allows the user to edit certain information fields of a selected ProblemCard
 - allows the uer to delete a selected ProblemCard
 
ProblemForm
 - allows the user to create a new Problem

#### Component Flow

(formats correctly in VSCode, version formatted for GitHub in future update)

└── App
    ├── Header
    |   └── NavBar
    |
    ├── Home
    |
    ├── Climbers
    |   ├── ClimberCard
    |   |    └── ClimbForm
    |   └── ClimberCard (for each available Climber)
    |        └── ClimbForm
    |
    └── Problems
        ├── ProblemCard
        ├── ProblemCard (for each available Problem)
        |
        ├── EditForm
        └── ProblemForm

#### Context

ProblemContext.js provides ProblemsArr to the Problems and Climbers component trees. Problems uses it to populate ProblemCards while Climbers uses it in the ClimbForm to populate the dropdown menu of Problems to match with the Climber in the Climbs table. ProblemsArr is populated via the initial GET process in the App component. 

## Server

Climb Control utilizes a Ruby/Sinatra server, incorporating Active Record to build the tables and provide seed data. 

The seed data may have to be refreshed every so often to make sure that at least some of the date_to_remove fields are still in the future, the Problems component currently only displays Problems with date_to_remove dates AFTER the current date. It is currently up to date (2023/01/16).

##### To Run:

Run "bundle install" to install all gems, "bundle exec rake db:create" to create the new database, "bundle exec rake db:migrate" to activate the migration of the tables into the database, and "bundle exec rake db:seed" to seed those tables (seed data is currently up to date, see above). Then run "bundle exec rake server" to run the server, and view the server data on its own via [http://localhost:9292/*route_name*] (available routes are climbers, problems, climbs, and setters).

#### Table Organization

There are a number of different one-to-many and many-to-many relationships between the assorted tables, the wireframe displaying these relationships graphically can be found at the follow Google Drive link: 
https://drive.google.com/file/d/15GobcEPascHiA2QiXl1eCSoN1AZcnLB3/view?usp=sharing

The wireframe also shows what columns are tracked in each model, what data types those columns are, and available methods for two of the models. 

#### Models

##### Climbers

Has many Climbs
Has many Problems, through Climbs

integer - id
string - name
integer - age
boolean - gym_member

Methods - .hardest_climb, .average_difficulty, .favorite_setter

##### Problems

Has many Climbs
Has many Climbers, through Climbs
Belongs To Setter

integer - id
integer - difficulty (displayed in client in V format, ie. V5, V8, etc)
date - date_set
date - date_to_remove
string - climb_type
integer - setter_id

Methods - .days_remaining, .number_climbers

##### Climbs

Belongs to Climber
Belongs to Problem
(links Climber to Problem via M2M relationship)

integer - id
integer - climber_id
integer - problem_id

##### Setters

Has many Problems

integer - id
string - name
boolean - guest_setter

#### Controllers

Setters and Climbers are GET only, the current form of this app has no way to POST, PATCH, or DELETE them although I plan on building this out in the future.

Climbs is POST only, although Climb data is included in the Climber GET request.

Problems has full CRUD capabilities. Only a few fields can currently be changed via PATCH, but that can be expanded in the future. All existing Problems are displayed in the Problems route via GET. Controlled forms allow the user to POST a new Problem or PATCH an existing one, and a button allows the user to DELETE an existing one.

## Roadmap

Potential future features:
 - Expand server to allow for multiple gyms and expand client to display this new info. Problems will be gym-specific, Setters can work at 0, 1, or several gyms, Climbers can be a member at 0, 1, or several gyms, etc.
 - Create ability to favorite certain Problems and prioritize their display in the dropdown menu in ClimbForm.
 - Make more fields editable without cluttering screen. For example - age of climber, gym membership of climber, type of climb.
 - Add date field to Climbs, only calculate average difficulty for a Climber within certain time frame (ie. easy climb from first day 2 years ago shouldn't influence current average difficulty). 
 - Add Setters client side route, display additional info and create editable fields.
 - Update Client with more recent version of react-router-dom, adjust routing syntax to reflect updates and take advantage of expanded features.
 - Refactor Setters and Climbers into single table, expand options for data tracked. 