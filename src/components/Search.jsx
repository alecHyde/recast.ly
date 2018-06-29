var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text"  onChange={() => {props.search($('.form-control').val());}}/>
    <button className="btn hidden-sm-down" 
      // pass in stateful functions from App.js
      // pass function from App

      // props.search($('.form-control').val())

    >
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
//$('.form-control').val()

window.Search = Search;
