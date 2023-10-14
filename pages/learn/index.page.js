import Image from 'next/image'
import Loader from '../loaders';

export default function Page() {
  return (
<>
    <Image
      src="/astr.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />
<Loader />
</>
  )
}
