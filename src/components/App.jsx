class App extends React.Component{ 
  constructor(props) {
    super(props);
    this.state = {
      mainVideo : exampleVideoData[0]
    };
  } 

  chooseVideo (video) {
    console.log(video);
    this.setState ({
      mainVideo : video
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.mainVideo} onClick={this.chooseVideo.bind(this)} />
          </div>
          <div className="col-md-5">
            <VideoList videos={exampleVideoData} onClick={this.chooseVideo.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;