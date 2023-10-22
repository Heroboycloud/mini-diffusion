import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <img src="/favicon.ico" alt="logo-ct" className="w-10" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Link
              href="/about"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              License
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
     Developed by {" "} <a href="http://github.com/Heroboycloud">
Akindel</a><br/>
      &copy; 2023{" "}
<Link href="/" className="text-center font-normal">
       Mini-diffusion
      </Link>
    </footer>
  );
}
