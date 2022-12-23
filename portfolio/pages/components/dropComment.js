import { useState, useRef } from "react";

export default function DropComment(){
    const [comment, setComment] = useState("")
    const commentRef = useRef();

    function handleSubmit(e) {
        e.preventDefault()
        const usercomment = commentRef.current.value
      console.log(usercomment)
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
