# My Reads

In this project I created a personal library to manage books, with tree shelves, "Currently Reading", "Want To Read" and "Read". You can also search for new books to add in your library, and you can move the books to another shelf. This project emphasizes using React to build the application and provides an API server and client library that you will use to persist information as you interact with the application.

## To run

1. Download or clone this repository
```
git clone https://github.com/camilalopes/my-reads.git
```
2. Inside the project directory run `npm install`

3. Start the application `npm start`

4.  With your server running, visit the site: `http://localhost:3000`

## Backend Server

The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Note
This is a personal project created as part of the Udacity's Advanced Web Front-End Nanodegree. Feel free to send me suggestions and corrections. :hearts:
