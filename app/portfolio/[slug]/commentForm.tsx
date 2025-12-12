"use client";

import { useState } from "react";

export default function PortfolioCommentForm({slug}: {slug: string}) {
  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState("");

  const submitComment = async () => {

    const response = await fetch(`/api/portfolio/${slug}/comment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: user,
        comment: comment
      })
    });

    if (response.ok) {
      alert("Comment added! Reload to see");
    } 
    else {
      alert("Error");
      }
  };

  return (
    <div>
      <h3>Add a Comment</h3>

      <input
        type="text"
        placeholder="Your name"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />

      <textarea
        placeholder="Write a comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <button onClick={submitComment}>Submit</button>

      {status && <p>{status}</p>}
    </div>
  );
}
