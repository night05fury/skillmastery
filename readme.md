# 🎯 Skillmastery

**Skillmastery** is a feature-rich Learning Management System (LMS) developed using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Bootstrap for the frontend. It empowers teachers to effortlessly create classrooms, share posts, assign homework with deadlines, monitor student progress, and download class scores in Excel format. It also provides a seamless experience for students to enroll, submit projects, and engage in interactive discussions.

## 📸 Screenshots

### Home Page
<img src="https://github.com/suryanshsingh2001/skillmastery/blob/main/display/1.Home.jpg" alt="Home Page" width="400">

### Login Page
<img src="https://github.com/suryanshsingh2001/skillmastery/blob/main/display/3.Login.jpg" alt="Login Page" width="400">

### Register Page
<img src="https://github.com/suryanshsingh2001/skillmastery/blob/main/display/2.Register.jpg" alt="Register Page" width="400">

### Classroom Page
<img src="https://github.com/suryanshsingh2001/skillmastery/blob/main/display/classroom.jpg" alt="Classroom Page" width="400">

### Teacher Pages
<img src="https://github.com/suryanshsingh2001/skillmastery/blob/main/display/teacher1.jpg" alt="Teacher Page 1" width="400">
<img src="https://github.com/suryanshsingh2001/skillmastery/blob/main/display/teacher2.jpg" alt="Teacher Page 2" width="400">
<img src="https://github.com/suryanshsingh2001/skillmastery/blob/main/display/teacher3.jpg" alt="Teacher Page 3" width="400">

### Student Pages
<img src="https://github.com/suryanshsingh2001/skillmastery/blob/main/display/studentclass.jpg" alt="Student Page 1" width="400">
<img src="https://github.com/suryanshsingh2001/skillmastery/blob/main/display/studentclass2.jpg" alt="Student Page 2" width="400">



## ✨ Features

- **Classroom Creation**: Teachers can easily create classrooms to manage their students and instructional content.
- **Post Sharing**: Teachers can share posts within classrooms to provide important updates, announcements, or learning resources.
- **Homework Assignment**: Teachers can assign homework with specific deadlines for students to complete.
- **Student Progress Monitoring**: Teachers can track student progress and performance within the LMS.
- **Class Score Download**: Teachers can download class scores in Excel format for efficient analysis.
- **Seamless Enrollment**: Students can seamlessly enroll in classrooms using access codes provided by teachers.
- **Project Submission**: Students can submit their projects or assignments directly through the LMS.
- **Interactive Discussions**: Students can engage in interactive discussions within the LMS, promoting collaboration and knowledge sharing.

## ⚙️ Tech Stack

The project utilizes the following technologies:

- MongoDB: Database for storing LMS data.
- Express.js: Web application framework for building the backend API.
- React.js: JavaScript library for building the user interface.
- Node.js: JavaScript runtime environment for server-side execution.
- Bootstrap: CSS framework for responsive and mobile-first web development.

## 🚀 Getting Started

### Installation

1. Clone the repository: `git clone [repository URL]`
2. Install dependencies: `npm install`

### Usage

1. Set up the environment variables. Rename the `.env.example` file to `.env` and provide the necessary values.
2. Frontend:
 ```
REACT_APP_BASE_URL=<Your backend URL>
```
4. Backend:
```
MONGO_DB_URL=<your database URL>
CLIENT_URL=<Your hosting domail URL>

# token

SECRET_ACCESS_TOKEN= <Whatever you choose>
ACCESS_TOKEN_EXPIRE= <Whatever you choose>
SECRET_REFRESH_TOKEN= <Whatever you choose>
REFRESH_TOKEN_EXPIRE= <Whatever you choose>
```
4. Start the development server: `npm start`
5. Open the application in your browser at `http://localhost:3000`
   
## 🐳 Dockerization

#### Frontend
1. Navigate to the frontend directory of the project:

```sh[]
cd frontend
```
2. Build the Docker image for the client:

```sh[]
docker build -t skillmastery-frontend .
```
3. Run the Docker container for the client:
```sh[]
docker run -d -p 3000:3000 --name skillmastery-frontend skillmastery-frontend
```
4. Access the client application in your browser at: http://localhost:3000

#### Backend 

1. Navigate to the backend directory of the project:

```sh[]
cd backend
```
2. Build the Docker image for the server:
```sh[]
docker build -t killmastery-frontend .
```
3. Run the Docker container for the server:
```sh[]
docker run -d -p 5000:5000 --name killmastery-frontend killmastery-frontend
```
4. The server is now running and ready to accept requests.
   
## 🙌 Contributions

Contributions from the following individuals are already acknowledged:
- Suryansh Singh
[![GitHub](https://img.shields.io/badge/GitHub-Follow-blue?logo=github)](https://github.com/suryanshsingh2001)
- Mayank Kumar Patel
[![GitHub](https://img.shields.io/badge/GitHub-Follow-blue?logo=github)](https://github.com/night05fury)
- Kartikey Mishra
[![GitHub](https://img.shields.io/badge/GitHub-Follow-blue?logo=github)](https://github.com/KartikeyMish)


To contribute to SkillMastery, follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b new-feature`.
3. Make your changes and commit them: `git commit -am 'Add new feature'`.
4. Push the changes to your fork: `git push origin new-feature`.
5. Submit a pull request.

## 📧 Contact
Reach out to us on 
<br>
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/in/suryansh-singh-473187235/)
[![Email](https://img.shields.io/badge/Email-Send-blue?logo=gmail)](mailto:ricochetthestoryteller2001@gmail.com
)


