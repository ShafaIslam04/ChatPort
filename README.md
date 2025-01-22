# ChatPort - Real-Time Chat Application

## Overview
ChatPort is a modern chat application built with Nuxt.js and Vue.js that enables real-time communication between users. The application features a clean, intuitive interface and supports both user and admin roles for flexible communication.

## Features

### 1. User Management
- Create new users with username
- Assign roles (User/Admin)
- View list of all registered users
- Visual distinction between admin and regular users

### 2. Chat Interface
- Real-time messaging
- Role-based message display
  - Admin messages appear on the right (blue background)
  - User messages appear on the left (white background)
- Message filtering based on selected user
- User role switching during chat
- Message persistence using localStorage

### 3. UI/UX Features
- Modern, responsive design
- Gradient headers and clean layout
- Message bubbles with sender information
- User avatars with initials
- Intuitive navigation

## Technical Stack

### Frontend
- Nuxt.js 3
- Vue.js 3
- TailwindCSS for styling
- PrimeVue for UI components

### State Management
- Pinia for state management
- Local storage for data persistence

## Project Structure
├── components/
│ └── Navbar.vue # Global navigation component
├── pages/
│ ├── index.vue # Landing page
│ ├── user.vue # User management page
│ └── chat.vue # Chat interface
├── stores/
│ └── chat.js # Chat state management
└── layouts/
└── default.vue # Default layout template


## Key Components

### User Management (user.vue)
- User creation interface
- Role selection
- User list display
- Navigation to chat

### Chat Interface (chat.vue)
- Real-time message display
- User selection dropdown
- Role switching
- Message input with send button

### Navigation (Navbar.vue)
- Consistent navigation across pages
- Responsive design
- Brand identity

## Future Enhancements
1. Real-time backend integration
2. User authentication
3. Message encryption
4. File sharing capabilities
5. User status indicators
6. Message read receipts
7. Group chat functionality
8. Message search functionality

## Getting Started

1. Install dependencies:

  npm install

2. Run development server:

  npm run dev

3. Build for production:

  npm run build


This documentation provides a comprehensive overview of the ChatPort project, its features, technical stack, and structure. It can be used as a reference for developers working on the project or for presenting the project to stakeholders.