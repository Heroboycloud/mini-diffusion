import React, { useState } from "react";
import { PhotoIcon } from '@heroicons/react/24/solid'
import Head from "next/head";

/**
 *
 * @param {number} maxFileSize maximum file size allowed in bytes
 * @returns
 */
const ImageUploader = ({ id = "image-input", maxFileSize }) => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [dragover, setDragover] = useState(false);
  const [prediction,setPrediction]= useState(null);
  const [error,setError]= useState(null);
  const [isGenerating,setIsGenerating]= useState(false);
  const getImageUrl = imageFile => {
    // Method-1
    return URL.createObjectURL(imageFile);

    // Method-2
    // const reader = new FileReader();
    // reader.onload = e => {
    //   return e.target.result;
    // };
    // reader.readAsDataURL(inputFile);
  };
 const SubmitPrompt= async(e) =>{
    e.preventDefault();
    const response = await fetch("/api/imageprompt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: e.target.prompt.value,
        img: imageUrl
      }),
    });
 setIsGenerating(true);
 let prediction = await response.json();

if (response.status !== 201) {
      setError(prediction.detail);
      return;
    }
    setPrediction(prediction);

    while (
      prediction.status !== "succeeded" &&
      prediction.status !== "failed"
    ) {
      await sleep(4000);
      const response = await fetch("/api/predictlama/" + prediction.id);
      prediction = await response.json();
      if (response.status !== 200) {
        setError(prediction.detail);
        return;
      }
      console.log({ prediction });
      setPrediction(prediction);
      setIsGenerating(false);
}





};
  const handleInputFileChange = e => {
    if (!e.target.files) return;
    for (const file of e.target.files) {
      if (!file.type.startsWith("image")) continue;
      if (maxFileSize && file.size > maxFileSize) continue;
      const imageUrl = getImageUrl(file);
      setImageUrl(imageUrl);
      setImage(file);
    }
  };

/*  const removeImage = idx => {
    setImages([...images.slice(0, idx), ...images.slice(idx + 1)]);
    setImageUrls([...imageUrls.slice(0, idx), ...imageUrls.slice(idx + 1)]);
  }; */

  const onDragEnter = () => {
    setDragover(true);
  };

  const onDragLeave = () => {
    setDragover(false);
  };

  const onDrop = () => {
    setDragover(false);
  };

  return (
<>
<Head>
        <title>LordLama ask question</title>
      </Head>

   

    <div className="h-[400px] mt-5 overflow-auto gap-8 items-center rounded-md p-4 shadow-lg flex flex-col sm:flex-row">
      <form className="" method="POST" onSubmit={SubmitPrompt}>
      <div className="h-[70%]" onDragEnter={onDragEnter} onDragLeave={onDragLeave} onDrop={onDrop}>
        <label
          htmlFor={id}
          className={`h-full relative border focus-within:ring-indigo-600 w-64 p-4 rounded-md border-dashed border-gray-900/25 flex justify-center items-center flex-col cursor-pointer bg-gray-50 hover:bg-gray-100 transition select-none ${
            dragover && "opacity-70"
          }`}
        >
          <input
            type="file"
            id="img"
            accept="image/*"
            className="absolute opacity-0 top-0 left-0 w-full h-full  cursor-pointer"
            onChange={handleInputFileChange}
          />
          <div className="text-gray-500 text-center text-2xl block">
           <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
          </div>
          <span className="text-gray-500 hover:text-gray-700 transition font-medium">
            Drop images(JPG,PNG,GIF ) here, or
            <span className="text-blue-500 font-semibold"> Upload </span>
          </span>
        </label>
      </div>

       <div className="sm:col-span-2">
              <label htmlFor="prompt" className="block text-sm font-medium leading-6 text-gray-900">
                Image Prompt:
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="prompt"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div></div>




      <div className="flex items-start gap-8 flex-wrap h-full overflow-auto p-4">
          <div className="relative border-gray-200 border-2 rounded-sm">
            <a href={imageUrl} className="block" target="_blank" rel="noreferrer">
              <img src={imageUrl} alt="Uploaded" className="w-40 h-40" />
            </a>
          </div>
<button
  className={`bg-blue-600 w-full hover:bg-blue-700 text-white font-bold mt-6 py-2 px-4 rounded
                ${
                  isGenerating
                    ? "cursor-not-allowed opacity-50"
                    : ""
                }`}
  type="submit"
  disabled={isGenerating}
>
  {isGenerating ? "Generating..." : "Generate"}
</button>
      </div>
   </form>
{error && <div>{error}</div>}                                                                                         {prediction && (                                             <>                                                           {prediction.output && (                                      <div className="border border-slate-300 hover:b
order-indigo-300 mt-5 overflow-auto">                                   <div class="px-4 py-6 sm:grid sm:grid-cols-3 s
m:gap-4 sm:px-0">                                                  <dt class="text-sm font-medium leading-6 text-gray-
900">{prediction.input.prompt}</dt>                                <p class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 overflow-auto">
       {prediction.output}
</p>
      </div>
            </div>
          )}
<p className="py-3 text-sm opacity-50">status: {prediction.status}</p>                                              </>                                                      )}








 </div>

</>

  );
};

export default ImageUploader;
