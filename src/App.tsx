import "./App.css";
import PostContainer from "./components/PostContainer";
function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
        }}
      >
        <PostContainer />
      </div>
    </div>
  );
}

export default App;
