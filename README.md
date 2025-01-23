This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tasks
- This is the task definition: https://heartpace.notion.site/Front-end-developer-202da38e92f54f3193e8fd2a7230f63d

- <details>
  <summary>Outline</summary>
  Create a web application for managing a list of users with the ability to view, search, filter, add, and edit data. You need to display more than 1000 users on the page and everything should work quickly.

  **In total, there should be a table with virtualization, a form for working with user entities, a bar chart and a donut chart that will show statistics on the data at your discretion**

  ### **Technical Requirements:**

  1. **Core Technologies**: Use React for the frontend and Redux for state management.
  2. **Data**: Use a mock API (e.g., using json-server or MirageJS) to simulate server operations. Functions for retrieving the user list, adding, deleting, and editing a user should be implemented.
  3. **Tables**: Implement a virtual table for displaying the list of users. The table should support sorting and filtering by key attributes (e.g., name, age, city). Recommended libraries: **react-table v8, ag grid, react-base-table** with built-in virtualization functionality or you can use r**eact-window, react-virtualization**
  4. **Forms**: Add forms for creating and editing user data. Forms must include validation of the entered data. Recommended libraries: **Formik**
  5. **Charts**: Use a data visualization library to create charts, for example, demographic data on users (age, distribution by cities, etc.). Recommended libraries:  https://airbnb.io/visx
  6. **Search and Filtering**: Implement the ability to search for users and filter the list by key parameters.
  7. **Responsive Design**: The interface should display correctly on various devices and screen resolutions. Recommended libraries: **Material-ui v5**
  8. **Additional**: Implement the option to choose a theme (light/dark). Recommended libraries: **Material-ui v5**

  ### **Evaluation Criteria:**

  - Code Quality: Cleanliness, readability, use of modern practices and ES6+ standards.
  - Application Architecture: Logic separation, use of Redux for state management.
  - UI/UX: Interface convenience, visual design.
  - Functionality: Compliance with the technical assignment, error-free operation of the application.

  ### **Submission:**

  - The result should be provided as a link to GitHub with instructions for running the application locally.
  - Hosting the application on GitHub Pages, Netlify, Vercel, or similar platforms to demonstrate the project's functionality in real-time is encouraged.
  </details>

### Tasks
- [x] Manage User List 
  - [x] User list should have 1000+ items
  - [x] Users can be search, filter, add and edited. 
  - [x] [Bonus] User can be deleted
  - [x] [Bonus] User add / edit can be done with a separate route or from the modal
  - [x] There should be a column to show bar and donut chart in the user table.
  - [x] Virtualization is a must
  
### Tech
- [x] React + Redux
- [x] Data 
   -  [ ] using json-server or MirageJS
   -  [x] Use in-memory db with nextjs apis with fakerjs
- [x] user react-table v8, ag grid, react-base-table for virtualized table
- [x] [Bonus] or create your own table with react-window, react-virtualization
    - The table in the dashboard page is used the react-window
    - The table in the user list uses the ag-grid lib. 
- [x] Use formik for form state managements.
- [x] Add Charts in row, use recharts (didn't use visx due to the complex implementation)
- [x] Search and filter by key parameters (name, age, city)
- [x] Sorting can be done in the AG grid table 
 - [x] Responsiveness. use shadcn and tailwind css.
 - [x] [Bonus] Theme selector - dark and light theme.
    - [x] save on localstorage - used next-theme package.
 - [x] Unit tests - Added few with almost 100% of coverage
