import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Loader from "./loaders";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default function Home() {
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);
  const [prompt,setPrompt]= useState("");
  const [isGenerating,setIsGenerating]= useState(false);
  const [clientError,setClientError]= useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsGenerating(true)
try{
    const response = await fetch("/api/predictimage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: e.target.prompt.value,
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
      await sleep(1000);
      const response = await fetch("/api/predictimage/" + prediction.id);
      prediction = await response.json();
      if (response.status !== 200) {
        setError(prediction.detail);
        return;
      }
      console.log({ prediction });
      setPrediction(prediction);
      setIsGenerating(false);
    }
}catch(err){
 setClientError(true);
} 

 };

  return (
    <div className="container max-w-2xl mx-auto p-5">
      <Head>
        <title>Awesome AI image generator </title>
      </Head>
      <p className="mt-3 text-2xl">
            Create Beautiful
            <span className="text-2xl font-bold text-blue-600">
              {" "}
              AI Images{" "}
            </span>
            in Seconds
          </p>
      <form className="" onSubmit={handleSubmit}>
	<label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                Prompt:
              </label>

                <textarea
                  id="prompt"
                  name="prompt"
                  rows={3}
		  onChange={(e) => setPrompt(e.target.value)}
		  placeholder="Enter a prompt"
                  className="text-white bg-black block w-full rounded-md border-1 py-1.5  shadow-lg shadow ring-1 ring-inset ring-gray-300 placeholder:text-blue-400 focus:ring-2 focus:ring-inset focus:ring-white-100 "
                  defaultValue={prompt}
                />
        <button
  className={`bg-blue-600 w-full hover:bg-blue-700 text-white font-bold mt-6 py-2 px-4 rounded
                ${
                  isGenerating || prompt === ""
                    ? "cursor-not-allowed opacity-50"
                    : ""
                }`}
  type="submit"
  disabled={isGenerating || prompt === ""}
>
  {isGenerating ? "Generating..." : "Generate"}
</button>
      </form>

      {error && <div>{error}</div>}
      {clientError && <span class="text-red-500 text-light"> Failed to Connect </span>}
      {prediction && (
        <>
          { prediction.status !== "succeeded" ? (<Loader />) : "" }
          {prediction.output && (
            <div className="image-wrapper mt-5">
              <Image
                fill
                src={prediction.output[prediction.output.length - 1]}
                alt="image_output"
                sizes="100vw"
              />
            </div>
          )}

          <p className="py-3 text-sm opacity-50">status: {prediction.status}</p>
        </>
      )}
    </div>
  );
}
