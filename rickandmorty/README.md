# Rick and Morty Character Explorer

A modern, responsive web application to explore characters from the Rick and Morty universe. Built with React and powered by [The Rick and Morty API](https://rickandmortyapi.com/).

## Features

- **Browse Characters**: View all characters from the Rick and Morty series
- **Debounced Search**: Filter characters by name with instant feedback
- **Pagination**: Navigate through multiple pages of characters
- **Character Detail Pages**: Dedicated page per character with full bio and episode list
- **Client-side Routing**: Smooth, animated transitions between list and detail views
- **Minimalist Design**: Clean, distraction-free UI with light/dark mode support
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Responsive Layout**: Works beautifully on desktop, tablet, and mobile devices

## Technologies Used

- React 18
- React Router v6 (client-side routing)
- Framer Motion (animations and transitions)
- Rick and Morty API
- CSS Custom Properties (light/dark theming)
- Create React App

## Architecture

The codebase is organized for scalability and maintainability with clear separation of concerns:

```
src/
├── components/          # Reusable UI components (one folder per component)
│   ├── Header/
│   ├── SearchBar/
│   ├── CharacterCard/
│   ├── CharacterGrid/
│   ├── Pagination/
│   ├── Loader/
│   ├── EmptyState/
│   ├── Footer/
│   ├── BackButton/
│   ├── ScrollToTop/
│   └── index.js         # Barrel exports
├── pages/               # Route-level views
│   ├── Home/            # Character list, search, pagination
│   ├── CharacterDetail/ # Single character page with episode list
│   └── index.js
├── hooks/               # Custom React hooks
│   ├── useCharacters.js # Paginated/searchable list
│   ├── useCharacter.js  # Single character fetcher
│   ├── useEpisodes.js   # Multi-episode batch fetcher
│   └── useDebounce.js
├── services/            # API layer
│   ├── charactersApi.js
│   └── episodesApi.js
├── constants/           # App-wide constants
│   ├── api.js
│   └── animations.js    # Framer Motion variants
├── utils/               # Pure utility functions
│   ├── character.js
│   └── url.js
├── App.js               # Router composition root
├── App.css
├── index.js
└── index.css            # Global styles & design tokens
```

### Design Principles

- **Single Responsibility**: Each component, hook, and service does one thing well
- **Co-located Styles**: Each component owns its own CSS file
- **Design Tokens**: Theme values are defined as CSS custom properties in `index.css`
- **Reusable Animations**: Framer Motion variants are centralized in `constants/animations.js`
- **Custom Hooks**: Business logic is extracted from components into hooks
- **Service Layer**: All API calls go through `services/` for easy testing and swapping

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd rickandmorty
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Building for Production

```bash
npm run build
```

Builds the app for production to the `build` folder. The build is optimized for best performance.

## Deployment

### Deploy to Netlify

This project is ready for deployment to Netlify with the included `netlify.toml` configuration file.

#### Option 1: Deploy via Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build the project:
```bash
npm run build
```

3. Deploy:
```bash
netlify deploy --prod
```

#### Option 2: Deploy via Netlify Dashboard

1. Push your code to GitHub
2. Go to [Netlify](https://www.netlify.com/)
3. Click "Add new site" → "Import an existing project"
4. Connect to your GitHub repository
5. Netlify will automatically detect the build settings from `netlify.toml`
6. Click "Deploy site"

Your site will be live in minutes with automatic HTTPS and a custom domain!

#### Option 3: Drag and Drop

1. Build the project: `npm run build`
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag the `build` folder to deploy instantly

## API Reference

This project uses [The Rick and Morty API](https://rickandmortyapi.com/), a free and open API that provides data about the show.

## Contributing

Feel free to fork this project and submit pull requests for any improvements.

## License

This is a training project. The Rick and Morty API is open source and publicly available.

## Acknowledgments

- [The Rick and Morty API](https://rickandmortyapi.com/) for providing the data
- Rick and Morty creators Justin Roiland and Dan Harmon
