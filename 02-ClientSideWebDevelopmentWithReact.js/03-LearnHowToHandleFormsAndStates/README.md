# Diving Into React.js: Learn How to Handle Forms and States

## Introduction
Welcome to our lesson on handling forms in React.js. Forms, which are the 
backbone of user interaction and data collection in web applications, are 
treated uniquely in React.js. Our goal is to learn how to create forms, manage 
their state, and handle their submissions. This lesson is fun and interactive. 
We'll start with form elements in React.js, move on to the interaction between 
forms and state, and finally wrap up with form submissions. Are you ready to 
roll?

## Getting to Know Form Elements in React
Forms in React.js consist of several elements that allow users to input data. 
We have three main form elements: `input`, `textarea`, `select`, and `label`.

- `input`: This versatile element allows users to provide data input. Its appearance and behavior vary based on the `type` attribute. For instance, `type="text"` creates a simple text field, `type="radio"` generates a radio button, and `type="checkbox"` yields a checkbox. Others include `type="password" ` for password input fields and `type="submit"` for submit buttons.

- `textarea`: This element is a text-input area typically used for inputs that require more than one sentence.

- `select`: This element generates a dropdown list of pre-defined options, encapsulated by option tags.

- `label`: Specifies a label for the associated element. Enhances user experience by binding text to its associated form control, so clicking on the label selects the control.

Let's view an example of a simple form with a `text input` field and a submit 
`input button`.

```js
import { useState } from "react";

function SimpleForm() {
  const [name, setName] = useState("");
  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <form>
      <label>
        Name: 
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <input type="submit" />
    </form>
  );
}

export default SimpleForm;
```

The `handleNameChange` function captures and updates the input value (name) 
every time you type into the text field.

Note that in JSX, void elements like `input` need closing with `/>`.

Here is an example of using the `select` form element:

```JavaScript
import { useState } from "react";

function SimpleForm() {
  const [country, setCountry] = useState("");
  
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <form>
      <label>
        Select your country: 
        <select value={country} onChange={handleCountryChange}>
            <option value="">--Please choose an option--</option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Australia">Australia</option>
            { /* ... (more options) ... */ }
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default SimpleForm;
```

In this example, handleCountryChange function sets the state to the selected 
country whenever a new country is chosen from the dropdown.

## State Management in React Forms
A crucial part of handling forms in React.js involves managing state. Generally, 
the form field's state corresponds to the form element's `value` attribute. This 
arrangement allows for controlling the `value` of the form input through the 
state, making the React component the "source of truth" for the input element.

Components that follow this method are known as Controlled Components. These 
components update the state with every input field change event. In our first 
form, the input field `value` updates whenever a key is pressed:

```js
  // ...
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  // ...
```

## Handling Form Submissions
When submitting a form, by clicking or pressing enter on a `submit` type input 
or a button type input, the data from the form fields is typically sent to the 
server, and the web page is refreshed. We aim to prevent this standard page 
refresh. By overriding this default behavior with `preventDefault()`, we can 
keep the page static while submitting the form.

Here's how we can accomplish it:

```JavaScript
  // ...
  const handleSubmit = (event) => {
    event.preventDefault();  // prevents form submission from refreshing the page
    alert(`The input field text is "${value}"`);
  };
  // ...
```

This `handleSubmit` function is triggered by the `onSubmit` form event. It acts 
by preventing the page from refreshing and displays an alert with the text from 
the form input.

## Lesson Summary and Practice
Well done! You've learned the basics of handling forms in React.js, including 
form elements, state management, and form submissions. Coming up are fun 
practice exercises that will solidify these learnings and make you more 
comfortable with form handling in React.js. Don't worry, these tasks are 
designed to be engaging and highly relevant to real-life examples. 
See you there!


```
```