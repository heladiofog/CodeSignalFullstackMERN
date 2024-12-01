# Lesson 4: Navigating the Cosmos: Querying, Sorting, and Projecting in MongoDB
You're on a roll with your MongoDB journey, and the universe of data is becoming clearer with each step! 🚀 Keep up the fantastic work, I'm here if you need any help navigating the cosmos!

## Dive into Data Filtering: Querying, Sorting, and Projecting in MongoDB
Welcome back, coding astronauts! Today we'll journey through data retrieval in MongoDB, focusing on querying, sorting, and projecting techniques. Armed with these tools, our navigations through the database universe will become more efficient and precise.

## Querying in MongoDB: The Telescope to Your Data Universe
First, we'll delve into querying, which you can think of as using a telescope to pinpoint a star. In our case, `find()` in Mongoose acts as our telescope. Suppose we have `'users'` posting `'thoughts'`, represented by a `Post` model, and we want to find `posts` with `likesCount` exceeding `10`. Here's how we can accomplish this:

```JavaScript
const mongoose = require('mongoose'); //import Mongoose

const Post = mongoose.model('Post', new mongoose.Schema({ 
  text: String,    // post text
  authorId: String, // author's id
  likesCount: Number // count of likes
}));

// query posts with more than 10 likes
Post.find({ likesCount: { $gt: 10 } })
  .then(posts => console.log(posts)) // display posts
  .catch(err => console.error(err)); // handle error
```
In the above code, `$gt` is an operator that finds numbers greater than 10.

In MongoDB, there exist special keywords that enable us to carry out actions such as comparing values or checking ranges. Here are a few of them:

- `$eq`: Matches values that are equal to a specified value.
- `$gt`: Matches values that are greater than a specified value.
- `$lt`: Matches values that are less than a specified value.
- `$regex`: Provides pattern matching capabilities to fetch data based on specific patterns. For instance, the `/substring/` pattern matches any document where the specified field contains the substring `"substring"`.
Each of these operators must be nested within a set of curly braces (`{}`) and prefixed with a `$` sign.

Let's consider the task of finding posts containing the word `coding`.

```JavaScript
// query posts containing 'coding'
Post.find({ text: { $regex: 'coding', $options: 'i' } }) 
  .then(posts => console.log(posts)) // display posts
  .catch(err => console.error(err)); // handle error
```
The `$options: 'i'` tag helps perform case-insensitive searching.

## Sorting in MongoDB: Arranging Your Cosmic Data
The act of sorting in MongoDB is akin to ordering stars by their brightness. To establish this order, we use `sort()`. Whether we are sorting data in ascending (`1`) or descending (`-1`) order, the results are neatly organized.

Sorting posts by their likes count is straightforward. Here's how:

```JavaScript
// sort all posts by likes count in descending order
Post.find().sort({ likesCount: -1 })
  .then(posts => console.log(posts)) // display sorted posts
  .catch(err => console.error(err)); // handle error
```
Querying and sorting can be combined for more refined results:

```JavaScript
// find posts with more than 10 likes and sort them by likes count in descending order
Post.find({ likesCount: { $gt: 10 } }).sort({ likesCount: -1 }) 
  .then(posts => console.log(posts)) // display sorted posts
  .catch(err => console.error(err)); // handle error
```

## Projecting in MongoDB: Illuminating What Matters Most
Finally, think of projecting as analogous to using a flashlight in the dark to focus on particular objects. In our case, `select()` acts as that flashlight, illuminating the required data fields in our documents.

For instance, if you're interested only in the text of the `post` and the `authorId`:

```JavaScript
// find all posts and project only 'text' and 'authorId'
Post.find().select('text authorId') 
  .then(posts => console.log(posts)) // display projected posts
  .catch(err => console.error(err)); // handle error
```

A more practical option would be to use `Post.find().select('text authorId -_id')`: The minus sign (`-`) before `_id` indicates that we want to **exclude** the `_id` field from the results. By default, MongoDB always includes the `_id` field, so we need to explicitly exclude it if we don't want it to appear.

## Lesson Summary and Practice
Summing it up, we have mastered querying with `find()`, sorting with `sort()`, and projecting with `select()`. We strongly recommend practicing with real-life data manipulations to solidify these MongoDB skills. With your newly-built data telescope, you're ready to navigate confidently through the MongoDB cosmos! Safe travels!

```
```
