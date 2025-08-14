# VVITConnect 🎓

**VVITConnect** is a social media platform built as part of an academic project to help alumni of VVIT stay connected. It was developed after discussions with the alumni council and focuses on implementing core social networking features with a clean and responsive user interface.

---

## 📌 Project Overview

The platform is designed to allow VVIT alumni to register, share updates, interact with each other’s content, and stay informed through notifications. While not a finalized product, it lays the foundation for a full-featured alumni network.

---

## 🔧 Core Features

- **User Authentication**  
  Secure signup and login system using JSON Web Tokens (JWT).

- **Posts and Media**  
  Users can create posts with text and images (uploaded via Base64 encoding).

- **Likes and Comments**  
  - Like/unlike functionality for posts and comments  
  - Commenting system with support for nested replies

- **Follow System**  
  Users can follow or unfollow other users and view posts from those they follow.

- **Notifications**  
  Users receive in-app notifications for interactions like follows, likes, and comments.

- **Responsive Design**  
  Mobile-friendly layout built with Tailwind CSS.

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Authentication**: JWT  
- **Image Handling**: Base64 string upload and Cloudinary for media storage
- **ORM/Tooling**: Prisma (used for schema and DB access)

---

## 🗂️ Data Structure Overview

- **Users** can create multiple **Posts**
- **Posts** can have multiple **Comments**
- **Comments** support replies (nested structure)
- **Posts** and **Comments** can be liked
- **Users** can follow each other
- **Notifications** are generated for relevant user actions

---

## 🚧 Status

This version of VVITConnect is an early implementation developed as part of an academic journey. It’s functional but still under development, and there are plans to improve UI/UX, scalability, and real-time features in future iterations.

---
