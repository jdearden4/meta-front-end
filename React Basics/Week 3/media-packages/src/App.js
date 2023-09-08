import React from "react";
// import ReactPlayer from "react-player/youtube";
import ReactPlayer from "react-player";


const App = () => {
  const vidUrl="www.google.com/video-url-here"
  return (
    <div>
      {/* <MyVideo /> */}
      <ReactPlayer 
        url={vidUrl}
        playing={false}
        volume={.5}
        />
      
    </div>
  );
};

// const MyVideo = () => {
//   return (
    // <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
//   );
// };

export default App;