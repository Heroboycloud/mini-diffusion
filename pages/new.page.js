import React, { useState } from "react";

/**
 *
 * @param {number} maxFileSize maximum file size allowed in bytes
 * @returns
 */
const ImageUploader = ({ id = "image-input", maxFileSize }) => {
  const [images, setImages] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [dragover, setDragover] = useState(false);
  const [prediction,setPrediction]= useState(null);
  const [error,setError]= useState(null);
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
 const UploadImage= async(e,image) =>{
    const response = await fetch("/api/imageprompt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: e.target.prompt.value,
        img: image
      }),
    });
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
}





};
  const handleInputFileChange = e => {
    if (!e.target.files) return;
    for (const file of e.target.files) {
      if (!file.type.startsWith("image")) continue;
      if (maxFileSize && file.size > maxFileSize) continue;
      const imageUrl = getImageUrl(file);
      setImageUrls(imageUrls => [...imageUrls, imageUrl]);
      setImages(images => [...images, file]);
      UploadImage(e,imageUrl)
    }
  };

  const removeImage = idx => {
    setImages([...images.slice(0, idx), ...images.slice(idx + 1)]);
    setImageUrls([...imageUrls.slice(0, idx), ...imageUrls.slice(idx + 1)]);
  };

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
    <div className="h-[400px] overflow-auto gap-8 items-center rounded-md p-4 shadow-lg flex flex-col sm:flex-row">
      <div className="h-[70%]" onDragEnter={onDragEnter} onDragLeave={onDragLeave} onDrop={onDrop}>
        <label
          htmlFor={id}
          className={`h-full relative border-2 border-gray-400 w-64 p-4 rounded-md border-dashed flex justify-center items-center flex-col cursor-pointer bg-gray-50 hover:bg-gray-100 transition select-none ${
            dragover && "opacity-70"
          }`}
        >
          <input
            type="file"
            id={id}
            accept="image/*"
            className="absolute opacity-0 top-0 left-0 w-full h-full cursor-pointer"
            onChange={handleInputFileChange}
          />
          <span className="text-gray-500 text-2xl block">
            <i className="fa-solid fa-arrow-up-from-bracket"></i>
          </span>
          <span className="text-gray-500 hover:text-gray-700 transition font-medium">
            Drop images here, or
            <span className="text-blue-500 font-semibold"> browse</span>
          </span>
        </label>
      </div>

       <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div></div>




      <div className="flex items-start gap-8 flex-wrap h-full overflow-auto p-4">
        {imageUrls.map((imageUrl, idx) => (
          <div key={idx} className="relative border-gray-200 border-2 rounded-sm">
            <a href={imageUrl} className="block" target="_blank" rel="noreferrer">
              <img src={imageUrl} alt="Uploaded" className="w-40 h-40" />
            </a>
            <div className="text-gray-800 text-sm font-medium">
              <div>{images[idx]?.name}</div>
              <div className="text-violet-500 font-semibold">{(images[idx]?.size / 1024).toFixed(2)} KB</div>
            </div>
            <button
              className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-pink-500 text-white rounded-full p-1 w-6 h-6 text-sm flex justify-center items-center hover:bg-pink-600 transition"
              onClick={() => removeImage(idx)}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUploader;
