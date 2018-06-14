# Courses Organizer - Authentication, Protection (Bcrypt)

# [Project will be upgraded: Authentication will be set up for SERVER, DATABASE and UI to protect every "route" that needs protection. The project will NOT WORKING until the process of separation will be done (because some files have been moved)!]

## Aim
Building a project based on an EER (Enhanced Entity-Relationship). The goal is to learn to build project base on someone's idea, which is much more difficult than with ours.

> This project is one of about 30-35 others building by mixing:
>   * Front-End: **jQuery**, **ReactJS**, **React-Redux**, **Angular** (2-5), **Ionic3**, **View.js**
>   * Back-End: 5 APIs (2 with **MongoDB** and 3 with **SQL**)

> This application allows a school's department to manage its courses taking care of all relationship between: 
>  * **instructors**
>  * **students** (**grade**)
>  * **courses** (**online**, **onsite** with schedule, place and time)

---

## Technologies
> * **Security**: **JWT-simple**, **bcrypt-nodejs**, **passport** (**passport-jwt**, **passport-local**)
> * **Front End**: ***React-Redux***
> * **Back End**: ***Express/Node.js*** + ***Sequelize*** (ORM)
> * **Database**: ***mySQL***

---------------

## Enhanced Entity-Relationship

![alt text](client/assets/img/SchoolDataModel.jpg)

## Requests (**C**reate, **R**ead, **U**pdate or **D**elete)
We could make **C**reate, **R**ead, **U**pdate or **D**elete with this database. All possibilities are listed [here](./assets/docs/requests.md).

---

## User Interface
### List of Students
![alt text](client/assets/img/studentsList.jpg)

### All Information about a Student
![alt text](client/assets/img/student.jpg)

### Add a Course
![alt text](client/assets/img/addCourse.jpg)

---


## Execution


---

## Configuration (VERY IMPORTANT)

At the project's root folder, we have a file name "**server.js**" ([here](https://github.com/DinhLeGaulois2/sql_react_redux_courses_organizer/blob/master/server.js)), by the end, we have:

![alt text](client/assets/img/server_config.jpg)

It's very important to follow the instruction, otherwise, you could have very disappointed surprises ...

---------------

## Author
* Dinh HUYNH - All Rights Reserved!
* dinh.hu19@yahoo.com