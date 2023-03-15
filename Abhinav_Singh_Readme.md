# CSCI 5709: Tutorial 5

This is an individual tutorial repository created for Tutorial 5.

- _Date Created_: 12 March 2023
- _Last Modification Date_: 12 March 2023

## GitLab Repo

- _Individual Tutorial 5 Repository URL_: <https://git.cs.dal.ca/abhinavs/tutorial5_csci_5709_abhinav_singh.git>

## IMPORTANT NOTE

I have hardcoded two users in the list so that when user hits the https://tut5-sv83.onrender.com/users API he/she will get some response 
These two users are hardcoded
let users = [
    {
      id: uuid.v4(),
      firstName: "Abhinav",
      email: "abhinav@dal.ca",
    },
    {
      id: uuid.v4(),
      firstName: "Sayan",
      email: "sayan@dal.ca",
    },
  ]; 

I am using UUID lib of node to randomly generate the id of the users to avoid duplication in the system so every time it will generate different id for each user
So before hitting get user by id and update api always try to get the existing id 

Steps to run update API

step 1: hit https://tut5-sv83.onrender.com/users  api to see existing users in the system
step 2: copy the id of the existing user for which you to want to perform update
step 3: the hit the update url https://tut5-sv83.onrender.com/update/:id (id-> user id already in the system)

Steps to run get API for particular user

step 1: hit https://tut5-sv83.onrender.com/users  api to see existing users in the system
step 2: copy the id of the existing user for which you to want to perform update
step 3: the hit the update url https://tut5-sv83.onrender.com/:id (id-> user id already in the system)




## Deployment Link

Get ALL User API- https://tut5-sv83.onrender.com/users
Post User in system- https://tut5-sv83.onrender.com/add
Get Particular User- https://tut5-sv83.onrender.com/user/:id
Update Particular User- https://tut5-sv83.onrender.com/update/:id 


## Author

- [Abhinav (B00915090)](mailto:abhinav.singh@dal.ca) 

## Sources Used


References Used: 
How to generate the unique Id for each user ? 

[1] "How do I create a GUID / UUID?", Stack Overflow, 2023. [Online]. Available: https://stackoverflow.com/questions/105034/how-do-i-create-a-guid-uuid. [Accessed: 12- Mar- 2023]

Deploying the rest api 
[2] "render web services",render.com, 2023. [Online]. Available: https://dashboard.render.com/



