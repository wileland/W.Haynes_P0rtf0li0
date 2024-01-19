# Portfolio Website - William L. Haynes

## Table of Contents
1. [Project Introduction](#project-introduction)
2. [User Story](#user-story)
3. [Acceptance Criteria](#acceptance-criteria)
4. [File Structure](#file-structure)
5. [Installation](#installation)
6. [Usage](#usage)
7. [Contributing](#contributing)
8. [Credits](#credits)
9. [License](#license)

## Project Introduction
This project is a portfolio website designed to showcase the web development skills of William L. Haynes. It's built with React and features a single-page application that is deployed on Netlify.

## User Story
AS AN employer looking for candidates with experience building single-page applications
I WANT to view a potential employee's deployed React portfolio of work samples
SO THAT I can assess whether they're a good candidate for an open position


## Acceptance Criteria
GIVEN a single-page application portfolio for a web developer
WHEN I load the portfolio
THEN I am presented with a page containing a header, a section for content, and a footer


## File Structure
Below is the file structure of the project:

- `/public`
  - `favicon.ico`
  - `vite.svg`
- `/src`
  - `/assets`
    - `react.svg`
  - `/components`
    - `/Footer`
      - `Footer.jsx`
      - `footer.css`
    - `/Header`
      - `Header.jsx`
      - `header.css`
    - `/Navigation`
      - `Navigation.jsx`
      - `navigation.css`
    - `/Project`
      - `Project.jsx`
      - `project.css`
  - `/pages`
    - `AboutMe.jsx`
    - `AboutMe.css`
    - `Contact.jsx`
    - `Contact.css`
    - `Portfolio.jsx`
    - `Portfolio.css`
    - `Resume.jsx`
    - `Resume.css`
  - `App.jsx`
  - `App.css`
  - `index.css`
  - `main.jsx`
- `.eslintrc.js`
- `.gitignore`
- `index.html`
- `package.json`
- `package-lock.json`
- `README.md`
- `vite.config.js`

## Installation
To install this application, you'll need Node.js and npm installed. Clone the repository and run the following command:

```sh
npm install

## Usage
To run the application locally, use:
npm run dev
Navigate to http://localhost:3000 to view the application.

## Credits
William L. Haynes - Developer

## License
This project is licensed under the MIT License.

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
