import React from 'react';
import CommentDetail from "./CommentDetail";

function App() {
  return (
    <div className="App">
      <CommentDetail
          author="Oussama"
          timeAgo="Today at 6:00AM"
          content="Nice blog post!"
      />
      <CommentDetail
          author="Mohamed"
          timeAgo="Today at 5:00AM"
          content="Cool!!!"
      />
      <CommentDetail
          author="Adam"
          timeAgo="Yesterday at 4:00PM"
          content="Merci!"
      />
    </div>
  );
}

export default App;
