import React, { useState, useEffect } from 'react';
import './App.css';
import Video from './Video';
import db from './firebase'

function App() {

  const [videos, setVideos] = useState([])

  useEffect(() => (
    // fires once when component load
    db.collection('videos').onSnapshot(
      snapshot =>
        setVideos([snapshot.docs.map(doc => doc.data())])
    )
  ), [])

  return (
    <div className="App">
      <div className="app__videos">
        {videos.map(
          ({ index, url, channel, description, song, likes, messages, shares }) => (

            <Video
              key={index}
              url={url}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
