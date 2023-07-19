import "./styles.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";

export default function App() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("sfsdf");

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/posts").then((res) =>
      setData(res.data)
    );
  }, []);

  const searchHandler = () => {
    let d = data;
    let newData = d.filter((el) => el.body.includes(text));
    console.log(newData, text);

    setData(newData);

    setText("");
  };

  return (
    <div className="App">
      <div>
        <div>
          <input
            placeholder="search"
            className="input"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <button onClick={() => searchHandler()}>Search</button>
        </div>
      </div>
      {data.map((el) => {
        return <Post key={el.id} title={el.title} body={el.body} />;
      })}
    </div>
  );
}
