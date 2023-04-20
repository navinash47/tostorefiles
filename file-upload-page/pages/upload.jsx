import { useState } from 'react'

export default function Upload() {
  const [file, setFile] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('file', file)

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    })

    if (res.ok) {
      console.log('File uploaded successfully')
    } else {
      console.error('Error uploading file')
    }
  }

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  return (
    <div>
      <h1>File Upload</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="file">Select a file:</label>
          <input type="file" id="file" name="file" onChange={handleFileChange} />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  )
}
