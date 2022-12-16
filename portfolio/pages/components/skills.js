import { useState } from 'react';
import Framework from './framework';
import Language from './language';
import Productivity from './productivity';
import Database from './database';

export default function Skills(){
    const [state, setState] = useState(1);

    function handleClick(e, n) {
        e.preventDefault();
        setState(n);
    }

    return (
      <div class="m-10">
        <div class="grid grid-cols-4 justify-items-center">
          <button onClick={(e) => handleClick(e, 1)} class="bg-slate-300 p-4 focus:outline-none focus:ring focus:ring-violet-300 focus:bg-blue-700 focus:text-white rounded-md font-bold">Frameworks</button>
          <button onClick={(e) => handleClick(e, 2)} class="bg-slate-300 p-4 focus:outline-none focus:ring focus:ring-violet-300 focus:bg-blue-700 focus:text-white  rounded-md font-bold">Languages</button>
          <button onClick={(e) => handleClick(e, 3)} class="bg-slate-300 p-4 focus:outline-none focus:ring focus:ring-violet-300 focus:bg-blue-700 focus:text-white rounded-md font-bold">Productivity</button>
          <button onClick={(e) => handleClick(e, 4)} class="bg-slate-300 p-4 focus:outline-none focus:ring focus:ring-violet-300 focus:bg-blue-700 focus:text-white rounded-md font-bold">Databases</button>
        </div>
      <div class="m-5">
      {state === 1 ? <Framework /> : <></>}
      </div>
      <div>
      {state === 2 ? <Language /> : <></>}
      </div>
      <div>
      {state === 3 ? <Productivity /> : <></>}
      </div>
      <div>
      {state === 4 ? <Database/> : <></>}
      </div>
    </div>
    );
}