# Alliants Development Test

Development test for Alliants Junior Software Engineer position. A simple web application that integrates the YouTube and Flickr public API's to serve one YouTube video and up to three Flickr images based on a user inputted search criteria.

---

<p align="center">
  <img src="/readme/screenshot.png" alt="Project Screenshot" width="600" height="400" />
</p>

## Resources

* [YouTube API](https://developers.google.com/youtube/v3)
* [Flickr API](https://www.flickr.com/services/api/)

## Built With

* HTML5
* SCSS
* JavaScript
* React
* Axios
* Node
* Express
* Yarn
* YouTube and Flickr Public API's

---

## Getting Started

Use the clone button to download the source code. In your terminal enter the following commands:

### To install all the packages listed in the package.json file

```bash
yarn add
```

### Set your own API key environment variables

Either enter the following commands into the terminal

```bash
export YOUTUBE_API_KEY=YOUR_API_KEY
export FLICKR_API_KEY=YOUR_API_KEY
```

Or create a `.env` file and add your API keys in the format below

```bash
YOUTUBE_API_KEY=YOUR_API_KEY
FLICKR_API_KEY=YOUR_API_KEY
```

### Run the app on your localhost

```bash
yarn serve
```

---

## To Use

To brighten up your day by viewing one YouTube video and up to three photos: 

* Type your search term in the search box
* Click 'Search!' or press enter
* Enjoy your video and photos
* Repeat as required

---

## Key Learning Points

The key learning points and considerations associated with this project were:

* The importance of accessibility (semantic HTML and colour scheme)
* Using environment variables to keep API keys private
* Using the Express web framework to create a proxy server to deal with CORS errors
* Code clarity and matching requirement of the brief
* Adding a favicon


## Future Improvements

Advancements that could be made in the future to improve this website include:

* Addition of a slick design/styling
* Age restriction or limitation of videos/images to ensure only suitable content is viewable
* Ability to submit API's with multiple user search criteria inputs
* Enhanced error handling
* Online deployment

## Author - Mary-Anne Triggs
