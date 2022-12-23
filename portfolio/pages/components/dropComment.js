export default function DropComment(){
    function handleSubmit(e) {
        e.preventDefault()
      console.log("comment dropped")
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Leave a comment.</label>
        <input type="text"></input>
        <button>Submit</button>
      </form>
    </div>
  );
}
