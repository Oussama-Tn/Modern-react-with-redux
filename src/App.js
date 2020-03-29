import React from 'react';
import CommentDetail from "./CommentDetail";
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

function App() {
  return (
      <div className="App">
        <ApprovalCard>
          <CommentDetail
              author="Oussama"
              timeAgo="Today at 6:00AM"
              content="Nice blog post!"
              avatar={faker.image.avatar()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
              author="Mohamed"
              timeAgo="Today at 5:00AM"
              content="Cool!!!"
              avatar={faker.image.avatar()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
              author="Adam"
              timeAgo="Yesterday at 4:00PM"
              content="Merci!"
              avatar={faker.image.avatar()}
          />
        </ApprovalCard>
      </div>
  );
}

export default App;
