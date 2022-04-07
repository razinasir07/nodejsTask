
# Examination System.

Examination System using JWT Token which is made in node js using REST API with the help of psotman to perform different methods.



## Run

Run the project with npm

```bash
  npm start
```
    
## Authors

- Muhammad Razi Nasir


## Classes or Entities

- Admin
- Faculty
- Student
- Examination
- Courses
- Papers
- Marks


## Admin

An Admin is registered and then login. After performing Validation its password get hashed and after loging in a JWT token is generated for that Admin.

Admin can create, update, view and delete every record that is available for all the classes if the admin is logedin.

## Faculty

A Faculty register himself and after validation has hassing is perform, the Faculty login to the system and jwt token is generated for it.

If the faculty is loged in by having the jwt token in the header section, it can also have access to student, marks and papers class. It cannot create a new student as admin can only perform that function. 
It can only view students, marks and papers class and its records.

## Student

A student register himself and after validation is performed and password is hashed, a jwt token is generated for student as well.

A student can only chech his record by using his StudentID and can only chech his marks by having marksId.



# Endpoints
- `/api/admin/register'` - To register a new admin
- `/api/admin/login'` - To login a  admin
- `/api/authStudent/register'` - To register a new student
- `/api/authStudent/login'` - To Login a  student
- `/api/authFaculty/register'` - To register a new Faculty
- `/api/authFaculty/login'` - To Login a Faculty
- `/api/student/'` - To create/edit/delete/view a new student
- `/api/marks/'` - To create/edit/delete/view a new marks
- `/api/courses/'` - To create/edit/delete/view a new courses
- `/api/examination/'` - To create/edit/delete/view a new exam
- `/api/paper/'` - To create/edit/delete/view a new paper
- `/api/faculty/'` - To create/edit/delete/view a new Faculty
- `/api/courses/'` - To create/edit/delete/view a new courses
