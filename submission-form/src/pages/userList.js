import React from "react";

function UserList() {
  const userNames = ["Gautam", "praveen", "suryabhan"];

  // first way to doing this
  let content;
  if (userNames.length === 0) {
    content = <p>No users found</p>;
  } else {
    content = (
      <ul>
        {userNames.map((names, index) => (
          <li key={index}>{names}</li>
        ))}
      </ul>
    );
  }
  return (
    <div className="py-4">
      <h1 className="font-bold text-2xl">User List</h1>
      {/* second way to doing this       */}
      {userNames === 0 ? (
        <p>No users found</p>
      ) : (
        <ul>
          {userNames.map((names, index) => (
            <li key={index}>{names}</li>
          ))}
        </ul>
      )}

      {/* third way to create code */}
      {userNames.length && (
        <ul>
          {userNames.map((names, index) => (
            <li key={index}>{names}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;
