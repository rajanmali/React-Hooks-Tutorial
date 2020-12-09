import { useState, useEffect } from "react";
import axios from "axios";

const DataFetching = () => {
  const [postLists, setPostLists] = useState([]);
  const [postData, setPostData] = useState({});
  const [postId, setPostId] = useState(1);
  const [dataFetchingMode, setDataFetchingMode] = useState("all");

  useEffect(() => {}, []);

  useEffect(() => {
    if (dataFetchingMode === "all") {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          setPostData({});
          setPostLists([...res.data]);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((res) => {
          setPostData({ ...res.data });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [dataFetchingMode, postId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "postId" && value?.length) {
      setPostId(value);
    }
  };

  const handleSelectChange = (event) => {
    const { value } = event.target;
    setDataFetchingMode(value);
  };

  return (
    <>
      <h2>
        Fetch Posts
        <select
          id="dataFetchType"
          name="cars"
          onChange={handleSelectChange}
          style={{ marginLeft: "0.5em" }}
        >
          <option value="all">All</option>
          <option value="individual">Individual</option>
        </select>
      </h2>
      {dataFetchingMode === "individual" && (
        <>
          <span>Select post id: &nbsp;</span>
          <input
            type="number"
            placeholder="Enter post ID..."
            name="postId"
            value={postId}
            onChange={handleInputChange}
            min="1"
            max="100"
          />
        </>
      )}
      {dataFetchingMode === "all" && (
        <ul>
          {postLists?.[0] &&
            postLists.map((post) => <li key={post.id}>{post.title}</li>)}
        </ul>
      )}

      {Object.keys(postData).length > 0 && (
        <>
          <h3>{postData.title}</h3>
          <span>{postData.body}</span>
        </>
      )}
    </>
  );
};

export default DataFetching;
