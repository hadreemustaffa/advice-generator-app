# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I Learned](#what-i-learned)
- [Author](#author)
- [Acknowledgements](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Links

- Solution URL: [Frontend Mentor](https://www.frontendmentor.io/solutions/advice-generator-app-4r-ELpR1tI)
- Live Site URL: [Github Pages](https://hadreemustaffa.github.io/advice-generator-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid

### What I learned

I encountered a problem where the advice generated was the same each time I clicked on the dice. Turns out it was using cached advice, only after some time has passed, I can generate a new one. I read [@melwynt's code](https://github.com/melwynt/advice-generator-app-main/blob/main/src/App.jsx) that solved this problem using timestamp. So I used it and it worked. Every call is now unique to current timestamp I click on the dice.

And the code is: `{url}?timestamp=${new Date().getTime()`.

### Useful resources

- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) - Since this is a basic implementation of API call, this is all I used.

## Author

- Frontend Mentor - [@hadreemustaffa](https://www.frontendmentor.io/profile/hadreemustaffa)

## Acknowledgments

- [@melwynt](https://www.frontendmentor.io/profile/melwynt) - Thanks to this person I solved my problem.
