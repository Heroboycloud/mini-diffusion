
import React from "react";

const Card = () => {
  return (
    <div className="relative w-96 m-3 cursor-pointer border-2 shadow-lg rounded-xl items-center">
      {/* Image */}
      <div className="flex h-28 hover:bg-red-300 rounded-xl items-center justify-center bg-sky-600">
        <h1 className="absolute mx-auto text-center right text-2xl text-white" id="card">
          AI Image Generator
        </h1>
      </div>

      {/* Description */}
      <div className="p-2 border-b-2">
        <h6 className="hover:text-slate-500 text-green-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          beatae nulla, atque et sunt ad voluptatum quidem impedit numquam quia?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          beatae nulla, atque et sunt ad voluptatum quidem impedit numquam quia?
        </h6>
<p className=" text-slate-300 first-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-3 first-letter:float-left
">
  Well, let me tell you something, funny boy. Y'know that little stamp, the one
  that says "New York Public Library"? Well that may not mean anything to you,
  but that means a lot to me. One whole hell of a lot.
</p>
	<form>
  <label className="block">
    <span className="block text-sm font-medium text-slate-700">Username</span>
    <input type="text"   className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
  </label>
</form>

	<ul role="list" className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500">
  <li>5 cups chopped Porcini mushrooms</li>
  <li>1/2 cup of olive oil</li>
  <li>3lb of celery</li>
</ul>
      </div>

      {/* Tech stack used */}
      <div className="flex flex-wrap items-center m-2">
        <span className=" border border-blue-300 rounded-2xl px-2 my-1 mx-1">
          #React
        </span>
        <span className=" border border-blue-300 rounded-2xl px-2 my-1 mx-1">
          #Redux
        </span>
        <span className=" border border-blue-300 rounded-2xl px-2 my-1 mx-1">
          #Javascript
        </span>
      </div>

      {/* Links */}
      <div className="flex flex-wrap items-center rounded-b-xl border-t-2 bg-white">
        <button className="border rounded-2xl bg-blue-600 text-white shadow-sm p-1 px-2 m-2">
          Go to Project
        </button>
        <button className="border-2 border-blue-600 rounded-2xl text-blue-600 shadow-sm p-1 px-2 m-2">
          Github
        </button>
      </div>
    </div>
  );
};

export default Card;
