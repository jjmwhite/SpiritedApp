# SPIRITED

Welcome to **[Spirited](https://spirited-app.herokuapp.com/#/)**, a clone of the popular wine-rating web app "Vivino," built for Single Malt Scotch lovers using Ruby on Rails and React. Users can rate and review their favorite whiskies, and search our database to discover new drams.

<br>

## Table of Contents
1. [Functionality and Features](#functionality-and-features)
    * User Authentication
    * Explore Our Whiskies
    * Add and Review your favorite malts
2. [Languages and Technologies](#languages-and-technologies)
    * Ruby on Rails
    * Javacript
    * React
    * Redux
    * Webpack
3. [Background and Implementation Timeline](#background-and-implementation-timeline)
    * Timeline
    * Acknowledgments
  

<br>   
<h2><a id ="functionality-and-features" href="#functionality-and-features">
  Functionality and Features
</a></h2>

![Review screengrab](app/assets/images/user_auth.gif)

![verified](app/assets/images/blue_ribbon_mini.png) 
#### User Authentication
Spirited takes security seriously, and new users can register knowing their password will be securely encrypted. Returning users are also spared the hassel of siging in each time, since we remember users who didn't log out.
<br>

![verified](app/assets/images/testimonial_mini.png) 
#### Straightforward Navigation
All visitors to Spirited can browse our collection of single malts, visit individual bottle pages, and read reviews from other users. Try searching the Spirited database for that bottle you've been meaning to try, and you can navigate directly to the page to peruse our community's tasting notes. Can't find what you're looking for? You'll be invited to add a new bottle to our growing collection.
<br>

![verified](app/assets/images/rating_icon_mini.png) 
<h4>Adding and Reviewing</h4>
Registered users can add new bottles to the site inventory, and also edit or remove bottles they've created. Bottles must be added to a verfied distillery, and are we keep track of the region accordingly. (In a future update, we'll be integrating the ability to filter by distillery of region.)

Registered users can also also add a review alongside 1- to 5-star rating.  Users trying to review the same expression twice will be invited to modify their existing review, and you're always able to update or remove a previous review.

![Review screengrab](app/assets/images/review_CRUD.gif)

<br>
<h2><a id="languages-and-technologies" href="#languages-and-technologies">
  Languages and Technologies
</a></h2>

* `React` for component management and rapid single-page app rendering
* `Redux` to manage the store and maintain a single source of truth for all React components
* `Javascript` as the frontend language, and to manage asynchronous operations
* `Ruby on Rails` acts as the backend API, including controllers models, and jbuilder views
* `Webpack` for bundling scripts into a single source
* `Postgresql` as a database

<br>
<h2><a id="background-and-implementation-timeline" href="#background-and-implementation-timeline">
  Background and Implementation Timeline
</a></h2>

Spirited was developed as an App Academy student project over a 10-day sprint, using Rails as a backend API and React with Redux for the frontend. The design mimics Vivino.com, a popular wine-rating app, with a streamlined user interface and seamless backend data manipulation.

**Initial Sprint:**

1. User Authentication (1.5 days)
2. Bottles CRUD (2 days)
3. User profile (1 Day)
4. Ratings and Reviews CRUD (2 days)
5. Homepage Filtering (2 days)
6. Production README (1 Day)

**Subsequent Expansions**

7. Average bottle rating displayed on homepage
8. Add default 'Add this bottle?' result when no search results

**Planned Expansions:**

9. Pages for distilleries and regions
10. Secondary navigation bar with dropdowns for distillery and region pages
11. Integrate region and distillery page results to search
12. User ability to crop photos on upload 

