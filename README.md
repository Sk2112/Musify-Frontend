# 🎵 Musify – Your Personal Music Streaming Platform

Musify is a full-stack music streaming platform designed to deliver a seamless, interactive, and personalized music experience. Built using modern technologies, Musify allows users to  Upload and  play songs  effortlessly, while also leveraging AI capabilities for Song Description and Facts.

---

## 💻 Screenshots

### 1. Home Page 
<img width="1919" height="944" alt="image" src="https://github.com/user-attachments/assets/3a5aa776-cd92-49a6-8b28-ea862bd7726c" />

### 2. Uplaoding Page 
<img width="1908" height="949" alt="image" src="https://github.com/user-attachments/assets/0fcdc036-59f5-4a93-83fa-a0cdf54d6534" />

### 3. Streaming Page
<img width="1919" height="956" alt="image" src="https://github.com/user-attachments/assets/1ea15470-4e2e-4517-999a-f46dcdca2fe5" />



---


## 🚀 Features

- **User Authentication & Management**
  - Secure signup, login, using **Clerk Authentication**.
  
- **Music Library**
  -  Play  songs without any AD's.
  - Tracks stored in **Neon PostgreSQL Database** for high performance and scalability.
  
- **AI-Driven Recommendations**
  - Uses **Gemini API** to provide a different touch.
  
- **Interactive Music Player**
  - Play, pause, skip, and rewind tracks with a responsive web player.
  
- **RESTful Backend**
  - Built with **Spring Boot**.
  - Songs are getting stored  on Cloudinary
  -   
- **Responsive Design**
  - Fully mobile-friendly using modern frontend frameworks (React + Tailwind CSS).

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React , Tailwind CSS, Acerternity |
| Backend | Spring Boot, Java, RESTful APIs, | 
| Database | Neon PostgreSQL (Cloud-hosted) |
| Authentication | Clerk Authentication |
| AI / Recommendation | Gemini API |
| Deployment | Render  / Docker / Vercel |
| Storage | Cloudinary|

---
 ## 🛠 Installation & Setup
1. Backend

### CLone the Repository
``` bash
git clone https://github.com/Sk2112/Musify-Backend.git
cd musify/backend
./mvnw clean install
./mvnw spring-boot:run
```
2. Frontend

### Clone the Repo
``` bash
git clone https://github.com/Sk2112/Musify-Frontend.git
cd musify/frontend
npm install
npm run dev
```


3. Environment Variables

- Create a .env file in frontend & backend:
``` bash  
VITE_CLERK_PUBLISHABLE_KEY= <YOUR CLERK PUBLISHBLE KEY>
```
---
## 📦 Deployment
- Backend: Dockerized Spring Boot app → Deploy on Render / Railway
- Frontend: Next.js app → Deploy on Vercel / Render
- Database: Cloud-hosted Neon PostgreSQL
- Continuous Integration with GitHub Actions
---
## 📝 Future Enhancements
- Social sharing for playlists
- Collaborative playlist editing
- AI-generated music suggestions using Gemini API trends
- Ability to Delete the songs
- Song Title Thumbnails from Third Party Api's

---

## 🔗 Live Demo
  Frontend at vercel : ```https://musify-nine-self.vercel.app/ ``` 
---
## 📜 License
  MIT License © 2025 Musify

