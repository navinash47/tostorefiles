export default function handler(req, res) {
    const file = req.files.file
    // Do something with the file, e.g. save it to a database or cloud storage
    console.log(file.status)
    res.status(200).json({ message: 'File uploaded successfully' })
  }
  