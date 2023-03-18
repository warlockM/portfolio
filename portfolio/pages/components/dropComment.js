import { useState, useRef } from "react";

export default function DropComment(){
    const commentRef = useRef();

    function handleSubmit(e) {
        e.preventDefault()
        const usercomment = commentRef.current.value
      fetch('https://api.airtable.com/v0/appCZqLZ0GMlnXB2N/Comment', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer keyX4YJYB0MQFToGI',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fields: {
                Comment: usercomment
            }
        })
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
    alert("Thanks for your feedback")
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="grid grid-cols-1 justify-items-center space-y-2">
        <label>Leave a comment.</label>
        <input type="text" ref={commentRef}></input>
        <button class="p-3 bg-blue-700 text-white rounded-md">Submit</button>
        </div>
      </form>
    </div>
  );
}
