import { useState, useEffect } from "react";
import "./Home.css";
import Sdata from "./Sdata";

function Home() {
  const [imageData, setImageData] = useState([]);
  const [inputvalue, setInputvalue] = useState('');
  const [count, setCount] = useState(2);

  useEffect(() => {

    fetch(`https://picsum.photos/v2/list?page=${count}&limit=12`)
      .then((response) => response.json())
      .then((data) => setImageData(data))
      .catch((error) => console.error("Error fetching data:", error));
  });

  return (
    <>
    <div className="fristpage">
      <img src="public\Project_28-06.jpg" alt="" />
    </div>
        <h1 style={{color:'white',marginLeft:'200px'}}>Image Search App</h1>
      <div className="searchbox">
        <input type="text" placeholder="search"
          onChange={(e) => setInputvalue(e.target.value)} />
      </div>
      {inputvalue == "" ? null : <Sdata name={inputvalue} />}
      <div className="main">
        {imageData.map((image) => (
          <>
            <div className="card" key={image.id}>

              <img src={image.download_url} alt="Network Slow" />
              <div className="container">
                <a href={image.url}>Download</a>

              </div>
            </div>

          </>

        ))}

      </div>
      <div className="next_btn">

        <button onClick={() => setCount(count - 1)}>Privies Page</button>
        <button onClick={() => setCount(count + 1)}>Next Page</button>

      </div>
    </>
  );
}

export default Home;
