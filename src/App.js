import MyPlayer from "./components/MyPlayer";

function App() {
  return (
    <div className="App">
      <MyPlayer
        songName="Perfect"
        artistName="Ed Sheeran"
        filePath="https://vjsbuilds.stag-os.org/mmt/audio/song/perfect.mp3"
        albumArt="/songs/perfect/perfect.jpeg"
      />
    </div>
  );
}

export default App;
