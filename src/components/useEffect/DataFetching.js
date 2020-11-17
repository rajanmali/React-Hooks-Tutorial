import { useState, useEffect } from "react";
import axios from "axios";

const DataFetching = () => {
  const [postLists, setPostLists] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPostLists([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>Data Fetching</h2>
      <ul>
        {postLists?.[0] &&
          postLists.map((post) => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  );
};

export default DataFetching;
