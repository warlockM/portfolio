import { useState } from 'react';
import Technical from './technical';
import NonTechnical from './nontechnical';
import Leadership from './leadership';
import Interest from './interest';

export default function Skills(){
    const [state, setState] = useState(1);

    function handleClick(e, n) {
        e.preventDefault();
        setState(n);
    }

    return (
      <div class="m-10">
        <h1 class="text-5xl p-4 m-10 text-center font-bold">Skills</h1>
        <div class="sm:grid sm:grid-cols-2 md:grid md:grid-cols-4 justify-items-center">
          <button onClick={(e) => handleClick(e, 1)} class="bg-slate-300 p-2 focus:outline-none focus:ring focus:ring-violet-300 focus:bg-blue-700 focus:text-white rounded-md font-bold">Technical</button>
          <button onClick={(e) => handleClick(e, 2)} class="bg-slate-300 p-2 focus:outline-none focus:ring focus:ring-violet-300 focus:bg-blue-700 focus:text-white  rounded-md font-bold">Non-Technical</button>
          <button onClick={(e) => handleClick(e, 3)} class="bg-slate-300 p-2 focus:outline-none focus:ring focus:ring-violet-300 focus:bg-blue-700 focus:text-white rounded-md font-bold">Leadership</button>
          <button onClick={(e) => handleClick(e, 4)} class="bg-slate-300 p-2 focus:outline-none focus:ring focus:ring-violet-300 focus:bg-blue-700 focus:text-white rounded-md font-bold">Interests</button>
        </div>
      <div class="m-5">
      {state === 1 ? <Technical /> : <></>}
      </div>
      <div>
      {state === 2 ? <NonTechnical /> : <></>}
      </div>
      <div>
      {state === 3 ? <Leadership /> : <></>}
      </div>
      <div>
      {state === 4 ? <Interest/> : <></>}
      </div>
    </div>
    );
}