---
title: "Build Catsy :- a small cat gallery app (Using Fetch Api)"
description: "A beginner-friendly guide to building a simple cat gallery using Fetch API in vanilla JavaScript."
pubDate: "Aug 16 2021"
---

<!-- # Build Catsy 🐱 – A Small Cat Gallery App (Using Fetch API)

**Author**: Prashant Tanwar
**Date**: August 16, 2021
**Estimated Reading Time**: 6 min -->

---

Hey readers! Hope you're coding and coffeing ☕ lol.

Before diving into the actual content, let me share who this blog is for and what we’re going to build.

This is a beginner-level project, and I assume you're already familiar with:

- Basics of **HTML**, **CSS**
- **DOM scripting** in JavaScript

We’ll learn how to hit an API endpoint, get data, and render it on the UI using:

- Minimal **HTML**
- Minimal **CSS**
- **Vanilla JavaScript**

> 💡 You don't need to be an expert, but you should be comfortable referencing selectors using DOM methods.

---

## 🧱 HTML Part

The HTML part is quite simple. We need:

- A **container** with an `<img>` tag where we'll insert images dynamically.
- A **button** which, when clicked, will fetch data from the API.

Here’s the HTML structure:

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Catsy</title>
		<link rel="stylesheet" href="style.css" />
	</head>
	<body>
		<header id="main-header">
			<h1>Catsy - get photos of beautiful cats</h1>
		</header>

		<div class="container">
			<img src="" alt="" />
		</div>

		<button id="show-cats-btn">Show Cats</button>

		<footer> made with 🧡 </footer>

		<script src="app.js"></script>
	</body>
</html>
```

---

## 🧠 JavaScript Part

We’ll divide the JavaScript into two parts:

1. Accessing selectors and adding event listeners
2. Fetching data and rendering it to the UI

---

### 🔹 Part 1: DOM Manipulation

Reference the container and button:

```js
let container = document.querySelector(".container");
let showCats = document.querySelector("#show-cats-btn");
```

Add an event listener:

```js
showCats.addEventListener("click", getCatsPhotos);
```

> 📝 We're passing the function `getCatsPhotos` by reference — **not calling it immediately**.

---

### 🔹 Part 2: Fetching the Cat API

We’ll use the Fetch API to get random cat images.

```js
fetch("https://aws.random.cat/meow").then(function (response) {
	console.log(response);
});
```

The response is a `Response` object. To extract the JSON data, we call `.json()`:

```js
fetch("https://aws.random.cat/meow")
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		console.log(data);
	});
```

The API returns an object like:

```json
{
	"file": "https://purr.objects-us-east-1.dream.io/i/YrW.jpg"
}
```

---

### 🧑‍💻 Putting it All Together

Now we update the `getCatsPhotos()` function and use `.innerHTML` to render the image:

```js
let container = document.querySelector(".container");
let showCats = document.querySelector("#show-cats-btn");

showCats.addEventListener("click", getCatsPhotos);

function getCatsPhotos() {
	fetch("https://aws.random.cat/meow")
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			container.innerHTML = `<img src="${data.file}" alt="Random Cat"/>`;
		});
}
```

---

## ✅ Final Result

Each time you click the **Show Cats** button, a new random cat image appears 🐈‍⬛.

---

## 🙏 Conclusion

I hope you enjoyed building this mini app and learned something new about the **Fetch API**.

> Gracias!
