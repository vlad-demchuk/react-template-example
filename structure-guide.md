# React Application Structure Guide

This document outlines the folder structure and organization principles for this React application. Following these guidelines will help maintain a clean, scalable, and maintainable codebase.

## Folder Structure Overview

```
src/
├── assets/        # Static files (images, fonts, etc.)
├── components/    # Shared components
│   └── ui/        # Reusable UI components
├── hooks/         # Shared React hooks
├── pages/         # Page components (e.g., for routing)
├── layouts/       # Layout components
├── data/          # Static data or temporary mocks
├── services/      # API service logic
├── lib/           # External libraries or wrappers
├── utils/         # Utility functions
├── state
    ├── context/   # Raw context + hooks
    ├── providers/ # Context wrappers (e.g. App-level providers)
    └── stores/    # Zustand, etc. (please don't use Redux in 2025)
├── styles/        # Global styles
├── types/         # Shared TypeScript types
└── features/      # Feature-specific folders
```

## Detailed Folder Descriptions

### `assets/`

Contains static files used in the application, such as images, fonts, icons, and other media files.

- Keep assets organized in subfolders by type (e.g., `images/`, `fonts/`, `icons/`)
- Use lowercase filenames with hyphens for spaces (e.g., `hero-image.png`)
- Consider using SVGs for icons and logos when possible

### `components/`

Contains reusable components that are shared across multiple features or pages.

- `ui/`: Contains primitive UI components like buttons, inputs, cards, etc.
- Components should be focused on presentation rather than business logic
- Each component should have its own folder with the component file, styles, and tests
- Export components as default exports, and re-export them as named exports from an index.tsx file for better autocompletion

Example:
```tsx
// Good
const Button = () => {...}
export default Button;
// index.tsx
export { default as Button } from './Button';
```

### `hooks/`

Contains custom React hooks that can be reused across the application.

- Hooks should be focused on a single responsibility
- Name hooks with the `use` prefix following React conventions
- Export hooks as default exports, and re-export them as named exports from an index.ts file for better autocompletion

Example:
```tsx
export function useLocalStorage() {...}
// index.ts
export { default as useLocalStorage } from './useLocalStorage.ts';
```

### `pages/`

Contains components that represent entire pages in the application, typically used with a routing library.

- Pages can import and compose components from `components/` and `features/`
- Pages should focus on layout and data fetching, delegating rendering to components
- Name pages according to their route (e.g., `Home.tsx`, `UserProfile.tsx`)

### `layouts/`

Contains layout components that wrap pages with common elements like headers, footers, and navigation.

- Layouts should accept children props to render the page content
- Keep layouts focused on structure rather than specific content

### `data/`

Contains static data or mock data used for development and testing.

- Use TypeScript interfaces to define the shape of the data
- Export data as constants or functions that return data
- Organize data by domain or entity

### `services/`

Contains logic for interacting with external services, such as API clients.

- Organize services by domain or external service
- Use TypeScript for type safety in request and response data
- Implement error handling and retry logic
- Consider using a consistent pattern for all API calls

### `lib/`

Contains wrappers around external libraries or custom implementations of common functionality.

- Use this folder to abstract third-party dependencies
- Create simple interfaces that hide implementation details
- This makes it easier to swap out libraries in the future

### `utils/`

Contains utility functions that are used across the application.

- Functions should be pure and focused on a single task
- Group related utilities in a single file (e.g., `date.ts`, `string.ts`)
- Export functions as named exports 
- Re-export functions from an index.ts for cleaner path (optional)

### `state/`

Contains all application-level or shared state logic, organized for clarity and scalability.

- `stores/`: Contains external state containers (e.g., Zustand, Jotai, Redux), including actions, selectors, and initial state
- `context/`: Contains raw React Contexts and associated custom hooks
- `providers/`: Contains context provider components or composite providers (e.g., <AppProviders>)
- Each state unit should be self-contained with logic, types, and tests in the same folder if needed

### `styles/`

Contains global styles and style-related configurations.

- Global CSS files
- Theme definitions
- Style utility functions
- CSS-in-JS configurations

### `types/`

Contains shared TypeScript type definitions.

- Define interfaces and types that are used across multiple features
- Export types as named exports
- Re-export types from an index.ts for cleaner path (optional)
- Use descriptive names that reflect the domain

### `features/`

Contains feature-specific code organized into self-contained units.

Each feature folder can contain its own:
- Components
- Hooks
- State
- Types
- Utils
- Services
- Tests

This approach keeps related code together and makes features more portable and maintainable.

## Feature Folder Structure

A feature folder should be organized as follows:

```
features/
└── feature-name/
    ├── components/     # Feature-specific components
    ├── hooks/          # Feature-specific hooks
    ├── state/          # Feature-specific state
    ├── types/          # Feature-specific type definitions
    ├── utils/          # Feature-specific utility functions
    ├── services/       # Feature-specific services
    ├── index.ts        # Public API of the feature
    └── README.md       # Documentation for the feature (optional)
```

The `index.ts` file should export only what needs to be public:

```tsx
// features/users/index.ts
export { ProfileCard } from './components/ProfileCard';
export { useUserStatus } from './hooks/useUserStatus';
export type { UserProfileExtended } from './types';
```

## Best Practices

1. **Naming Conventions**
   - Use PascalCase for component files and folders (e.g., `Button.tsx`)
   - Use camelCase for utility files, hooks, and non-component files (e.g., `useLocalStorage.ts`, `formatDate.ts`)
   - Use kebab-case for feature folders and asset files (e.g., `users`, `hero-image.png`)

2. **Imports**
   - Use absolute imports for better readability and to avoid deep nesting issues
   - Group imports by type (React, third-party, internal)

3. **Component Structure**
   - Keep components focused on a single responsibility
   - Extract complex logic into custom hooks
   - Use TypeScript props interfaces for better documentation and type safety

4. **Code Splitting**
   - Consider code splitting for large features or pages
   - Use dynamic imports for routes that aren't immediately needed

5. **State Management**
   - Use React's built-in state management (useState, useReducer, Context) for most cases
   - Consider a state management library only when needed for complex global state

## When to Create a New Feature

Create a new feature when you have a set of components, hooks, and utilities that:

1. Work together to implement a specific user-facing feature
2. Share common state or logic
3. Could potentially be reused in other projects
4. Are complex enough to benefit from isolation

Examples of good feature candidates:
- users
- shopping-cart
- notifications
- dashboard
- file-uploader

## Conclusion

This structure is designed to scale with your application while keeping code organized and maintainable. It follows the principle of "feature-based" organization, which groups code by domain rather than by technical type.

As your application grows, you may need to adapt this structure to your specific needs, but the core principles of separation of concerns and feature-based organization should remain.
