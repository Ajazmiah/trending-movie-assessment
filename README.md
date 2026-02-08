# Movie App

## Overview
This is a React + Node.js movie app that fetches trending movies and allows users to mark favorites.  

- Client: React (Vite)  
- Server: Node.js + Express  
- React Router 
- API: TMDb  
# This project uses the TMDb v3 API key.
- look inside server directory and in the env.example file for more details

---

## Prerequisites

- Node.js (use version specified in `.nvmrc`)  
- NPM  

> The client uses Vite, which requires Node >= 20.19.6.  

---

## Setup

From the **root folder**, run the following commands:

```bash
# Use the correct Node version
nvm install    # installs the version in .nvmrc if not already installed
nvm use        # switches to that version
node -v        # verify correct Node version - should be 20.19.6

# Install all dependencies
npm run install:all

# create .env file inside server dir and add your API key 
- look inside server directory and in the env.example file for more details

# Run the app (client + server concurrently) - from root
npm run dev

# Run Tests
cd client
npm run test
```

---
## NOTES 
### Pagination - Trending Movies
- Pagination is available in the code (via the `page` state) but has not been implemented in the UI to keep things simple and due to time constraints.  
- The structure is in place, so its possible to extend it to support multiple pages is.
### Caching - Movie Details
- A local JSON file is used to cache movie details.  
- Movie details are stored as an array of objects.  
- When fetching a movie, the array is checked first to see if the details already exist, allowing multiple movies to be cached.
### Favorite Movies
- Favorite movies are stored in localStorage to persist them across sessions.  
- The Context API is used to manage and provide access to favorite movies and related functions, avoiding prop-drilling and making the data easy to access from any component.


---
## client runs on
- http://localhost:5173
## server runs on
- http://localhost:5000

 





