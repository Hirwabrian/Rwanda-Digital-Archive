# **RDCA Prototype**  

## **Overview**  
The **RDCA Prototype** is  digital archive and web-based platform designed to serve researchers, students, artists, and cultural enthusiasts by providing reliable, verified information on Rwandan art and heritage.  

## **Features**  
### 🔐 **Authentication & User Roles**  
- Firebase Authentication for secure login and registration  
- **3 User Roles:** General Users, Artists, and Experts  
- Verification system for artists and experts  

### 🖼 **Artist Dashboard**  
- Submit artworks for expert review  
- Track approval status  
- Receive expert feedback  

### 🎨 **Expert Dashboard**  
- Review submitted artworks  
- Approve or request revisions  
- Manage and curate submissions  

### 🔍 **Search & Discovery**  
- Browse submitted artworks  

---

## **Live Demo** 🚀  
You can try out the **live deployed version** here:  
🔗 **[RDCA Live Demo](https://rdca2-eq3c8d2n6-hirwabrians-projects.vercel.app)**  

### **Test Accounts**  
To experience different roles without signing up, use these pre-registered test accounts:  

| **Role**  | **Email**                | **Password**  |
|-----------|--------------------------|--------------|
| General User | `General@domain.com` | `General@domain.com` |
| Artist  | `artist@domain.com` | `artist@domain.com` |
| Expert  | `expert@domain.com` | `expert@domain.com` |

### **How to Test**  
1. Visit the **Live Demo link**  
2. Log in using one of the test accounts above  
3. Explore the role-specific dashboards  

---

## **Tech Stack**  
| Technology    | Purpose                     |
|--------------|-----------------------------|
| React.js     | Frontend framework          |
| Vite         | Fast development environment |
| Firebase     | Authentication & Storage    |
| Tailwind CSS | Styling and UI design       |
| React Router | Navigation & protected routes |
| Vercel       | Deployment platform         |

---

## **Setup & Installation**  
### **Prerequisites**  
- Install [Node.js](https://nodejs.org/) and npm  
- Have a Firebase project set up  

### **1️⃣ Clone the Repository**  
```bash
git clone https://github.com/yourusername/rdca-prototype.git
cd rdca-prototype
```

### **2️⃣ Install Dependencies**  
```bash
npm install
```

### **3️⃣ Set Up Environment Variables**  
Create a `.env` file in the root folder and add the Firebase configuration:  
```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### **4️⃣ Run the Project Locally**  
```bash
npm run dev
```
- The app will run on `http://localhost:5173/`  

---

## **Deployment (Vercel)**  
### **🔹 Manual Deployment (dist folder)**
1. **Build the project**  
   ```bash
   npm run build
   ```
2. **Upload the `dist` folder to Vercel**  
   - Go to [Vercel](https://vercel.com/)  
   - Select **"New Project" → Import Manually**  
   - Upload the `dist` folder  

### **🔹 GitHub + Vercel (Automatic Deployment)**
1. **Push the project to GitHub**  
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```
2. **Connect the repository to Vercel**  
   - In Vercel, click **"New Project"**  
   - Import your GitHub repo  
   - Set **build command:** `npm run build`  
   - Set **output directory:** `dist`  
   - Deploy 🎉  

---


## **Contact & Support**  
For issues or feedback, reach out at:  
📧 **h.brian@alustudent.com**  

---
