# Modern Personal Portfolio with Firebase

A comprehensive, modern personal portfolio built with React.js and Firebase, featuring dynamic content management, real-time visitor tracking, and an admin dashboard.

## 🚀 Features

### Core Features
- **Responsive Design**: Fully responsive across all devices with modern UI/UX
- **Dark/Light Theme**: Theme preference stored in Firestore for returning visitors
- **Real-time Visitor Counter**: Live visitor count using Firebase Realtime Database
- **Smooth Animations**: Beautiful animations using Framer Motion

### Dynamic Content Management
- **Projects Showcase**: Dynamic project data stored in Firestore
- **Tech Blog**: Personal blog with Markdown support
- **Contact Form**: Messages stored in Firestore with email notifications

### Admin Dashboard
- **Protected Routes**: Firebase Authentication for admin access
- **Content Management**: Add, edit, and delete projects and blog posts
- **Message Management**: View and manage contact form submissions
- **Analytics Dashboard**: Overview of site statistics

### Technical Stack
- **Frontend**: React.js, Tailwind CSS, Framer Motion
- **Backend**: Firebase (Firestore, Realtime Database, Authentication, Cloud Functions)
- **Deployment**: Firebase Hosting
- **Form Handling**: React Hook Form
- **Icons**: Lucide React

## 🛠️ Setup Instructions

### 1. Firebase Configuration

1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable the following services:
   - **Firestore Database**
   - **Realtime Database**
   - **Authentication** (Email/Password)
   - **Cloud Functions** (for contact form emails)
   - **Hosting**

3. Update `src/firebase/config.js` with your Firebase configuration:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  databaseURL: "https://your-project-default-rtdb.firebaseio.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id",
  measurementId: "your-measurement-id"
};
```

### 2. Firestore Database Setup

Create the following collections in Firestore:

#### Projects Collection (`projects`)
```javascript
{
  title: "Project Title",
  description: "Project description",
  image: "https://image-url.com",
  techStack: ["React", "Node.js", "MongoDB"],
  category: "fullstack", // frontend, fullstack, mobile
  liveUrl: "https://project-url.com",
  githubUrl: "https://github.com/username/repo",
  featured: true, // boolean
  createdAt: timestamp
}
```

#### Blog Posts Collection (`blogPosts`)
```javascript
{
  title: "Blog Post Title",
  excerpt: "Short description",
  content: "Full blog post content (Markdown supported)",
  author: "Your Name",
  image: "https://image-url.com",
  tags: ["React", "JavaScript"],
  featured: false,
  createdAt: timestamp,
  readTime: 5 // minutes
}
```

#### Contact Messages Collection (`contactMessages`)
```javascript
{
  firstName: "John",
  lastName: "Doe",
  email: "john@example.com",
  subject: "Project Inquiry",
  message: "Message content",
  status: "unread", // unread, read
  createdAt: timestamp
}
```

#### User Preferences Collection (`userPreferences`)
```javascript
{
  theme: "dark", // light, dark
  lastUpdated: timestamp
}
```

### 3. Authentication Setup

1. Go to Firebase Console > Authentication > Sign-in method
2. Enable **Email/Password** authentication
3. Create an admin user account for accessing the admin dashboard

### 4. Realtime Database Setup

1. Create a Realtime Database in Firebase Console
2. Set up the following security rules:

```json
{
  "rules": {
    "visitors": {
      ".read": true,
      ".write": true
    }
  }
}
```

### 5. Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### 6. Deployment

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Initialize Firebase in your project:
   ```bash
   firebase init
   ```

4. Build and deploy:
   ```bash
   npm run build
   firebase deploy
   ```

## 📱 Usage

### Public Features
- **Home**: Hero section with introduction and skills overview
- **About**: Personal information and interests
- **Projects**: Dynamic showcase of your work
- **Blog**: Technical articles and thoughts
- **Contact**: Contact form with real-time message storage

### Admin Features
- **Login**: Secure admin authentication
- **Dashboard**: Overview of site statistics and recent messages
- **Content Management**: Add, edit, and delete projects and blog posts
- **Message Management**: View and respond to contact form submissions

## 🎨 Customization

### Styling
- Update colors in `tailwind.config.js`
- Modify animations in `src/index.css`
- Customize components in `src/components/`

### Content
- Update personal information in component files
- Add your own images (use Pexels URLs or upload to Firebase Storage)
- Modify the navigation and footer links

### Features
- Add new pages by creating components in `src/pages/`
- Extend the admin dashboard with additional features
- Integrate additional Firebase services as needed

## 🔧 Advanced Features

### Email Notifications (Cloud Functions)
To enable email notifications for contact form submissions, deploy a Cloud Function:

```javascript
// functions/index.js
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

exports.sendContactEmail = functions.firestore
  .document('contactMessages/{messageId}')
  .onCreate(async (snap, context) => {
    const message = snap.data();
    
    // Configure your email service (Gmail, SendGrid, etc.)
    const transporter = nodemailer.createTransporter({
      // Your email configuration
    });
    
    // Send email logic here
  });
```

### Analytics Integration
Firebase Analytics is already configured. You can track custom events:

```javascript
import { analytics } from './firebase/config';
import { logEvent } from 'firebase/analytics';

// Track project views
logEvent(analytics, 'project_view', {
  project_id: projectId,
  project_title: projectTitle
});
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues).

## 📞 Support

If you have any questions or need help setting up the portfolio, feel free to reach out through the contact form or create an issue in the repository.