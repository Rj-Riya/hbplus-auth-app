# Architecture:

## src
 ├── components
 ├── context
 ├── navigation
 ├── screens
 ├── services
 └── utils

# Authentication Flow
User clicks "Login with Google"
↓
Google OAuth authenticates user
↓
User profile retrieved from Google API
↓
Email domain validated
↓
If domain matches allowed domain → access granted
↓
User redirected to Dashboard