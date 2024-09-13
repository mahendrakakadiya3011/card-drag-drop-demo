# I am front-end Developer so added the code for front-end only.

# How To RUN Project

First install the all dependencies of packages

yarn install  
# or
npm install

# Start the project on local

yarn start
# or
npm start

It will run on the localhost:3000


## Thought Process

I started by creating a new React application with TypeScript integration. The project structure includes a pages folder for organizing the different pages and a components folder for reusable components throughout the application.

## Card Component and Display
I created a simple card component based on the design requirements and used it on the homepage. To implement the design, I wrote specific CSS for each component and page.

For the JSON data, I created a TypeScript file containing the default JSON, which includes free image URLs. This data is imported on the homepage and used to dynamically map the card components.

To display the cards, I used CSS Grid, ensuring that three cards are displayed in a row on the homepage.

## Card Component Logic
The card component is styled with basic CSS and includes an image. For the image overlay functionality, I used CSS to handle the overlay and added logic to display it when a card is clicked. A state variable is used to control the visibility of the overlay. I also implemented a feature that listens for the ESC keypress using useEffect, which closes the overlay when the key is pressed.

For image loading, I used the onLoad method of the image element to detect when the image has fully loaded, and until then, a loading placeholder is shown. Additional CSS is applied to handle the loading state.

## Drag-and-Drop Functionality
After researching libraries for drag-and-drop functionality, I decided that @hello-pangea/dnd is the best fit for this project. Following the documentation, I implemented drag-and-drop functionality in a grid layout, allowing the cards to be rearranged.

## Automatic Data Update
To ensure the card data is up-to-date, I added a setInterval function that runs every 5 seconds. It checks if the current card data differs from the previous data. If there’s a change, an API call is triggered to update the data.
