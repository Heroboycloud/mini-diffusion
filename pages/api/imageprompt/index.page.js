import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export default async function handler(req, res) {
  if (!process.env.REPLICATE_API_TOKEN) {
    throw new Error(
      "The REPLICATE_API_TOKEN environment variable is not set. See README.md for instructions on how to set it."
    );
  }

console.log(req.body);

  const prediction = await replicate.predictions.create({
    // Pinned to a specific version of Stable Diffusion
    // See https://replicate.com/stability-ai/sdxl
    version: "51a43c9d00dfd92276b2511b509fcb3ad82e221f6a9e5806c54e69803e291d6b",

    // This is the text prompt that will be submitted by a form on the frontend
    input: {
prompt: req.body.prompt,
img: req.body.img,
top_k:5,
top_p:1,
max_length: 500
},
  });

  if (prediction?.error) {
    res.statusCode = 500;
    res.end(JSON.stringify({ detail: prediction.error }));
    return;
  }

  res.statusCode = 201;
  console.log(req.body);
  res.end(JSON.stringify(prediction));
}
