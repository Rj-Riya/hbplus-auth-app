# HBPlus Google Authentication App

A cross-platform authentication application built with **React Native (Expo)** and **React Native for Web** that allows users to log in using **Google OAuth** and restricts access to users belonging to a specific domain.

This project demonstrates secure authentication, protected routing, and clean application architecture using a **single codebase for both mobile and web platforms**.

---

# Features

- Google OAuth Login
- Domain-restricted authentication
- Protected dashboard route
- Logout functionality
- Persistent login session
- Responsive layout for web and mobile
- Clean modular architecture
- Environment-based configuration

---

# Tech Stack

- **React Native (Expo)**
- **React Native for Web**
- **Google OAuth 2.0**
- **Firebase Authentication**
- **React Navigation**
- **AsyncStorage (session persistence)**
- **Netlify (deployment)**

---

# Architecture
src
├── components
│ └── GoogleLoginButton.js
│
├── context
│ └── AuthContext.js
│
├── navigation
│ └── AppNavigator.js
│
├── screens
│ ├── LoginScreen.js
│ └── DashboardScreen.js
│
├── services
│ └── firebase.js
│
└── utils
└── validateDomain.js


### Responsibilities

**components**  
Reusable UI components.

**context**  
Global authentication state management.

**navigation**  
Route handling and protected navigation.

**screens**  
Application UI pages.

**services**  
External integrations such as Firebase configuration.

**utils**  
Helper functions such as domain validation.

---

# Authentication Flow
User clicks "Login with Google"
↓
Google OAuth authentication begins
↓
Google returns an access token
↓
App fetches user profile from Google API
↓
Email domain is validated
↓
If domain matches allowed domain → access granted
↓
User session saved locally
↓
User redirected to Dashboard

---

# Domain Restriction

The application only allows users with email addresses from a specific domain.

Example requirement:
Allowed domain: @hbplus.fit


Implementation logic:

@javascript
const domain = email.split("@")[1];

return domain === allowedDomain;

If the domain does not match, the user receives the following error:

Access restricted. Please login using your official domain email.
Protected Routes

The application prevents direct access to protected pages.

Navigation logic:

If user authenticated → Dashboard
If user not authenticated → Login

Authentication state is managed through AuthContext.

Environment Configuration

Create a .env file in the root directory.

Example:

EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID=
EXPO_PUBLIC_FIREBASE_API_KEY=
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=
EXPO_PUBLIC_FIREBASE_PROJECT_ID=
EXPO_PUBLIC_FIREBASE_APP_ID=
EXPO_PUBLIC_ALLOWED_DOMAIN=hbplus.fit

The repository includes a .env.example file as a reference.

Installation

Clone the repository:

git clone https://github.com/Rj-Riya/hbplus-auth-app.git
cd hbplus-auth-app

Install dependencies:

npm install

Start the development server:

npx expo start

Run on web:

Press "w" in the terminal
Running the App

Supported platforms:

Web (browser)

Android emulator

iOS simulator (macOS required)

Expo automatically enables React Native Web, allowing the same codebase to run across multiple platforms.

Deployment

The application is deployed using Netlify.

Live App:

https://shimmering-blini-c141d5.netlify.app/

Build configuration:

Build command: npx expo export
Publish directory: dist
Security Considerations

OAuth handled via Google Authentication

Domain validation prevents unauthorized access

Protected routes prevent direct URL navigation

Environment variables used for sensitive credentials

Session persistence managed with AsyncStorage

Author

Riya Raj

GitHub:
https://github.com/Rj-Riya

Assessment Requirements Covered

This implementation satisfies all required features:

✔ Google Sign-In
✔ Domain validation
✔ Protected dashboard page
✔ Logout functionality
✔ Loading state during authentication
✔ Error handling
✔ Clean project architecture
✔ Web + Mobile compatibility
✔ Deployment link included