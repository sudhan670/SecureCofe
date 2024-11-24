# RBAC Dashboard

A Role-Based Access Control (RBAC) Dashboard built using React, TypeScript, Redux, and Tailwind CSS. This project enables management of users, roles, and permissions with a focus on scalability and extensibility.

---

## Features

- **User Management**: Add, edit, activate/deactivate, and delete users.
- **Role Management**: Define roles with specific permissions for resources.
- **Dynamic Permissions**: Support for `read`, `write`, `delete`, and `manage` permissions for multiple resources.
- **Responsive Design**: Tailored for both desktop and mobile views.
- **Extensibility**: Modular components and scalable architecture.

---

## Tech Stack

- **Frontend**: React + TypeScript
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI, Lucide Icons
- **Form Validation**: React Hook Form + Zod (optional)

---

## Prerequisites

Ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/rbac-dashboard.git
cd rbac-dashboard
```

### 2. Install Dependencies

```bash
# Install project dependencies
npm install
```

### 3. Set Up Tailwind CSS

If Tailwind CSS is not pre-configured, initialize it using:

```bash
npx tailwindcss init -p
```

Configure the `tailwind.config.js` file and add the necessary CSS imports to `src/index.css` (see [Installation Guide](#installation) for details).

---

## Running the Application

Start the development server:

```bash
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components (Button, Card, Dialog, etc.)
│   └── RBACDashboard.tsx # Main dashboard component
├── store/               # Redux slices and store configuration
├── types/               # TypeScript type definitions
├── App.tsx              # Main application entry
├── index.tsx            # Application root
└── index.css            # Tailwind CSS styles
```

---

## Available Scripts

- **`npm start`**: Runs the app in development mode.
- **`npm run build`**: Builds the app for production.
- **`npm test`**: Runs the test suite (if configured).

---

## Customization

1. **Add New Resources**: Extend the `Resource` type in `RBACDashboard.tsx` to include new resources.
2. **Permissions**: Customize the permission sets for each role.
3. **UI Components**: Modify or replace components in the `ui` directory to fit your design system.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with a detailed description of your changes.

---

## License

This project is licensed under the [MIT License](LICENSE).

---
!
