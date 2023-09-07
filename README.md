## React Movies - Part 1
Intro
Following along with what you did today in the MERN-Stack Infrastructure - Part 2 lesson, you will be creating your own react-movies application!

You will need to create a new React CodeSandbox project named react-movies.

This application will provide a movie & actor list.

The data for the movies and actors will be provided to you.

Here is a link to an example of the final product, but feel free to style the page to your liking! (try not to peek at the code):

React Movies Demo

Exercises
Start by creating skeleton page-level components for each page of the application plus a navbar:
<LoginPage>
<MoviesListPage>
<MovieDetailPage>
<ActorListPage>
<NavBar>
Set up a user state variable in <App> that will keep track of the user. The user state should be initialed to null (no user) and updated to a string when the user “logs in”.

Code <LoginPage> so that when a username is submitted, the user state in <App> is updated to the username causing a re-render…

Code <App> to conditionally render as follows:

user state has a value?	path in <Route> Component	Component to Render
No	path="/"	<LoginPage>
Yes	All Paths	<NavBar>
Yes	path="/"	<MoviesListPage>
Yes	path="/movies/:movieName"	<MovieDetailPage>
Yes	path="/actors"	<ActorsListPage>
Code the <NavBar> so that it renders whenever a user exists and displays a <Link> for accessing the <MoviesListPage> & <ActorsListPage> as well as the user’s username entered.


# React Movies - Part 2
For this lab, you will continue working in your existing react-movies project on CodeSandbox.

Part 2 of the lab will focus on the Movie Index & Detail Pages.

Here is a link to an example of the final product, but feel free to style the page to your liking! (try not to peek at the code)

Create a file in the src folder called data.js, then copy/paste the data found at the bottom of this README into that file.
Do not change any of the data in data.js
You can then import the data in App.js, or wherever you need it (your path may be different):
  `import { movies } from "../../data.js";``
Using the imported movies array, render the list of movies in the < MoviesListPage > component:
Each movie should be rendered as a < MovieCard > component.
Each < MovieCard > should display the movie’s poster as the background, the name of the movie & its release date.
Create a < MovieDetailPage > component that renders the details of a movie when the user clicks on a movie rendered by < MoviesListPage >:
Use the useParams hook from React Router to access the movieName route parameter defined in the <Route>.
The detail page should display all relevant information about a single movie:
title
releaseDate
posterPath (as an <img>)
cast (use the Array.prototype.join method)
Again, the design choices & styling is up to you!

## React Movies Lab - Part 3
For this lab, you will continue working in your existing react-movies project on CodeSandbox.

Part 3 of the lab will focus on the < ActorsListPage > component.

Here is a link to an example of the final app, but the design and styling is up to you!

React Movies Demo (try not to peek at the code)
### Exercises
Using the imported movies array, render a list of all the actors from each movie in the < ActorsListPage >:
Be aware that certain actors appear in multiple movies, but there should be NO DUPLICATES on this list. See the Hints below for ideas.