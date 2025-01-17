import Link from 'next/link';
import {useRouter} from 'next/router';
import {useEffect} from 'react';

export const getServerSideProps= async () =>{
const res = await fetch('https://mini-diffusion.vercel.app/jokes.json')
  const jokes = await res.json()
  return { props: { jokes } }

}
export default function Page({ jokes }) {
const router= useRouter();
const nextBtn=`/fun/jokes/${Number(router.query.id) + 1}`;
const prevBtn=`/fun/jokes/${router.query.id - 1}`;

return (
<div>
<h4 style={{ color: 'blue' }}>
{jokes[router.query.id]?.setup || "No joke Available yet"}
</h4>
<p style={{ color: 'green', padding:'5px 15px'}}>
{jokes[router.query.id]?.punchline}
</p>

{jokes[router.query.id]?.punchline && (
<>
<Link href={prevBtn}>
<button className={`bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ${jokes[router.query.id]?.setup ? '' : 'disabled readonly'}`}>
  Prev
</button>
</Link>
{" "}
<Link href={nextBtn}>
<button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Next
</button>
</Link>
</>
)
}
</div>

);
}
