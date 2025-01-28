This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Prerequisite
- Node 18 +
- npm 10 +

### Install dependencies
```bash
npm install
```

### First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Deployment
- Integrated Vercel for deployment. you'll be able to see the latest build version on [https://viranmalaka-user-list-demo.vercel.app/](https://viranmalaka-user-list-demo.vercel.app/).
- To run the unit tests for each pushes, I have added the github actions. you'll be able to see the latest status in action tab. ([Actions](https://github.com/viranmalaka/lt-pse-user-list-demo/actions/workflows/unit-tests.yaml))
- both this two action will execute for each `main` brach updates as per the current setup.

## Tasks
- This is the task definition: https://heartpace.notion.site/Front-end-developer-202da38e92f54f3193e8fd2a7230f63d

### Features
- [x] Dashboard
- [x] Manage User List 
  - [x] User list should have 1000+ items
    - [x] User list has virtualization
    - [x] On the dashboard page I've used react-window
    - [x] On the user list page I've used ag-grid library
  - [x] Users can be search, filter, add and edited. 
  - [x] [Bonus] User can be deleted
  - [x] [Bonus] User add / edit can be done with a separate route or from the modal
- [x] User's aggregated values will be displayed in bar chart and pie chart.
- [x] Responsiveness - well supported mobile view. 
- [x] Theme Toggle - Light and dark mode can be switched and the preference is persisted in the user session.

### Demo
- https://github.com/user-attachments/assets/4b08131e-cfe1-4de1-a446-b90447beef42

- https://github.com/user-attachments/assets/f81b55d9-8db2-4419-8dc3-bc38ceae4373
  
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
