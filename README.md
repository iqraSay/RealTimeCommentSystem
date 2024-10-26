<h1 align="center" id="title">Real Time Comment System</h1>

<p align="center"><img src="https://drive.google.com/file/d/1stn49hAOFUxtj3RdDFPby7PBBN0ZkdxJ/view?usp=sharing" alt="project-image"></p>

<p id="description">This project is a real-time comments system that allows users to post and view comments instantly. Built with Next.js on the front-end and Node.js on the back-end it provides a user-friendly interface for commenting and leverages Socket.IO for real-time updates. Comments are stored in a MySQL database ensuring data persistence.</p>

<h2>Project Screenshots:</h2>

<img src="https://drive.google.com/file/d/1R6HFHrrbqKB7HeHlyOzi-itFkf0jjdHU/view?usp=drive_link" alt="project-screenshot" width="1919" height="903/">

<img src="https://drive.google.com/file/d/1XNVwHmbnVPA0b5BtwlAmVFgPbOowp3vJ/view?usp=drive_link" alt="project-screenshot" width="1919" height="901/">

<img src="https://drive.google.com/file/d/1Gmas1frlUWyxeora9x6gn98Dj6fu41b9/view?usp=drive_link" alt="project-screenshot" width="1919" height="904/">

<img src="https://drive.google.com/file/d/10s4hjzamyf8RMfua6Icz4GcHnF6bHtpo/view?usp=drive_link" alt="project-screenshot" width="393" height="796/">

  
  
<h2>🧐 Features</h2>

Here're some of the project's best features:

**Front-End**
*   User Authentication: Simple login system where users can enter a username to start commenting (no password required).
*   Commenting Interface: Users can post comments which will be displayed in a list. Each comment will show the username timestamp and content.
*   Real-Time Updates: The comments list will auto-update in real-time as new comments are posted without requiring a page refresh.
*   Responsive Design: The UI will be mobile-friendly and aesthetically pleasing built with Material UI components.
*   HTTP Requests: Use Axios for API requests to the back-end to handle login and comment operations.
**Back-End**
*   Real-Time Communication: Socket.IO will be used to broadcast new comments to all connected clients instantly.
*   API endpoints for user login fetching comments and posting comments.
*   Database (MySQL): A comments table to store comments with fields for ID username content and timestamp.

<h2>💻 Built with</h2>

Technologies used in the project:

*   NextJS
*   Mysql
*   MaterialUI

## Installation Steps

### Back-End Setup

1. **Clone the Repository:**

   ```
   git clone https://github.com/iqraSay/RealTimeCommentSystem.git
   cd RealTimeCommentSystem
   ```

2. **Set Up the MySQL Database:**
    *Create a new database:*

   `
  CREATE DATABASE rtcs;
   `

    *Create a new table:*

    ```
     USE rtcs;
     CREATE TABLE comments (
     id INT AUTO_INCREMENT PRIMARY KEY,
     username VARCHAR(255),
     comment TEXT,
     timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
     );
    ```

# Application Setup Instructions

## Install Dependencies
Run the following command to install the necessary dependencies:
*Front-end:*
```bash
cd comments-system
npm install axios @mui/material socket.io-client 
```

*Back-end:*
```bash
cd ../server
npm install express mysql2 socket.io cors 
```

# How to Run the Application Locally
## Start the Back-End Server
*To start the back-end server, use the following command:*
```bash
cd ../server
node index.js 
```
## Start the Front-End App
*To start the back-end server, use the following command:*
```bash
cd comments-system
npm run dev 
```
## Accessing the app
- *Go to laoclhost:3000*
- *Enter a username to login.*
- *Begin commenting by typing in the comment and post it by clicking the post button.*