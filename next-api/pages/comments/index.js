import { setConfig } from "next/config";
import React, { useState } from "react";

function CommentsPage() {
  const [data, setdata] = useState([]);
  const [comment, setcomment] = useState('');
  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setdata(data);
  };
  const submitComment = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  const deleteComment = async commentId => {
    const response = await fetch(`/api/comments/${commentId}`, {
        method: "DELETE"}
        )
    const data = await response.json()
    console.log(data)
    fetchComments()
  }

  return (
    <div>
      <input
        type="text"
        value={comment}
        onChange={(e) => setcomment(e.target.value)}
      />
      <button onClick={submitComment}>Submit comment</button>
      <button onClick={fetchComments}>Load comments</button>
      {data.map((comment) => {
        return (
          <div key={comment.id}>
            <h2>
              {comment.id} {comment.text}
              <button onClick={()=> deleteComment(comment.id)}>Delete</button>
            </h2>
          </div>
        );
      })}
    </div>
  );
}

export default CommentsPage;
