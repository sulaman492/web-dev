use("crudDB")

console.log(db);

db.createCollection("courses")

db.courses.insertOne({
    name:"Web dev free course",
    price:0,
    assignments:12,
    projects:15
})

db.courses.insertMany([
  {
    "name": "Web Dev Free Course",
    "price": 0,
    "assignments": 12,
    "projects": 15
  },
  {
    "name": "JavaScript Basics",
    "price": 0,
    "assignments": 10,
    "projects": 8
  },
  {
    "name": "Python for Beginners",
    "price": 0,
    "assignments": 14,
    "projects": 12
  },
  {
    "name": "React Crash Course",
    "price": 0,
    "assignments": 8,
    "projects": 10
  },
  {
    "name": "Node.js API Development",
    "price": 0,
    "assignments": 9,
    "projects": 7
  },
  {
    "name": "Full Stack Bootcamp",
    "price": 0,
    "assignments": 20,
    "projects": 18
  },
  {
    "name": "HTML & CSS Mastery",
    "price": 0,
    "assignments": 6,
    "projects": 5
  },
  {
    "name": "Data Structures in Java",
    "price": 0,
    "assignments": 15,
    "projects": 9
  },
  {
    "name": "Machine Learning Intro",
    "price": 0,
    "assignments": 12,
    "projects": 6
  },
  {
    "name": "Database Essentials",
    "price": 0,
    "assignments": 11,
    "projects": 8
  }
])

let a=db.courses.find({price:0})
console.log(a.count());
