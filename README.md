# 🌍 Wanderlust – Stay & Travel Booking Platform   (MVC Architecture)

Wanderlust is a full-stack Stay & Travel Booking platform where users can explore, create, and book travel destinations. Built using the **MVC pattern**, it features user authentication, review system, secure image uploads, live maps, and full CRUD capabilities — all fully validated and deployed online click explore first then You get Home Page else shows Page not Found. 

🔗 **Live Demo**: [https://wanderlust-project-krp0.onrender.com](https://wanderlust-project-krp0.onrender.com)

## 📁 Project Folder Structure
   
This project follows the **MVC pattern**:

    wanderlust/    
    ├── controllers/
    │   ├── listings.js
    │   ├── reviews.js
    │   └── users.js
    │
    ├── init/
    │   ├── data.js
    │   └── index.js
    │
    ├── models/
    │   ├── listing.js
    │   ├── review.js
    │   └── user.js
    │
    ├── public/
    │   ├── css/
    │   │   ├── rating.css
    │   │   └── style.css
    │   └── js/
    │       ├── map.js
    │       └── script.js
    │
    ├── routes/
    │   ├── listing.js
    │   ├── review.js
    │   └── user.js
    │
    ├── sample images/
    │
    ├── utils/
    │   ├── ExpressError.js
    │   └── wrapAsync.js
    │
    ├── views/
    │   ├── includes/
    │   │   ├── flash.ejs
    │   │   ├── footer.ejs
    │   │   └── navbar.ejs
    │   ├── layouts/
    │   │   └── boilerplate.ejs
    │   ├── listings/
    │   │   ├── edit.ejs
    │   │   ├── index.ejs
    │   │   ├── new.ejs
    │   │   ├── payment.ejs
    │   │   └── show.ejs
    │   ├── users/
    │   │   ├── login.ejs
    │   │   └── signup.ejs
    │   └── error.ejs
    ├── app.js
    ├── .env
    ├── .gitignore
    ├── cloudConfig.js
    ├── middleware.js
    ├── schema.js
    ├── package.json
    ├── package-lock.json

---

## 🚀 Features

- 🔐 **User Authentication**
  - Passport.js with hashed passwords + salted login
  - Express sessions + connect-mongo
  - Flash messages on login/logout (e.g., “Welcome back!”)

- 🏞️ **Listings (Places)**
  - View all listings on home page with image, title, price/night
  - Add new listing (image upload via Cloudinary)
  - View detailed page with description, map, country, and price
  - Only owners can edit/delete their listings

- 💬 **Review System**
  - Users can view all reviews on a listing
  - Post reviews (comment + rating) if logged in
  - Can only delete **own** reviews (others give flash message)
  - Flash + redirect to login if unauthenticated

- 📍 **Map Integration**
  - Location map embedded using **Mapbox API** based on place location

- 🖼️ **Image Uploads**
  - Uploaded via **Cloudinary** (images stored securely)
  - Auto display on listings
  - Validated on both client and server

- 💳 **Booking Flow**
  - Users can simulate room booking
  - Secure card input page (basic validation)
  - Auth required before booking

- ✅ **Validation**
  - Server-side with **Joi** 
  - Client-side HTML validations
  - Custom flash messages for wrong/missing inputs

- 🧪 **Tested**
  - All APIs tested with Postman
  - Validation is applied across both server and client sides.  
  - Edge cases like unauthorized actions, invalid inputs, and session expiry are handled with flash messages.

- 🔒 **Access Control**
  - Auth middleware restricts actions like:
    - Add listing
    - Edit/delete listings
    - Add/delete reviews
    - Book room
  - Session handling lets users stay logged in

---

## 🧠 Tech Stack

- **Frontend**: HTML, CSS, JavaScript, Bootstrap, EJS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Auth**: Passport.js + bcrypt
- **File Uploads**: Cloudinary
- **Map**: Mapbox API
- **Session Store**: MongoDB (via connect-mongo)
- **Validation**: Joi
- **Deployment**: Render

---

## ⚙️ Getting Started (Local Setup)

```bash
git clone https://github.com/yourusername/Wanderlust.git
cd Wanderlust
npm install
cp .env.example .env
# Fill in your credentials:
# ATLASDB_URL, CLOUDINARY creds, MAPBOX_TOKEN, SESSION_SECRET

npm start
