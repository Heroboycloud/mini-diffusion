import Link from 'next/link';
import {useRouter} from 'next/router';


export const getServerSideProps= async () =>{
const res = await fetch('http://localhost:3000/jokes.json')
  const jokes = await res.json()
  return { props: { jokes } }

}
export default function Page({ jokes }) {
const router= useRouter();
const nextBtn=`/learn/jokes/${Number(router.query.id) + 1}`;
const prevBtn=`/learn/jokes/${router.query.id - 1}`;
return (
<div>
<h4 style={{ color: 'blue' }}>
{jokes[router.query.id].setup}
</h4>
<p style={{ color: 'green', padding:'5px 15px'}}>
{jokes[router.query.id].punchline}
</p>
<Link href={prevBtn}>
<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Prev
</button>
</Link>
{" "}
<Link href={nextBtn}>
<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Next
</button>
</Link>
</div>

);
}
