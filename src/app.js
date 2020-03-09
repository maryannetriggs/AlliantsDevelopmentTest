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

    this.getPhoto = this.getPhoto.bind(this)
  }

  componentDidMount() {
    this.getPhoto()
  }

  // const youtubeKey = process.env.YOUTUBE_API_KEY
  // axios.get(`https://cors-anywhere.herokuapp.com/https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=1&q=cheese&key=${youtubeKey}`)
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err))

  getPhoto() {
  // const flickrKey = process.env.FLICKR_API_KEY
    axios.get('')
      .then(res => this.setState({ photo: res.data.photos.photo[0] }))
      .catch(err => console.log(err))
  }

  render() {
    if (!this.state.photo) return null
    const { photo } = this.state
    console.log(photo)
    return (
    <>
      <h1>Search Return</h1>
      <img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt="REMEMBER" height="500" width="500"></img>
    </>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)