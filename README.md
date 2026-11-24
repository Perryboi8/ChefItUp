# Chef it up!

Chef it up! is a recipe discovery web application designed to help users find meals based on ingredients they already have at home.

The goal is to simplify meal planning, reduce food waste, and help users discover recipes without having to search through multiple websites.

The original vision also includes an AI-powered cooking assistant called **Talk to Chef**, which would allow users to request personalized recipe recommendations, specify their preferred cuisine, and ask cooking-related questions. This feature is currently planned for future development.

## Milestone 1 — HTML & CSS Prototype

The first milestone focused on designing and building the application's user interface using HTML and CSS.

### Features

- Home page with sample recipes and expandable recipe instructions.
- Talk to Chef conversation preview.
- Favorites page with sample recipes.
- About section introducing the development team.
- Responsive layout using CSS.

The original prototype contains visual demonstrations only. Searching, AI chat, and saving favorites were not functional at this stage.

### Running Milestone 1

Open `milestone-1-static/index.html` in a web browser.

No server or additional dependencies are required.

## Milestone 2 — React Application

The second milestone focused on migrating the application to React and implementing interactive functionality.

### Implemented Features

- **Recipe Search:** Search recipes by name or ingredients.
- **Recipe Cards:** Dynamically display recipes using reusable React components.
- **Favorites Management:** Add and remove recipes from a personal favorites collection.
- **Persistent Favorites:** Save favorites using browser `localStorage`, allowing them to remain available after refreshing.
- **Navigation:** Switch between Home, Favorites, and Talk to Chef using React state.
- **Responsive Design:** Adjust the interface for desktop, tablet, and mobile screens.
- **Talk to Chef:** Placeholder page for a planned AI cooking assistant.

### Technologies Used

- HTML5
- CSS3
- JavaScript
- React
- Vite
- Browser Local Storage
- Git and GitHub

### Running Milestone 2

**Prerequisites:**

- Node.js and npm installed.

Navigate to the React application directory:

```bash
cd chef-it-up-react
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in the terminal.

### Testing and Building

Run ESLint:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

## Future Improvements

Potential enhancements include:

- Integrating an AI-powered cooking assistant.
- Providing complete cooking instructions for every recipe.
- Supporting more recipes and additional filtering options.
- Connecting the application to a recipe API or backend database.

## Project Information

Developed for **CPSC 349 — Front-End Engineering** at California State University, Fullerton.
