import React from "react";
import { useState } from "react";

const Addpost = ({ add }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (!text) {
      alert("please enter a text");
      return;
    }
    console.log(add);

    add({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div>
          <input
            type="text"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>

        <div>
          <input
            type="checkbox"
            checked={reminder}
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </div>

        <button type="submit">Add post</button>
      </form>
    </div>
  );
};

export default Addpost;
