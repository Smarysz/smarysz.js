# smarysz.js

smarysz.js is a JavaScript library for easier coding in pure JS. It provides new functions into built-in classes:
###
- **Array** - for working with arrays
- **String** - for working with strings
- **Math** - for working with mathematical functions
- **HTMLElement** - for working with DOM (text, html, css, attributes, dataset)

and create own class **Smarysz** with various functions.

## Installation

Create **<script>** tag in the bottom part of body tag and insert **src=""** attribute containing a valid library path.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Example</title>
</head>

<body>
    <script src="smarysz.js"></script>
</body>

</html>
```

## Usage

```javascript
// Create alias (optional)
const s = Smarysz;

// Random number in the range
let n = s.rand(10, 20); // Smarysz.rand(10, 20) also works

// Check if email address is valid
let isValid = s.validEmail('person@example.com'); // true
let isValidAgain = s.validEmail('personexample.com'); // false

// Set CSS properties to a DOM element
const body = document.querySelector('body');
body.css('background-color', 'aqua'); // Sets background-color do <body>
```

## License

smarysz.js is **[GNU GPL v3](https://www.gnu.org/licenses/quick-guide-gplv3.html)** licensed

![GitHub license](https://www.gnu.org/graphics/gplv3-88x31.png)
