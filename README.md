# ChefItUp
Web Application to help users figure out what they are able to cook based on their ingredients they currently have in the fridge. You will be able to ask our AI Chef for ideas on what to cook and even specify what type of cuisine you are craving. The goal is to help users who have trouble finding recipes that they are able to cook now.

## Combined screens

The combined interface uses Edwin_Test's original cream (`#fae3c6`), off-white
(`#fff9f2`), terracotta (`#C65D32`), recipe photos, Favorites, and About pages.
Ryan_Test contributes the ingredient-entry workflow, welcome layout, assistant
entry point, and chat screen structure.

Open `index.html` in a browser, or run `python -m http.server 8000` from this
folder and visit `http://localhost:8000`. No build or dependencies are required.

- Add comma-separated ingredients to filter the three sample recipes by at least
  one matching ingredient; remove chips or clear the list to browse everything.
- Open recipe instructions and save or remove favorites with the heart buttons.
- Ingredients and favorites persist in browser local storage when available.
- Talk to Chef is an explicitly labeled local demo using the sample recipes;
  it does not connect to an AI service.
- All four pages share the responsive stylesheet and keyboard focus styles.

Validation: JavaScript syntax, local page/asset references, and interaction smoke
checks for ingredient deduplication, filtering, favorites, empty states, and demo
chat. A real browser visual review is still needed.
