# Comic Clan

ComicClan is an online library of comic books. This library is a combined collection of comic books owned by the community members.

# Deployed on Heroku

[ComicClan](https://comicclan.herokuapp.com/)

# Demo

![ComicClan Demo](demo/comicClanDemo.gif)

## Features / Specifications

- retrieve / display comic book data
- group books by year, writer, artist, owner random
- search books based on name (or partial name)
- grouping is done by URL of app
- whenever a book is clicked, app scrolls back to the top of the page
- when an incorrect url is hit, redirects to 404 page, then back to home in 5 seconds
- displays a message for empty search
- mobile responsive
- loader displays (pure CSS) when async calls are made

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Install [yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable)

```
brew install yarn
```

### Installing

In the project directory:

Install Dependencies

```
yarn install
```

Run app in development mode:

```
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Running the tests

```
yarn test
```

Launches the test runner in the interactive watch mode.<br />

## Deployment

```
yarn build
```

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

---

## Built With

- [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript that compiles to plain JavaScript.
- [React](https://reactjs.org/) - A component-based JavaScript library for building user interfaces
- [Redux](https://redux.js.org/) - A Predictable State Container for JavaSccript Apps
- [Redux Saga](https://redux*saga.js.org/) - A library that makes application side effects easier to manage
- [Styled Components](https://styled*components.com/) - A way to style your React components using CSS and ES6
- [Rebass](https://rebassjs.org/) - React Primitive UI Components built with styled system
- [React Router](https://reacttraining.com/react-router/) - Declarative routing for React
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) - A lightweight solution for testing React components
- [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) - A grid based layout system
- [CSS Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) - A one-dimensional layout method for laying out items in rows or columns

## Authors

- **Matt Upham** - [@mattupham](https://github.com/mattupham)
