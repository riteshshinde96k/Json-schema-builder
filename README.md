# JSON Schema Builder

This is a dynamic and interactive JSON schema builder built with React, Ant Design, and React Hook Form. It provides a user-friendly interface to dynamically create and define complex JSON schemas, with support for nested objects and real-time validation. The application features a live preview that updates instantly, showing the generated schema structure.

## Features

*   **Dynamic Field Management:** Easily add, edit, and delete fields at any level.
*   **Recursive Nesting:** Create deeply nested objects by setting a field's type to `Nested`.
*   **Live JSON Preview:** A two-column layout provides an instant preview of the generated JSON schema as you build it.
*   **Multiple Data Types:** Supports common data types including `String`, `Number`, `Boolean`, `Float`, `ObjectId`, `Date`, `Array`, and `Enum`.
*   **Field Validation:** Prevents the creation of fields with duplicate keys at the same nesting level.
*   **Modern UI:** Clean and intuitive user interface built with Ant Design components.

## Tech Stack

*   **Framework:** [React](https://reactjs.org/)
*   **UI Library:** [Ant Design](https://ant.design/)
*   **Form Management:** [React Hook Form](https://react-hook-form.com/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool:** [Vite](https://vitejs.dev/)

## Folder Structure

The project is organized with a feature-centric approach, making it scalable and easy to maintain.

```
/src
├── components/
│   ├── schemaBuilder/
│   │   ├── SchemaBuilder.tsx    # Main layout component with two columns
│   │   └── schemaBuilder.css    # Custom styles for the builder
│   ├── FieldArrayComponent.tsx  # The core recursive component for rendering fields
│   └── JsonPreview.tsx          # Renders the live JSON output
├── types/
│   └── schema.ts                # Centralized TypeScript types for the application
└── App.tsx                      # Root application component
```

## How It Works

The application's logic is centered around a few key components that work together to manage the state and render the UI.

### `schema.ts`
This file is the single source of truth for the data structure. It defines the TypeScript types for a schema field (`SchemaField`) and the overall form state (`FormValues`), ensuring type safety across the application.

### `SchemaBuilder.tsx`
This is the main component that sets up the overall structure of the page.
*   It uses Ant Design's `` and `` components to create the two-column layout.
*   It initializes `react-hook-form` using the `useForm` hook, which manages the entire state of the schema.
*   It passes the form's `control` and `watch` functions down to its children, `FieldArrayComponent` and `JsonPreview`.

### `FieldArrayComponent.tsx`
This is the most critical component and contains the core recursive logic.
*   It uses the `useFieldArray` hook from React Hook Form to dynamically manage a list of fields (adding, deleting).
*   It maps over the array of fields and renders a `FieldRow` for each one.
*   **Recursion:** If a `FieldRow`'s type is set to `Nested`, it renders another instance of the `FieldArrayComponent` for that field's `children`, creating the infinite nesting capability.
*   It uses `Controller` components from React Hook Form to connect Ant Design inputs (``, ``, ``) to the form state.

### `JsonPreview.tsx`
This component is responsible for displaying the live schema output.
*   It receives the current form data as a prop.
*   It contains a `transformToJSON` function that recursively traverses the form data and converts it into the desired clean JSON format.
*   The result is displayed inside a `` tag with `JSON.stringify` for clear formatting.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v16 or later)
*   npm or yarn

### Installation

1.  Clone the repo
    ```sh
    https://github.com/riteshshinde96k/Json-schema-builder.git
    ```
2.  Navigate to the project directory
    ```sh
    cd json-schema-builder
    ```
3.  Install NPM packages
    ```sh
    npm install
    ```

4.  Running the Application
    To start the development server, run the following command. The application will be available at http://localhost:3000.

    text
    npm run dev
