# React Redux JWT Demo

This project demonstrates the use of **React Redux** for state management and **JSON Web Token (JWT)** for user authentication. It is a simple yet functional application that incorporates Redux concepts such as `state`, `store`, `reducers`, `actions`, and `dispatch`, while implementing JWT to handle authentication workflows.

---

## 🚀 Features

- **Login System**: A login page with mock authentication using hardcoded credentials.
- **JWT-Based Authentication**: Stores and verifies a mock JWT token for secure access to protected routes.
- **Redux State Management**:
  - Centralized state management with `store`, `actions`, and `reducers`.
  - Tracks user authentication state (`isAuthenticated`) and token.
- **Protected Route**: A `Dashboard` page accessible only after successful login.
- **Logout**: Clears the JWT token and resets the authentication state.

---

## 🛠️ Technologies Used

- **React**: Frontend framework for building UI components.
- **Redux**: State management library for handling global app state.
- **JWT**: Mock token-based authentication for securing protected routes.
- **React-Redux**: Official Redux bindings for seamless integration with React.
- **Babel**: Transpiler for modern JavaScript features.
