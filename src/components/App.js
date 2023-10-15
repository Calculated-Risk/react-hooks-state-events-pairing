import video from "../data/video.js";
import Buttons from "./Buttons.js";
import MainContent from "./MainContent.js";
import Comments from "./Comments.js";

function App() {
  console.log("Here's your data:", video);
  

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <MainContent video={video}/>
      <Buttons video={video}/>
      <hr style={{"margin-top": "10px"}}/>
      <Comments video={video} />
    </div>
  );
}

export default App;
