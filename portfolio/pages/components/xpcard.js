export default function XPCard(props) {
  return (
    <div class="p-4 m-10 shadow-md rounded-lg bg-slate-200">
      <h1 class="p-2 bg-slate-700 text-white font-bold rounded-md">{props.company}</h1>
      <h1 class="p-2">Duration: {props.yoe}</h1>
      <h1 class="p-2">Domain: {props.domain}</h1>
      <h1 class="p-2">Role Description: {props.description}</h1>
    </div>
  );
}