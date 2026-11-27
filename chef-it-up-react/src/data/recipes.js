const recipes = [
  {
    id: 1,
    name: "Chicken Alfredo",
    ingredients: ["chicken", "pasta", "cream", "parmesan", "garlic", "butter"],
    description: "Creamy pasta with grilled chicken",
    image: "/assets/One-Pot-Chicken-Alfredo-2.webp",
    instructions: [
      "Cook pasta according to package instructions, reserving some pasta water",
      "Season chicken and cook until it reaches 165°F (74°C), then slice.",
      "Melt butter in a pan, add minced garlic, then cream. Simmer gently and stir in Parmesan",
      "Toss with pasta and chicken. Add a splash of pasta water to loosen the sauce.",
    ],
  },
  {
    id: 2,
    name: "Chicken Tacos",
    ingredients: ["chicken", "oil", "tortilla", "onion", "cilantro"],
    description: "Seasoned grilled chicken served on warm tortillas",
    image: "/assets/chicken-taco-5-of-5.jpg",
    instructions: [
      "Heat oil in a skillet over medium-high heat and cook seasoned chicken until 165°F (74°C).",
      "Let the chicken rest for 5 minutes, then dice or shred into bite-sized pieces.",
      "Warm the tortillas in a dry pan or directly over a low flame until pliable.",
      "Assemble tacos with chicken and top with diced onion and fresh cilantro.",
    ],
  },

  {
    id: 3,
    name: "Chicken Salad",
    ingredients: ["chicken", "mayonnaise", "celery", "lettuce"],
    description: "Classic chilled chicken salad with crisp celery",
    image: "/assets/Classic-Chicken-Salad-4.jpg",
    instructions: [
      "Dice or shred cooked, chilled chicken breast into uniform pieces.",
      "Finely chop the celery for crunch and add it to a mixing bowl with the chicken.",
      "Fold in mayonnaise, salt, and black pepper until evenly coated.",
      "Chill for at least 15 minutes, then serve over crisp lettuce leaves.",
    ],
  },

  {
    id: 4,
    name: "Beef Chili",
    ingredients: [
      "ground beef",
      "kidney beans",
      "tomatoes",
      "onion",
      "chili powder",
    ],
    description: "Hearty slow-simmered beef and bean chili",
    image: "/assets/beef-chili.jpg",
    instructions: [
      "Brown ground beef and diced onion in a large pot over medium-high heat, then drain excess fat.",
      "Stir in chili powder and cook for 1 minute until fragrant.",
      "Add crushed tomatoes and drained kidney beans, bringing the mixture to a boil.",
      "Reduce heat to low, cover, and simmer for 25–30 minutes until thickened.",
    ],
  },
  {
    id: 5,
    name: "Garlic Butter Salmon",
    ingredients: ["salmon", "butter", "garlic", "lemon", "parsley"],
    description:
      "Pan-seared salmon fillet finished in a garlic lemon butter sauce",
    image: "/assets/garlic-butter-salmon.jpg",
    instructions: [
      "Pat salmon fillets dry and season generously with salt and pepper.",
      "Sear salmon in a hot skillet for 4 minutes per side until golden and flaky.",
      "Lower heat, add butter and minced garlic to the pan, and cook until melted and fragrant.",
      "Squeeze fresh lemon juice into the butter, baste the salmon, and garnish with chopped parsley.",
    ],
  },

  {
    id: 6,
    name: "Beef Stir Fry",
    ingredients: [
      "flank steak",
      "broccoli",
      "soy sauce",
      "garlic",
      "ginger",
      "sesame oil",
    ],
    description:
      "Quick-seared beef and crisp broccoli in a savory ginger garlic glaze",
    image: "/assets/beef-stir-fry.jpg",
    instructions: [
      "Slice flank steak thinly against the grain and toss with a splash of soy sauce.",
      "Heat sesame oil in a wok or large skillet over high heat and sear beef for 2 minutes, then set aside.",
      "Add broccoli florets, minced garlic, and grated ginger to the pan and stir-fry for 3–4 minutes until tender-crisp.",
      "Return the beef to the pan, pour in remaining soy sauce, and toss for 1 minute until evenly glazed.",
    ],
  },
  {
    id: 7,
    name: "Shrimp Scampi",
    ingredients: ["shrimp", "linguine", "butter", "garlic", "lemon", "parsley"],
    description:
      "Tender shrimp tossed with linguine in a bright garlic lemon butter sauce",
    image: "/assets/shrimp-scampi.jpg",
    instructions: [
      "Cook linguine according to package instructions, reserving half a cup of pasta water.",
      "Melt butter in a large skillet over medium heat and sauté minced garlic for 1 minute until fragrant.",
      "Add peeled shrimp and cook for 2 minutes per side until pink and opaque.",
      "Toss in cooked linguine, fresh lemon juice, chopped parsley, and a splash of pasta water to coat.",
    ],
  },
  {
    id: 8,
    name: "Pork Carnitas",
    ingredients: [
      "pork shoulder",
      "orange juice",
      "cumin",
      "garlic",
      "tortilla",
      "onion",
    ],
    description: "Slow-braised crispy shredded pork served in warm tortillas",
    image: "/assets/pork-carnitas.jpg",
    instructions: [
      "Season cubed pork shoulder with cumin, salt, and pepper, then sear in a Dutch oven until browned.",
      "Add smashed garlic cloves, fresh orange juice, and enough water to barely cover the meat.",
      "Cover and simmer on low for 2.5 hours until the pork is fall-apart tender.",
      "Shred the pork, crisp it under the broiler for 5 minutes, and serve on warm tortillas with diced onion.",
    ],
  },
  {
    id: 9,
    name: "Mushroom Risotto",
    ingredients: [
      "arborio rice",
      "cremini mushrooms",
      "vegetable broth",
      "parmesan",
      "butter",
      "shallot",
    ],
    description:
      "Rich and creamy Italian rice dish folded with sautéed mushrooms and Parmesan",
    image: "/assets/mushroom-risotto.jpg",
    instructions: [
      "Sauté sliced mushrooms and diced shallot in butter over medium heat until browned and tender.",
      "Stir in arborio rice and toast for 2 minutes until the edges turn translucent.",
      "Add warm vegetable broth one ladle at a time, stirring frequently until absorbed before adding more.",
      "Once the rice is creamy and al dente, remove from heat and fold in grated Parmesan and a knob of butter.",
    ],
  },
];

export default recipes;
