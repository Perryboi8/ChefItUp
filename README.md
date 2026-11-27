# Chef it up!

Chef it up! is a recipe discovery web application designed to help users find meals based on ingredients they already have at home.

The original vision includes an AI-powered cooking assistant called **Talk to Chef**, where users could describe the ingredients available in their refrigerator, specify their preferred cuisine, and receive personalized meal recommendations.

The current version implements recipe browsing, ingredient-based search, cooking instructions, and persistent favorites. AI-powered recommendations remain a planned enhancement.

## Milestone 1 — HTML & CSS

The initial milestone focused on building a static prototype of the application.

Features included:

- Home page featuring sample recipes.
- Expandable recipe instructions.
- Favorites page with sample recipes.
- Talk to Chef conversation preview.
- Meet the Team section.
- Responsive styling.

The static prototype is preserved in the `milestone-1-static/` directory.

To view the original prototype, open `milestone-1-static/index.html` in a browser.

## Milestone 2 — React Application

The application was migrated to React to introduce interactive functionality.

### Features

- **Recipe Library:** Nine recipes featuring images, ingredients, descriptions, and cooking instructions.
- **Recipe Search:** Filter recipes by name or individual ingredients.
- **Recipe Instructions:** Expand recipe cards to view ingredient lists and preparation steps.
- **Favorites:** Add or remove recipes from a saved collection.
- **Persistent Favorites:** Save favorite recipes using browser `localStorage`.
- **Navigation:** Switch between Home, Favorites, and Talk to Chef.
- **Meet the Team:** Information about the original project creators.
- **Responsive Design:** Layouts for desktop, tablet, and mobile devices.
- **Talk to Chef:** Placeholder for future AI integration.

### Technologies Used

- HTML5
- CSS3
- JavaScript
- React
- Vite
- Browser Local Storage
- Git and GitHub

## Getting Started

### Prerequisites

Install Node.js and npm.

### Installation

Navigate to the React project directory:

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

## Testing and Production Build

Run ESLint to check for code-quality issues:

```bash
npm run lint
```

Build the application for production:

```bash
npm run build
```

The generated production files will be located in the `dist/` directory.

## Future Improvements

Potential enhancements include:

- Integrating a functional AI-powered Talk to Chef assistant.
- Allowing users to describe multiple available ingredients in natural language.
- Recommending recipes based on ingredient availability, cuisine preferences, and missing ingredients.
- Connecting to an external recipe API or database.
- Expanding the recipe library.

## Project Status

The React application implements the core recipe browsing, search, instructions, and favorites functionality.

Talk to Chef currently demonstrates the planned AI feature through a placeholder interface. It does not generate AI responses.
