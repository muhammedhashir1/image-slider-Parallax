import ImageSlider from "./components/ImageSlider";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 px-0">
            <Navbar />
            <ImageSlider />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
