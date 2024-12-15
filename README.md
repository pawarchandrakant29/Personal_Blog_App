# Personal Blog Application

## Overview
This Personal Blog application allows users to create, edit, and manage blog posts while providing a clean and user-friendly interface. It is built using modern web development technologies and is designed for scalability and customization.

---

## Features

- **Blog Management**:
  - Create, edit, and delete blog posts.
  - Support for rich text formatting.
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.
- **Admin Panel**: Manage posts, comments, and users.

---

## Technology Stack

- **Frontend**:
  - Framework: React.js
  - Styling: Tailwind CSS

- **Backend**:
  - Framework: Node.js with Express.js
  - Database: MongoDB

- **Other Tools**:
  - Authentication: JSON Web Tokens (JWT)
  - Deployment: Docker, AWS
  - Version Control: Git

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/pawarchandrakant29/Personal_Blog_App.git
   cd Personal_Blog_App
   ```

2. Install dependencies for the backend and frontend:
   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the `backend` directory.
   - Include the following variables:
     ```env
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```

4. Run the application:
   - Start the backend server:
     ```bash
     cd backend
     npm start
     ```
   - Start the frontend development server:
     ```bash
     cd frontend
     npm start
     ```

5. Open the app in your browser at `http://localhost:3000`.

---

