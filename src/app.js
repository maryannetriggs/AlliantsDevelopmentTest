import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import './style.scss'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      search: '',
      video: null,
      photos: null
    }

    this.getPhotos = this.getPhotos.bind(this)
    this.getVideo = this.getVideo.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({ search: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.getPhotos()
    this.getVideo()
  }

  getVideo() {
    const youtubeKey = process.env.YOUTUBE_API_KEY
    axios.get(`https://cors-anywhere.herokuapp.com/https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=1&q=${this.state.search}&key=${youtubeKey}`)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  getPhotos() {
    const flickrKey = process.env.FLICKR_API_KEY
    console.log(this.state.search)
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrKey}&tags=${this.state.search}&format=json&nojsoncallback=1`)
      .then(res => this.setState({ photos: res.data.photos.photo }))
      .catch(err => console.log(err))
  }

  render() {
    // if (!this.state.photo) return null
    const { photos } = this.state
    console.log(this.state)
    return (
      <>
        <h1>Search Return</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Your Search:
            <input type="text" value={this.state.search} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {this.state.photos ?
          <div>
            {photos.slice(0, 3).map(photo => (
              <img key={photo.id} src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt="REMEMBER" height="500" width="500"></img>
            ))}
          </div>
          :
          <h1>Image Pending</h1>
        }
      </>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)