# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.
You may also see any lint errors in the console.


In the project directory, you can run:

### `json-server --watch db.json --port 8000`

View the dbjson by opening [http://localhost:8000](http://localhost:8000) in your browser.
The page will reload when you make changes.
You may also see any lint errors in the console.

The Crazy Good Cupcake Shop App is made up of a few pages:

Shop: this is the main page, App file is mainly there to link Shop and so we can add other features in the future if we wanted. Most of the code is routed through Shop. 
There's a routes file which works with the NavBar to give easy and quick access to users.

The About, Career, and FAQ page are all structured in a similar fashion. NavBar, Header, Image, and then various <div>s and <span>s that are used for holding the text data. The <div>s and <span>s give us the ability to access esch part of the text seperatly so we can use CSS on different elements easily. 

The Cart page utilizes local storage to hold data from the Shop page. It keeps a tally of the items added to cart and gives a print out of the items, the amount of items, the price of each item, and a running total for the cart. We added a button which clears the cart by wiping the local storage. 

We built in a Error page as well, which the user recieves if there's an error.

The Shop page is the heart of this app. It's made up of several components. There's a review form, which posts to the review container on the eft side. Most of the page is a container of cards, each containing data about a cupcake and buttons with which to add and subtract the amount of the specified cupcake the user wants; and a button which adds that amount to the cart.

The NavBar is fixed and moves with the user scrolling, so they always have easy access to the other pages. 

We are continually looking for insight into improvements and welcome suggestions.
-Crazy Good Cupcakes
