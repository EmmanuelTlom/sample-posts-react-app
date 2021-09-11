import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Posts from "./components/Posts";
import AddPost from "./components/Addpost";

function App() {
  //const [showAdd, setshowAdd] = useState(!false);
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "task 1",
      text: "here is text",
      day: "Feb 5th @ 1pm",
      reminder: false,
    },
    {
      id: 2,
      title: "task 2",
      text: "here is text",
      day: "Feb 5th @ 1pm",
      reminder: true,
    },
    {
      id: 3,
      title: "task 3",
      text: "here is text",
      day: "Feb 5th @ 1pm",
      reminder: false,
    },
    {
      id: 4,
      title: "task 4",
      text: "here is text",
      day: "Feb 5th @ 1pm",
      reminder: false,
    },
  ]);

  function removePosts(id) {
    setPosts(posts.filter((post) => post.id !== id));
  }

  function addPosts(add) {
    //console.log(add);
    const id = Math.floor(Math.random() * 10000) + 1;
    const newPost = { id, ...add };
    //console.log(newPost);
    const post = [...posts, newPost];
    setPosts(post);
    //console.log(post);
  }

  return (
    <div className="App">
      <h1>Hello world</h1>

      <Header />

      <div className="add">
        <AddPost add={addPosts} />
      </div>
      <div className="tasks">
        <Posts tasks={posts} removePost={removePosts} />
      </div>
    </div>
  );
}

export default App;
