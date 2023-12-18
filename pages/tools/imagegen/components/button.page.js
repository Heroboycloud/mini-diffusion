import { useRouter } from "next/navigation";

export default function Button(){
const router = useRouter();
return (
<button className=" mx-4 my-4 bg-blue-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full w-48" onClick={()=> router.push('/tools/imagegen/create')}>
  Get Started
</button>

);

}
