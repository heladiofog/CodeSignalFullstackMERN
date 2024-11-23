# Topic Overview and Actualization

Hi there! Today, we embark on your web development journey with HTML — HyperText Markup Language, the cornerstone of any webpage. Just as bones provide structure to the human body, HTML structures web pages. By the end of this lesson, you should understand how webpages are structured and create your first HTML webpage.

## Introduction to the Internet and Web Pages
The Internet is a colossus of interconnected computers. When you type a website address, or URL, into your web browser, the browser requests the webpage from a computer known as a server. The server, in turn, sends back the requested webpage to your browser. Webpages are written in HTML, which your browser reads and translates into structured pages that you see when browsing the web, complete with text, images, and other type of content.

## HTML Basics
HTML organizes and structures web content using tags, which are denoted by `<tagname>`. For instance, to create a paragraph of text, we surround the text between an opening `<p>` tag and a closing `</p>` tag. Like so:

```
<p>This is a paragraph of text that will appear on a webpage.</p>
```
The opening and closing tags, along with the content together are called an HTML element.

There are many other tags in HTML used for different purposes. Here are a few:

- `<h1>` to `<h6>`: These tags are used to create different levels of headings, allowing content to be divided into sections. The `<h1>` tag is the biggest among them and is used for primary headings, while the `<h2>` is used for sub-headings. Each subsequent heading tag from `<h3>` to `<h6>` represents a progressively smaller heading size and `<h6>` represents the smallest one.
- `<a>`: This tag is used for hyperlinks.
- `<img>`: This is used to embed images in the webpage.

We'll go further into these and more in later sections.

## HTML Document Structure
HTML documents consist of sections, each marked by specific tags that serve a specific function in the webpage:

- `<!DOCTYPE html>`: Identifies the document as an HTML5 document.
- `<html>`: Encloses the HTML document.
- `<head>`: Contains meta-information about the HTML document, not visible on the page itself but necessary for browsers and search engines. One of the key elements that reside in the `<head>` section is the `<title>` tag.
- `<title>`: The content within the title tag is used as the page title. This is what is displayed in the tab or window title bar of your browser and is crucial for SEO (Search Engine Optimization). A descriptive and relevant title helps users navigate their browser tabs and can improve your website ranking in search engines.
- `<body>`: Hosts the content visible to web users — text, images, links, etc.
Here’s a simple instance of an HTML document structure:

```
<!DOCTYPE html>
<html>
  <head>
    <!-- Meta-information and title go inside the head tag -->
    <title>My first webpage</title>
  </head>
  <body>
    <!-- This is the body, visible elements like text or images go here -->
    <h1>Welcome to my page</h1>
    <p>Hello, world!</p>
  </body>
</html>
```
Given this structure, our browser can read and interpret the HTML to display a webpage complete with a title, header, and a paragraph of text. Note that `<!-- text -->` is the comment syntax in HTML. Comments do not effect your code or show up on the webpage. They are there to leave notes for others who will read your code or your future self.

## Basic HTML Tags and Attributes
Attributes provide extra details about an element, affecting its appearance and behavior. Here are some examples:

- Links: To create hyperlinks, we use the `<a>` element, along with the href attribute which specifies the link's destination.

```
<a href="https://www.example.com">Visit Example.com</a>
```
- Images: The `<img>` element is used to embed images. The location of the image file is specified in the src attribute, while the alt attribute can provide text if the image fails to load, enhancing site accessibility:

```
<img src="https://codesignal-staging-assets.s3.amazonaws.com/uploads/1702500465136/html-placeholder1.png" alt="Stunning View">
```
It's important to note that the `<img>` tag in HTML does not require its own closing tag `</img>`. This is because this element is designed not to encapsulate content within it. Such elements that don't require a closing tag are referred to as void elements.

## Lesson Summary and Upcoming Practice
Congratulations on completing this introductory HTML lesson! You've grasped the basics: the structure, tags, elements, and attributes. Up next, we will delve into some hands-on sessions where you'll shift from theory to practice. Happy coding!