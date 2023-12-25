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

  const prediction = await replicate.predictions.create({
    // Pinned to a specific version of Stable Diffusion
    // Mistral
    version: "2b56576fcfbe32fa0526897d8385dd3fb3d36ba6fd0dbe033c72886b81ade93e",
input: {
      top_k: 50,
      top_p: 0.9,
      prompt: req.body.prompt,
      temperature: 0.6,
      max_new_tokens: 1024,
      prompt_template: "<s>[INST] {prompt} [/INST]",
      presence_penalty: 0,
      frequency_penalty: 0
    }

    // This is the text prompt that will be submitted by a form on the frontend
  });

  if (prediction?.error) {
    res.statusCode = 500;
    res.end(JSON.stringify({ detail: prediction.error }));
    return;
  }

  res.statusCode = 201;
//  console.log(prediction);
  res.end(JSON.stringify(prediction));
}
