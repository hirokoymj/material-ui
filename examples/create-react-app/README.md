# Flexbox 

The flex container properties are:

- flex-direction
- flex-wrap
- flex-flow
- justify-content
- align-items
- align-content


## flex-direction/flex-wrap
- How the flex items stack
  
**vertically**
```css
.flex-container {
  display: flex;
  flex-direction: column
}
```

**horizontally**
```css
.flex-container {
  display: flex;
  flex-direction: row;
}
```

**wrap**
```css
.flex-container {
  display: flex;
  flex-wrap: wrap;
}
```

**shorthand**
```css
.flex-container {
  display: flex;
  flex-flow: row wrap;
}
```

## justify-content
how the flex items align horizontally.

```css
.flex-container {
  display: flex;
  justify-content: 
| center
| flex-start
| frex-end
| space-around (space before, between and after)
| space-between (space between the lines:)
| space-evenly
}
```

## align-items
how the flex items align vertically.

```css
.flex-container {
  display: flex;
  align-items: 
  stretch 
  | flex-start 
  | flex-end 
  | center 
  | baseline
}
```

![](public/images/justify-content.png)

![](public/images/align-items.png)


## flex-grow
- The flex-grow property specifies how much the item will grow relative to the rest of the flexible items inside the same container.


### References:

- [CSS-TRICS](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Flexbox](https://www.w3schools.com/css/css3_flexbox.asp)
- [flex-flow Play it](https://www.w3schools.com/cssref/playit.asp?filename=playcss_flex-flow)
- [flex-grow](https://www.w3schools.com/cssref/css3_pr_flex-grow.asp)