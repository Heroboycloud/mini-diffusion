import Image from "next/image"
import { useState } from "react"
import { PhotoIcon } from '@heroicons/react/24/solid';

const Upload = () => {
  // State to store the file
  const [file, setFile] = useState(null)

  // State to store the base64
  const [base64, setBase64] = useState(null)

  // When the file is selected, set the file state
  const onFileChange =async e => {
    if (!e.target.files) {
      return
    }

    setFile(e.target.files[0])
// set files to image
if (!file) {
      return
    }

const base64 = await toBase64(file)
setBase64(base64);
  }

  // On click, clear the input value
  const onClick = e => {
    e.currentTarget.value = ""
  }

  // On submit, upload the file
  const handleSubmit = async e => {
    e.preventDefault()



    // You can upload the base64 to your server here
    await fetch("/api/imgtotext", {
      method: "POST",
      body: JSON.stringify({ base64 }),
      headers: {
        "Content-Type": "application/json"
      }
    })

    // Clear the states after upload
    setFile(null)
    setBase64(null)
  }

  return (
    <>
      <h1>Upload Image</h1>
      <form method="POST" encType="multipart/form-data" onSubmit={handleSubmit}>

<div className="col-span-full">
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
			<input
    type="file"
    name="file-upload"
    accept="image/*"
    onChange={onFileChange}
    onClick={onClick}
  />
                    </label>
                    <br />
	<p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>


        <button type="submit">Upload</button>
      </form>
      {base64 && (
        <Image src={base64} width={300} height={400} alt="Uploaded Image" />
      )}
    </>
  )
}

// Convert a file to base64 string
const toBase64 = file => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader()

    fileReader.readAsDataURL(file)

    fileReader.onload = () => {
      resolve(fileReader.result)
    }

    fileReader.onerror = error => {
      reject(error)
    }
  })
}

export default Upload;
