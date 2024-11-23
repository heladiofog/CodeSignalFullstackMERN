# Interactive Web Development with JavaScript and DOM

## Introduction to JavaScript and DOM

Welcome aboard! In today's lesson, we are exploring the dynamic duo of JavaScript and the Document Object Model (DOM). Working in tandem with the DOM, we can manipulate and update our web pages in real-time based on user interactions.

Do you remember how some websites greet, "Good morning!" during the day and "Good night!" after sundown? This dynamic behavior is exactly what we aim to achieve using JavaScript and DOM.

## Linking JavaScript to HTML

To introduce JavaScript into HTML, we need the `<script>` tag. Although
JavaScript can be written directly inside HTML, it's often tidier to store it
in separate files:

```HTML
<!DOCTYPE html>
<html>
  <body>
    <h1>Welcome to My Web Page</h1>
    <p id="demo">This is a paragraph.</p>
    <!-- Linking an external JavaScript file -->
    <script src="myscript.js"></script>
  </body>
</html>
```

Inline `<script>` tags also serve as an option:

```HTML
<!DOCTYPE html>
<html>
  <body>
    <h1>Welcome to My Web Page</h1>
    <p id="demo">This is a paragraph.</p>
    <!-- Inline JavaScript -->
    <script>
      // Changing the paragraph text
      document.getElementById("demo").innerHTML = "Hello, there!";
    </script>
  </body>
</html>
```

The innerHTML property is a powerful tool that allows us to get the content of
elements or directly insert content into elements in our HTML. In the code
above, we used innerHTML to change the text content of a paragraph.

## Understanding DOM Manipulation

Atomic yet immense, DOM manipulation is achievable via JavaScript. This tool
offers us the ability to grasp elements and perform operations on them much
like a craftsman working on his creation. Here are some handy methods for DOM
manipulation:

- `document.getElementById(id)`: This function fetches an element using its
  unique ID, much like how you would find a book in a library.
- `document.getElementsByTagName(name)`: It selects all elements that share a
  specified tag name, such as all paragraphs (<`p>`).
- `document.getElementsByClassName(name)`: This function retrieves all elements
  having the provided class name.
- `document.querySelector(selector)`: Just as you pick out your favorite fruit
  from a basket, it selects the first element that matches the supplied CSS
  selector.

Selectors that return multiple elements (`getElementsByTagName` and `getElementsByClassName`) return a JS array of elements, so you need to select which element in the list you want through array indexing.

Below, we have an illustration of how we can select an HTML element and modify its content and style:

```HTML
<!DOCTYPE html>
<html>
  <body>
    <h1 id="title">Hello World!</h1>
    <button onclick="changeTitle()">Transform title</button>
    <script>
      function changeTitle() {
        // Selects the 'title' element
        let titleElement = document.getElementById('title');
        // Changes the element's content and color
        titleElement.innerHTML = 'Hello JavaScript!';
        titleElement.style.color = 'red';
      }
    </script>
  </body>
</html>
```

The `<button>` tag in HTML is used to create a clickable button on your webpage.
Contained within the opening and closing `<button>` tags, you can place text or
images. This content is what users see and click on. The `onclick` attribute is
an event attribute that instructs the browser to execute a specific JavaScript
function when the button is clicked. The function to be executed is specified
right within the `onclick` attribute.

In this case, once the button is clicked it triggers the `changeTitle()` method.
Within this method, we're setting the `style.color` property of `titleElement`.
`titleElement.style.color = 'red';` alters the CSS color of the text within
this element to red.

Using `getElements` or `querySelector` to access an element is just the
starting point. Once you have the reference to an element, there are many things
you can do to manipulate it.

- **Modifying content**: As you've seen with `innerHTML`, after selecting an
  element, you can directly manipulate its content.

- **Changing style**: You can change any CSS property of an element using
  `element.style.property`. This covers a range of alterations from colors,
  dimensions, positioning, to transitions, transformations and visibility.
  Note: In JavaScript, CSS property names that contain a hyphen (like
  `background-color`) are converted to camelCase (becomes `backgroundColor`).
  This is due to the fact that hyphens are not allowed in JavaScript variable
  names.

```HTML
<script>
  let titleElement = document.getElementById('title');
  titleElement.style.backgroundColor = 'yellow';  //changes the background color of the title element to yellow
</script>
```

## Manipulating Elements

Modifying content via `innerHTML` and changing style via
`element.style.property` is just the beginning. Look at more options of
manipulating elements.

- **Adding or removing classes**: You can add a new class to an element with
  `element.classList.add('className')` or remove a class with
  `element.classList.remove('className')`.

```HTML
<div id="div2" class="oldClass">Some div</div>
<script>
  let otherDiv = document.querySelector('#div2');
  otherDiv.classList.add('newClass');
  otherDiv.classList.remove('oldClass');
</script>
```

- **Setting or getting attributes**: You can change any attribute of an element 
  using `element.setAttribute('attrName', 'attrValue')` or retrieve it with
  `element.getAttribute('attrName')`.

```HTML
<img id="image1" src="myimage.jpg">
<script>
  let img = document.getElementById('image1');
  img.setAttribute('alt', 'An image');
  let imgSource = img.getAttribute('src');
  console.log(imgSource); // prints 'myimage.jpg' to the console
</script>
```

- **Event handling**: With a reference to an element, you can attach an event 
  listener that will execute a specified function when the event occurs, using 
  syntax like `element.addEventListener('click', function)`. Note that when 
  adding an event, the function does not require `()` like `onclick`.

```HTML
<button class="btn">Click me</button>

<script>
  let btn = document.getElementsByClassName('btn')[0];
  btn.addEventListener('click', function() {
    alert('Button clicked!'); // the alert function displays a dialog box containing the provided text
  });
</script>
```

- **Creation and deletion of elements**: Using methods such as 
  `document.createElement('tagName')` to create an element or 
  `element.removeChild(childElement)` to remove a child element.
  The `document.createElement('tagName')` will create an empty element with the 
  tag name you provide. However, when an element is created like this, it does 
  not automatically appear on the webpage. To make it visible, you have to 
  append the new element to an existing element on the page using 
  `appendChild()`. The `appendChild()` method places a node as the last child of 
  its parent. With `appendChild()`, you can also dynamically add new content to 
  your document.

```HTML
<button onclick="createPara()">Create a paragraph</button>
<button onclick="removePara()">Remove the paragraph</button>

<div id="myDiv"></div>
<script>
function createPara() {
  let para = document.createElement("P");                 
  let t = document.createTextNode("This is a paragraph.");    
  para.appendChild(t); // using appendChild to insert the created text node into the paragraph
  document.getElementById("myDiv").appendChild(para); // appending the paragraph to the existing div
}
function removePara() {
  let parent = document.getElementById("myDiv");
  let child = parent.getElementsByTagName("P")[0];
  parent.removeChild(child); // removing the paragraph from the div
}
</script>
```

With just a few keystrokes in JavaScript, voila, you've transformed the entire 
persona of your webpage!

## Lesson Summary

Great job, future web wizards! You have now mastered the art of manipulating 
web pages using JavaScript and the DOM! From linking JavaScript to your HTML, 
understanding how to select elements using methods like `getElementById`, `getElementsByTagName` and `querySelector`, to dynamically updating these 
elements by changing their content, style, attributes or even adding and 
removing them.

You've learned how JavaScript can interact with the DOM to update your webpages 
in real-time, providing the ability to create a rich and interactive user 
experience that can respond to user inputs and actions dynamically.

Next up are practice exercises for you to apply this newfound knowledge and 
help turn this knowledge into an intuitive understanding. Then, in future 
lessons, we'll venture into more advanced topics and broaden your understanding 
of JavaScript and web development as a whole.

Buckle up and let's continue to explore the wonderful and exciting world of 
JavaScript and web development!