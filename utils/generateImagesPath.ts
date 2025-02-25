// import fs from 'fs'
// import path from 'path'

export const generateImagesPath = async (folder: string) => {
  const res = await fetch(`/api/images?folder=${folder}`)
  const imagePaths = await res.json()
  return imagePaths
}

export default generateImagesPath
