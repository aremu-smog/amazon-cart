# Overview

This is assessment was done with NextJS and CSS Modules for styling.

## Installation

### Clone the repo

Open your terminal, copy and paste the code the below to clone the repo on your local

```bash
git clone https://github.com/aremu-smog/amazon-cart aremu-amazon-cart`
```

Change your directory to the project's directory with the command: `cd aremu-amazon-cart`

### Install Node Modules

To install `node_modules`, run

```bash
yarn
```

or if `npm` is your thing, do:

```bash
npm install
```

### Add Environment Variables

Rename or make a copy of `.env.sample` to `.env.local`, assign the API Key provided in the assessment to: `NEXT_APP_CHIMONEY_API_KEY`

### Run the project

To run the project, run

```bash
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the project.

## Implementation Details and tradeoffs

### General

The app makes an API call within a `context` provider to the `ChiMoney API` and giftcards are extracted and stored in the `ProductContext` - this makes it possible to access the `products` anywhere in the app (e.g the cart page or `CartContext`). There is a performance issue with getting all the products at once though in that if we have thousands of products coming from the backend then the call is going to be very expensive and might even timeout - the solution to this will be paginate the request this will be in collaboration with the backend - if the backend is unavailable another solution will be to do lazy loading on the frontend especially for images so that they only show up when the user scrolls to that portion of the website.

Also, the `API` doesn't return price for giftcards so I simply used a made up price of `id x senderFee` - this to ensure we can calculate a subtotal for the cart.

### Homepage

On the homepage you see a list of giftcards from the `Chimoney API`, you can add an item to the cart by clicking on the `Add to Cart` button. If an item already exists in the cart it simply increases the quantity of that item in the cart. The tradeoff on this page was showing all the products at once - pagination would have been a great idea.

Also, the page header could stick to the top as you scroll considering we have a lot of products.

### Cart Page

The cart page features two main section.

- The cart section
- The sidebar

####

The cart section feature cart items. You can increase the quantity of a cart item by clicking a `dropdown`, if the value selected is `zero`, the item gets deleted. If the `value` is greater than `10`, you are presented with an input field and an `update` button. On mobile, you have a `plus` and `minus` button beside the dropdown which increments the quantity of the cart item by 1 and decremnt it by 1 respectively. If the quantity is `one`, and the text on the `minus` button changes to `Del` and clicking on it deletes the item.

If there are no items in the cart, the user is presented with an empty cart state and button which directs them to the homepage.

## The Sidebar

The sidebar contains a summary of the order: no of items and subtotal. It also has a proceed button that is disabled if the cart is empty.
