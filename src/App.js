import "bulma/css/bulma.css";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
// import { useState } from "react";
import searchImage from "./api";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImage(term);

    setImages(result);
    // console.log(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}
export default App;
