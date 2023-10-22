export const getStaticProps= async () =>{
const res = await fetch('http://localhost:3000/jokes.json')
  const jokes = await res.json()
  return { props: { jokes } }

}
export default function Page({ jokes }) {

return (
<div>
{jokes.map(function(joke,key){
return (
<div key={key}>
<h4>{joke.setup}</h4>
<p>{joke.punchline}</p>
</div>
);

})}
</div>

);
}
