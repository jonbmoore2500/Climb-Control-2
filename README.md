# Climb Control ReadMe


## Description

This is the Climb Control app, fulfilling the requirements of my Phase 3 project at Flatiron.

It incorporates a React frontend and a Ruby/Sinatra backend to create a climbing gym organizer, maintaining tables for Setters, Problems, Climbs, and Climbers and displaying data from those tables and their relationships. 

### Client

Climb Control utilizes a React client, incorporating Client-Side Routing to separate Climber and Route displays.

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


### Server

Climb Control utilizes a Ruby/Sinatra server, incorporating Active Record to build the tables and provide seed data. 

The seed data may have to be refreshed every so often to make sure that at least some of the date_to_remove fields are still in the future - it is currently up to date (2023/01/16).

#### Table Organization

There are a number of different one-to-many and many-to-many relationships between the assorted tables, the wireframe displaying these relationships graphically can be found at the follow Google Drive link: 
https://drive.google.com/file/d/15GobcEPascHiA2QiXl1eCSoN1AZcnLB3/view?usp=sharing

The wireframe also shows what columns are tracked in each model, what data types those columns are, and available methods for two of the models. 