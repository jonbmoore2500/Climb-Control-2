puts "🌱 Seeding messages..."

climb_types = ["crimpy", "slab", "dyno", "overhang", "comp-style"]

Climber.create(name: "Chris", age: 29, gym_member: TRUE)
Climber.create(name: "Anastasia", age: 52, gym_member: TRUE)
Climber.create(name: "Jesse", age: 22, gym_member: FALSE)
Climber.create(name: "Joshua", age: 33, gym_member: TRUE)
Climber.create(name: "Alexa", age: 29, gym_member: FALSE)
Climber.create(name: "Miguel", age: 32, gym_member: TRUE)
Climber.create(name: "Britt", age: 31, gym_member: TRUE)
Climber.create(name: "Bailey", age: 29, gym_member: FALSE)
climbers = Climber.all #8 total

Setter.create(name: "Seth", guest_setter: FALSE)
Setter.create(name: "Samantha", guest_setter: FALSE)
Setter.create(name: "Sinbad", guest_setter: FALSE)
Setter.create(name: "Stephanie", guest_setter: TRUE)

Problem.create(difficulty: 4, date_set:Date.parse('2022-12-18'), date_to_remove: Date.parse('2023-01-13'), climb_type: climb_types[0], setter_id: Setter.first.id)
Problem.create(difficulty: 5, date_set:Date.parse('2022-12-22'), date_to_remove: Date.parse('2023-02-01'), climb_type: climb_types[1], setter_id: Setter.second.id)
Problem.create(difficulty: 7, date_set:Date.parse('2022-12-01'), date_to_remove: Date.parse('2023-01-10'), climb_type: climb_types[2], setter_id: Setter.first.id)
Problem.create(difficulty: 2, date_set:Date.parse('2022-11-25'), date_to_remove: Date.parse('2023-01-10'), climb_type: climb_types[3], setter_id: Setter.third.id)
Problem.create(difficulty: 1, date_set:Date.parse('2022-11-19'), date_to_remove: Date.parse('2023-02-12'), climb_type: climb_types[4], setter_id: Setter.fourth.id)
Problem.create(difficulty: 8, date_set:Date.parse('2022-12-30'), date_to_remove: Date.parse('2023-02-12'), climb_type: climb_types[0], setter_id: Setter.first.id)
Problem.create(difficulty: 8, date_set:Date.parse('2022-12-13'), date_to_remove: Date.parse('2023-02-02'), climb_type: climb_types[1], setter_id: Setter.second.id)
Problem.create(difficulty: 4, date_set:Date.parse('2022-12-16'), date_to_remove: Date.parse('2023-01-16'), climb_type: climb_types[2], setter_id: Setter.third.id)
Problem.create(difficulty: 5, date_set:Date.parse('2022-12-02'), date_to_remove: Date.parse('2023-01-02'), climb_type: climb_types[3], setter_id: Setter.fourth.id)
Problem.create(difficulty: 3, date_set:Date.parse('2022-12-16'), date_to_remove: Date.parse('2023-03-01'), climb_type: climb_types[4], setter_id: Setter.first.id)
Problem.create(difficulty: 2, date_set:Date.parse('2022-11-25'), date_to_remove: Date.parse('2023-01-05'), climb_type: climb_types[0], setter_id: Setter.first.id)
problems = Problem.all # 11 total


Climb.create(climber_id: climbers[0].id, problem_id: problems[0].id)









puts "✅ Done seeding!"
