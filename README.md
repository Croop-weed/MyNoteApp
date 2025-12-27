This code provides a solid foundation for a **Flask-based Note-Taking Web Application**. It features a modular structure using Blueprints, secure user authentication, and a relational database managed by SQLAlchemy.

To help others (and your future self) understand and run this project, here is a structured **README.md** tailored to your specific code.

---

# 📝 Flask Note-Taking Application

A simple, secure web application that allows users to sign up, log in, and manage personal notes. This project demonstrates the implementation of **MVC (Model-View-Controller)** architecture using Python and Flask.

## ✨ Features

* **User Authentication**: Secure sign-up and login using `Werkzeug` for password hashing and `Flask-Login` for session management.
* **Database Management**: Utilizes `SQLAlchemy` ORM with a SQLite database to store users and their notes.
* **CRUD Operations**: Authenticated users can create and delete personal notes.
* **Modular Design**: Organized into **Blueprints** (`auth` and `views`) for better scalability and cleaner code.
* **Form Validation**: Client-side feedback using Flask `flash` messages for incorrect login credentials or invalid sign-up data.

---

## 🛠️ Tech Stack

* **Language**: Python 3.x
* **Framework**: [Flask](https://flask.palletsprojects.com/)
* **Database**: SQLite
* **ORM**: SQLAlchemy
* **Authentication**: Flask-Login, Werkzeug Security

---

## 📂 Project Structure

```text
├── website/
│   ├── __init__.py    # App factory & DB initialization
│   ├── auth.py        # Authentication routes (Login/Sign-up)
│   ├── views.py       # Main application routes (Home/Notes)
│   ├── models.py      # Database schemas (User & Note)
│   └── templates/     # HTML files (home.html, login.html, etc.)
├── main.py            # Entry point to run the application
└── database.db        # Generated SQLite database

```

---

## 🚀 Getting Started

### 1. Prerequisites

Ensure you have Python installed. You can check by running:

```bash
python --version

```

### 2. Installation & Setup

Clone the repository and navigate to the project folder:

```bash
# Install required dependencies
pip install flask flask-sqlalchemy flask-login

```

### 3. Running the Application

Execute the entry point script:

```bash
python main.py

```

The app will start in **debug mode** at `http://127.0.0.1:5000/`.

---

## 📋 Database Schema

The application uses a **One-to-Many** relationship: One user can have many notes.

| Model | Fields |
| --- | --- |
| **User** | `id`, `email`, `password`, `firstName`, `notes` (relationship) |
| **Note** | `id`, `data`, `date`, `user_id` (foreign key) |

---

## 🔒 Security Features

* **Password Hashing**: Passwords are never stored in plain text. They are hashed using `pbkdf2:sha256`.
* **Protected Routes**: The `@login_required` decorator ensures that only logged-in users can access the home page and delete notes.
* **Ownership Verification**: When deleting a note, the system checks if the `current_user.id` matches the `note.user_id` to prevent unauthorized deletions.

---

Would you like me to generate a `requirements.txt` file or the HTML templates to match this backend logic?
