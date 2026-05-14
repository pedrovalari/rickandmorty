# Rick and Morty Character Explorer

A modern, responsive web application to explore characters from the Rick and Morty universe. Built with React and powered by [The Rick and Morty API](https://rickandmortyapi.com/).

## Features

- **Browse Characters**: View all characters from the Rick and Morty series
- **Search Functionality**: Search for characters by name
- **Pagination**: Navigate through multiple pages of characters
- **Character Details**: View status, species, gender, origin, and location for each character
- **Responsive Design**: Works beautifully on desktop, tablet, and mobile devices
- **Modern UI**: Beautiful gradient backgrounds and smooth animations

## Live Demo

Deploy this project to see it in action!

## Technologies Used

- React 18
- Rick and Morty API
- CSS3 with modern animations
- Create React App

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

## Project Structure

```
rickandmorty/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── App.js          # Main application component
│   ├── App.css         # Application styles
│   ├── index.js        # Entry point
│   └── index.css       # Global styles
├── netlify.toml        # Netlify configuration
├── package.json
└── README.md
```

## API Reference

This project uses [The Rick and Morty API](https://rickandmortyapi.com/), a free and open API that provides data about the show.

## Contributing

Feel free to fork this project and submit pull requests for any improvements.

## License

This is a training project. The Rick and Morty API is open source and publicly available.

## Acknowledgments

- [The Rick and Morty API](https://rickandmortyapi.com/) for providing the data
- Rick and Morty creators Justin Roiland and Dan Harmon
