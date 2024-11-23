# Mastering CSS: Display Properties and Designing Layouts

## Introduction and Lesson Objectives

Hello, learners! Today, we're going to explore important parts of making a website with CSS: the CSS Box Model, Flexbox, and Grid.

- CSS Box Model: Think of every piece on your website as a box. The Box Model is what we use in CSS to manage where each box goes, how much space it takes up, and how it interacts with other boxes.

- Flexbox: Sometimes, we want what's in the boxes to adjust itself nicely. This is where Flexbox comes in. Using Flexbox, we can control how elements inside a box align and order themselves.

- Grid: If we want to lay out our boxes in a grid, like a table or a chessboard, the Grid system is the tool we use. It makes complex designs simple, letting us quickly decide what goes in which row or column.

Here's what we'll learn in this course:

- Understand the CSS Box Model and its role in organizing your website.
- Master the CSS flexbox and grid systems, becoming pro at how they manage boxes.
- Practice using these systems to build neat and well-structured web pages.

Ready to dig in? Let's go!

## Delving into the CSS Box Model

Each HTML element can be viewed as a box. The Box Model encompasses:

- **Content**: The actual element content.
- **Padding**: The space that surrounds the content.
- **Border**: The box's perimeter.
- **Margin**: Space outside the box.

Let's put this into action using a simple paragraph:

```html
<!-- 'Hello, World!' is the content. It comes with padding of 20px, a black border of 1px, and a margin of 30px. -->
<p style="border: 1px solid black; padding: 20px; margin: 30px;">Hello, World!</p>
```

By manipulating the padding, border, and margin, you can position and resize HTML elements, which aids in layout design.

## Flexbox Layout Basics

Introducing Flexbox, a layout model that brings harmony and order to your web pages. In a Flexbox layout, all HTML elements find a place with good coordination, much like a Wheelbarrow race! Let's dive into Flexbox!

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .flex_demo {
        display: flex; /* apply flexbox */
        justify-content: space-around; /* horizontal alignment */
        align-items: center; /* vertical alignment */
      }
      .flex_demo > div {
        background-color: lightblue;
        padding: 20px;
      }
    </style>
  </head>
  <body>

  <div class="flex_demo">
    <div>I love</div>
    <div>Flexbox</div>
    <div>Layout!</div>
  </div>

  </body>
</html>
```

In this HTML code, we have created a Flex container `.flex_demo` and positioned the child div elements evenly and centrally along both axes. Here's what the properties do:

1. `display: flex;` turns the element into a Flex container.

2. `justify-content: space-around;` controls the alignment of items on the horizontal line in the current line. The space-around value means that items are evenly distributed in the line with equal space around them. Other possible values of the justify-content property include:
   - `center`: Items are centrally aligned.
   - `space-between`: There's equal space between each item, but not between the items and the container.
   - `flex-start`: Items are aligned at the start of the container.
   - `flex-end`: Items are aligned at the end of the container.
3. `align-items: center;` aligns flex items along the cross axis of the current line of the flex container. It's analogous to `justify-content` but in the perpendicular direction. The `center` value aligns the items at the center of the container. Other possible values of the align-items property include:

   - `flex-start`: Items align to the top of the container.
   - `flex-end`: Items align to the bottom of the container.

Now, you might be wondering about the `.flex_demo > div` part. This notation is called the "child combinator" ( `>` ). The `>` combinator selects elements that are *direct children* of a specified element. In this example, `.flex_demo > div` selects all div elements that are direct children of the element with the `flex_demo` class.

## Into the Grid: CSS Grid Layout

Now let's explore the CSS Grid Layout, a powerful tool for creating webpage layouts. It arranges the layout into rows and columns, much like pieces in a board game. Intriguing, isn't it?

```html
<!DOCTYPE html>
<html>
<head>
  <style>
  .grid_demo {
    display: grid;
    grid-template-columns: auto auto;
    gap: 10px;
    background-color: lightpink;
    padding: 10px;
  }
  .grid_demo > div {
    background-color: lightblue;
    padding: 20px;
    text-align: center;
  }
  </style>
</head>
<body>

  <div class="grid_demo"> 
    <div>I</div>
    <div>love</div>
    <div>Grid</div>
    <div>Layout!</div>
  </div>

</body>
</html>
```
The CSS class `.grid_demo` lays out HTML elements in a grid layout, giving a totally new perspective for web layout design. Let's understand this grid layout step by step:

1. `display: grid;` is applied to convert our container element into a Grid layout.
2. `grid-template-columns: auto auto;` This tells the browser to generate a grid layout with two columns of **equal width**. The number of times "auto" is repeated determines the number of columns.
3. `gap: 10px;` defines the size of the gap between the rows and columns in the grid.
4. `.grid_demo > div` is an example of the child selector (`>`) that we discussed previously. In this case, all direct div children of `.grid_demo` will have a `background-color` of lightblue, `padding` of 20px, and the text in each division will be centered within its container.

### Lesson Summary
Well done! We've ventured further into CSS, concentrating on learning the ins and outs of positioning elements and designing layouts with powerful techniques like `Flexbox` and `Grid`. Up next, we have practical exercises to solidify this newly gained knowledge. Each progressive step increases our understanding of CSS, empowering us to create feature-rich, aesthetically pleasing web pages. Let's continue learning, and as always, happy coding!