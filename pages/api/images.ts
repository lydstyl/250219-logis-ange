import fs from 'fs'
import path from 'path'
import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { folder } = req.query
  const directoryPath = path.join(process.cwd(), 'public', folder as string)
  const files = fs.readdirSync(directoryPath)
  const imageFiles = files.filter((file) =>
    /\.(png|jpe?g|gif|webp)$/.test(file)
  )

  const imagePaths = imageFiles.map((file) => `/${folder}/${file}`)
  res.status(200).json(imagePaths)
}
