var searchYouTube = ({ key = window.YOUTUBE_API_KEY, query = '', max = 5 }, callback) => {
  // TODO

  $.get('https://www.googleapis.com/youtube/v3/search',
    {
      key: key,
      part: 'snippet',
      maxResults: max,
      q: query,
      type: 'video',
      videoEmbeddable: 'true'
    }).done((data) => { callback(data.items); });

};

window.searchYouTube = searchYouTube;
