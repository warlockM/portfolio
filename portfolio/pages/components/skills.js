import { useState } from 'react';

export default function Skills(){
    const [state, setState] = useState(1);

    function handleClick(e, n) {
        e.preventDefault();
        setState(n);
    }

    return (
      <div class="m-10">
        <div class="grid grid-cols-3 justify-items-center">
          <div onClick={(e) => handleClick(e, 1)} class="bg-slate-300 p-4 hover:ring-2 hover:ring-blue-400 rounded-md font-bold">Frameworks</div>
          <div onClick={(e) => handleClick(e, 2)} class="bg-slate-300 p-4 hover:ring-2 hover:ring-blue-400 rounded-md font-bold">Languages</div>
          <div onClick={(e) => handleClick(e, 3)} class="bg-slate-300 p-4 hover:ring-2 hover:ring-blue-400 rounded-md font-bold">Productivity</div>
        </div>
      <div>
      {state === 1 ? <h1>Framework</h1> : <></>}
      </div>
      <div>
      {state === 2 ? <h1>Language</h1> : <></>}
      </div>
      <div>
      {state === 3 ? <h1>Prodctivity</h1> : <></>}
      </div>
    </div>
    );
}