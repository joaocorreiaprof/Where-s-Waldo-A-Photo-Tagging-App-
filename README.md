# Where's Waldo Game

## Introduction

This project is a web-based "Where's Waldo"-style game where users must find hidden characters within an image. The game tracks the user's time and validates their selections using a backend server.

## Live

Live: https://where-s-waldo-a-photo-tagging-ap-production.up.railway.app/

## Features

- Interactive Image:
  Users can click on the image to place a targeting box and select a character from a dropdown menu.

- Character Validation:
  The app validates the user's selection by checking the pixel coordinates against a predefined database of character locations.

- Real-time Feedback:
  Users receive immediate feedback on whether their selection is correct or incorrect.

- Score Tracking:
  The app tracks the time taken from the moment the image is loaded until all characters are found.

- High Scores:
  Upon completing the game, users can submit their name to be recorded in the high scores table.

- Responsive Design:
  The app adjusts to different screen sizes, ensuring a consistent experience across devices.

## Technologies Used

- **React**: For building the front-end UI.
- **Vite**: As the build tool for the React app.
- **Node.js (Express)**: For the back-end API.

## Project Structure

### Backend

- **Controllers**: Contains the logic for handling different routes
- **Models**: Contains the Prisma models for the database
- **Routes**: The Express routes for interacting with the API.

### Frontend

- **Components**: React components for building the UI.
- **Pages**: React pages for different views
- **Assets**: Static files like images or styles.

## Setup

### Backend

1. **Clone**

   https://github.com/joaocorreiaprof/Where-s-Waldo-A-Photo-Tagging-App-

1. **Install dependencies**:

   ```bash
   cd server
   npm install

   ```

1. **Start the backend server**:
   ```bash
   npm run dev
   ```

### Frontend

1. **Install dependecies**:

   ```bash
   cd client
   npm install

   ```

2. **Start the react development server**:
   ```bash
   npm run dev
   ```
