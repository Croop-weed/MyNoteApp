# 🔐 Flask Authentication & Notes App

A Flask web application that implements **user authentication** (Sign Up, Login, Logout) and **user-specific notes management** using **SQLAlchemy** and **Flask-Login**.  
Only authenticated users can access the app and manage their own notes.

---

## 🚀 Features

- User Registration (Sign Up)
- User Login & Logout
- Secure Password Hashing
- Session-based Authentication (Flask-Login)
- Protected Routes using `@login_required`
- Create & Delete Notes
- Notes are linked to individual users
- Flash messages for validation & feedback
- SQLite database using SQLAlchemy ORM
- Modular Flask app using Blueprints

---

## 🛠️ Tech Stack

- **Backend:** Flask
- **Database:** SQLite
- **ORM:** SQLAlchemy
- **Authentication:** Flask-Login
- **Password Security:** Werkzeug
- **Frontend:** HTML, CSS, Jinja2, JavaScript (Fetch API)

---

## 📂 Project Structure
project/
│── main.py # App entry point
│── website/
│ │── init.py # App factory, DB & LoginManager setup
│ │── models.py # User & Note models
│ │── auth.py # Authentication routes
│ │── views.py # Main app views & note routes
│ │── templates/ # HTML templates
│ │── static/ # CSS & JavaScript files
│ │── database.db # SQLite database
│── requirements.txt
│── README.md
│── LICENSE


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
