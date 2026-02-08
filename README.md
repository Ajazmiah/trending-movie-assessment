# Movie App

## Overview
This is a React + Node.js movie app that fetches trending movies and allows users to mark favorites.  

- Client: React (Vite)  
- Server: Node.js + Express  
- React Router 
- API: TMDb  

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

# Run the app (client + server concurrently)
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

 





