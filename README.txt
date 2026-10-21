ONLINE QUIZ SYSTEM - ANGULARJS + NODE + EXPRESS + MONGODB

FILES
-----
index.html  -> Student quiz page
admin.html  -> CRUD page for adding, viewing, editing and deleting questions
server.js   -> Node.js + Express + MongoDB backend

HOW TO RUN
----------

1. Open CMD in this folder.

2. Install Node packages:

   npm init -y
   npm install express mongoose cors

3. Make sure MongoDB is running.

4. Start the backend:

   node server.js

   Expected:
   MongoDB Connected
   Server running at http://localhost:5000

5. Open admin.html first.

6. Add questions using the form.
   Example:

   Question: Which language is used with AngularJS?
   Option 1: Java
   Option 2: JavaScript
   Option 3: Python
   Option 4: C++
   Correct Answer: JavaScript

7. Open index.html to take the quiz.

CRUD
----
CREATE -> Add Question
READ   -> Display Questions
UPDATE -> Edit -> Update Question
DELETE -> Delete

CHANGE THIS FOR OTHER PRACTICAL QUESTIONS
------------------------------------------

You can reuse the same CRUD pattern for Student, Employee, Library Book,
Vehicle, Event, Clinic, etc.

For a different entity, mainly change THREE things:

1. Change the schema/model in server.js.
2. Change the form fields in admin.html.
3. Change the displayed fields in admin.html.

The CRUD routes remain the same idea:
POST = Create
GET = Read
PUT = Update
DELETE = Delete

EXAMPLE: STUDENT

Change the schema from:

const questionSchema = new mongoose.Schema({
    question: String,
    answer: String,
    options: [String]
});

to:

const studentSchema = new mongoose.Schema({
    name: String,
    regno: String,
    department: String,
    year: Number
});

const Student = mongoose.model("Student", studentSchema);

Then change admin.html fields to:

Name
Register Number
Department
Year

The frontend CRUD operations are still:
POST -> add
GET -> display
PUT -> edit
DELETE -> delete

EXAMPLE: EMPLOYEE

Schema:

const employeeSchema = new mongoose.Schema({
    name: String,
    employeeId: String,
    department: String,
    salary: Number
});

const Employee = mongoose.model("Employee", employeeSchema);

Then change admin.html fields to:
Name
Employee ID
Department
Salary

IMPORTANT
---------
MongoDB is the database.
Mongoose connects Node.js to MongoDB.
Express provides the CRUD API.
AngularJS provides the frontend.
QuizService fetches questions and calculates the score.
