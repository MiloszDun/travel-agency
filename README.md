## What is this
Live app on https://miloszdun.github.io/travel-agency/

This is a holiday booking app for a travel agency.

User can select their ideal travel package, and select hotels. The app takes care of filtering data (based on location and user preferences), and presents all information in a clear UI.

### Why build it
I wanted to refresh my design skills, and play around with Material UI components. I adapted an old website design I created a few years ago (I fancied going into design when I was younger, before realizing that coding is ultimately much more satisfying).

I'm especially happy with the "graying out" of filters on the Hotel Selection page. It's such a small thing, but I think it makes a massive difference.

On the coding side, this was a simple exercise in standard data filtering in React. Nothing fancy, but I believe sharpening the fundamentals is always useful.

## How it works

After the welcome page, user can choose one of several holiday packages:

![Package Selection Page](src/img/screenshoots/Package-selection.png?raw=true "Package Selection Page")

Based on the package selected, user will see different hotels available.

(Hotel filtering is based on location.)

On top of that, user can filter the results based on several tags.

![Hotel Selection Page](src/img/screenshoots/Hotel-selection.png?raw=true "Hotel Selection Page")

Finally, user will see a short summary page, confirming previous choices and allowing them to pay (button doesn't do anything).

![Summary Page](src/img/screenshoots/Summary-page.png?raw=true "Summary Page")

## Setup
Use `npm start` to start the app.

### Images

All the images used come from https://unsplash.com.