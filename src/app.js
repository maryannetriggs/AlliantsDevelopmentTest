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

  // Settting user search entry into state each time it's changed
  handleChange(e) {
    this.setState({ search: e.target.value })
  }

  // Prevent page reload and runs api request functions on search submit
  handleSubmit(e) {
    e.preventDefault()
    this.getPhotos()
    this.getVideo()
  }

  // Sends API request to Flickr returning an array of photos matching user search request
  getPhotos() {
    const flickrKey = process.env.FLICKR_API_KEY
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrKey}&tags=${this.state.search}&format=json&nojsoncallback=1`)
      .then(res => this.setState({ photos: res.data.photos.photo }))
      .catch(err => console.log(err))
  }

  // Sends API request to YouTube returning one video matching user search request
  getVideo() {
    const youtubeKey = process.env.YOUTUBE_API_KEY
    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=1&q=${this.state.search}&key=${youtubeKey}`)
      .then(res => this.setState({ video: res.data.items[0].id.videoId }))
      .catch(err => console.log(err))
  }

  render() {
    const { photos, video, search } = this.state
    return (
      <div className="site-wrapper">

        <section className="">
          <h1 className="title is-1">Search yourself happy!</h1>
          <form onSubmit={this.handleSubmit}>
            <label className="subtitle is-3">
            What do you want to see? 
              <br/>
              <input className="search-box" placeholder="Type Here" type="text" value={this.state.search} onChange={this.handleChange}/>
            </label>
            <input className="search-button" type="submit" value="Search!"/>
          </form>
        </section>
        
        <section className="video-wrapper">
          <iframe  width="320" height="240" allowFullScreen controls src={`https://www.youtube.com/embed/${video}`}>Your browser does not support this video type</iframe>
        </section>

        {this.state.photos ?
          <section className="photo-wrapper">
            {photos.slice(0, 3).map(photo => (
              <img key={photo.id} src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt={`${search}images`}></img>
            ))}
          </section>
          :
          <h3 className="subtitle is-3">Your search images will appear here...</h3>
        }

      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
