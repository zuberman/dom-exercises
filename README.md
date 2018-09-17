# DOM exercises

## Getting started

- Work in pairs
- Fork repo and clone to local machine
- Pick which of the seven exercises you want to attempt. Some make use of array methods, others need additional technologies such as `localStorage`.
- Each exercise has its own HTML and JS file. Feel free to add a CSS file if needed.
- The difficulty level is indicated next to each question
- Focus primarily on functionality and just enough styling to make the solutions functional.
- Make use of event bubbling and delegation to set event listeners on multiple, similar elements
- Use BEM notation where appropriate
- Avoid setting styles directly on elements. To apply alternative styling to an element, add another class with a BEM modifier

## Display list - easier

You are provided with an array of Star Wars characters. Use the `map` array method to convert it into an array of HTML `li` elements. Each `li` element should contain information about the character such as their `name`, `height`, `mass`, `hair_color`, `skin_color`, `eye_color`. Display the list of characters in the element with class `characters`.

## Form validation - harder

You are provided with form that has 4 inputs

- `name`
- `age`
- `email`
- `phone`

Check that each input has a valid value entered when user tries to submit the form. You'll need to prevent the form from getting submitted.

- `name` - must not be empty. Name can only contain letters or the symbols `'` or `-`.
- `age` - must not be empty. Age can only be a positive number
- `email` - is optional. If entered, it must contain an `@` symbol
- `phone` - is optional. If entered it must contain only numbers and spaces. The first character must be a `0`

When invalid inputs are detected on `submit`, display an error message under the invalid input telling the user what they need to correct. Mark invalid inputs by placing a red border around them. Set the border colour by setting a class on the input with color styling applied using the class.

When an invalid input has been corrected on next `submit` remove error message and reset border color.

When user submits a form and no errors are detected, display an alert notifying the user that form has been submitted.

## Pagination - medium

Fetch and display a list of characters and their names from the `https://swapi.co/api/people/` API endpoint. At the top of the results display a list of available page numbers. When a page number is clicked fetch and display the results from that page. Use the `count` property of API results to calculate how many page links are required.


## Add to favourites - harder

Fetch and display a list Star Wars movies from the `https://swapi.co/api/films/` API endpoint. Display a `favourite` icon next to each movie. When the icon is clicked change the way it is displayed to mark it as a favourite. Use `localStorage` to save favourites so that they can persist between page refreshes.

Take a look at `localStorage` documentation at [https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) and how to use it with objects at [https://coderwall.com/p/ewxn9g/storing-and-retrieving-objects-with-localstorage-html5](https://coderwall.com/p/ewxn9g/storing-and-retrieving-objects-with-localstorage-html5)

## Fetch additional info - harder

Fetch and display a list of Star Wars character names from the `https://swapi.co/api/people/` API endpoint. When a character is clicked, fetch and display a list of Star Wars movies that character appeared in.

## Sorting - medium

Fetch and display a list Star Wars characters, including `name`, `height` and `mass` from the `https://swapi.co/api/people/` API endpoint. The page has three buttons `Name`, `Height` and `Mass`. When a button is clicked sort the characters by that attribute and update the order they are displayed in on the page.

Take a look at how data attributes work at [https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)

## Filtering - medium

Fetch and display a list of Star Wars character names from the `https://swapi.co/api/people/` API endpoint. The page contains a text input. When user types text into it, display only characters whose name contains the string typed into the input. When input is empty display all characters. You will probably want to use the filter array method.
