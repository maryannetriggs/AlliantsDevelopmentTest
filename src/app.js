import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import './style.scss'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      video: null,
      photo: null
    }

    // this.handleShuffle = this.handleShuffle.bind(this)
  }

  // const youtubeKey = process.env.YOUTUBE_API_KEY
  // axios.get(`https://cors-anywhere.herokuapp.com/https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=1&q=cheese&key=${youtubeKey}`)
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err))

  getPhoto() {
  // const flickrKey = process.env.FLICKR_API_KEY
    axios.get('')
      .then(res => console.log(res.data.photos.photo))
      .catch(err => console.log(err))
  }

  render() {
    // const { video, photo } = this.state
    console.log(this.state)
    return (
    <>
      <h1>Search Return</h1>
    </>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)