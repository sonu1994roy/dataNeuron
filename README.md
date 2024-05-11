# Data Neuron Task Documentation

## Task 1: UI Component Layout

**Component Layout Completion:**
- Utilized Normalize CSS v8.0.1 via CDN for consistent rendering across browsers.
- Integrated HTML, CSS, and JavaScript to create the layout.
- Implemented resizing functionality for components using an open-source library.

**Open Source Libraries:**
- Utilized Normalize CSS v8.0.1 from the CDN for consistent rendering.
- Implemented JavaScript functionalities for resizing components.

**Live Demo:**
- View the live demo [here](https://sonu1994roy.github.io/dataNeuron/).

**Repository Link:**
- Access the code repository [here](https://github.com/sonu1994roy/dataNeuron.git).

**Steps to Access Repository:**
1. Create a folder in your local system.
2. Open the terminal and execute the command: `git clone origin -b master https://github.com/sonu1994roy/dataNeuron.git`.
3. View Live Server:
   - Open the cloned code in your preferred code editor.
   - Launch the live server to view the layout in action.

## Task 2: MERN Stack

**Add/Edit Data API:**
- Implemented APIs to add/edit data in the components developed in ReactJS.
- Two buttons provided:
  - Add: Clears existing data and allows users to add new data (creates a new entry in the table).
  - Update: Enables users to update existing data (updates entry in the table).

**Count API:**
- Provides the count of how many times users have called the add and update APIs.

**Execution Time:**
- Add/Edit Data API execution time: (1.2 s).
- Count API execution time: (300-400 ms).

**Table/Collection for Database:**
- Utilized MongoDB database with two collections: Data and Count.

**Basic Validations:**
- Implemented basic validations to ensure that empty text data is not entered.

**Technology Stack:**
- Technology stack includes React, Node.js, Express, MongoDB, and Bootstrap.

**Demo View Link:**
- View the demo [here](https://dataneuron-6uj1.onrender.com).

**Repository Link:**
- Access the code repository [here](https://github.com/sonu1994roy/dataNeuron.git) (branch: mernstack).

**Steps to Run Locally:**
1. Clone the repository using: `git clone origin -b mernstack https://github.com/sonu1994roy/dataNeuron.git`.
2. Navigate to the directory `dataNeuron` and ensure the folders `backend` and `client` are available (if not, see then checkout branch: merntest).
3. Install dependencies for backend: `npm i` and run backend: `npm run dev`.
4. Navigate to the client directory (cmd - cd clint) `cd clint`, install dependencies: `npm i`, and start frontend: `npm start` .
5. Backend APIs can be accessed via proxy pass URL in the frontend.
   - `"proxy": "http://localhost:5000"`.

## Author
**Sonu Kumar**
**Portfolio:** Click [Here](https://sonu1994roy.github.io/sonumyportfolio.github.io/?fbclid=PAAaZTmHe0nsDtcHPx-7pp3_wvoXZ9dgKJKIXlnsXXe2_aEI5KFyLU0_2jMDo) **@Sonu Kumar**  
