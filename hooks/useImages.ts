import { useEffect, useState } from 'react'
import generateImagesPath from '@/utils/generateImagesPath'

const useImages = (folder: string) => {
  const [images, setImages] = useState<string[]>([])

  useEffect(() => {
    const fetchImages = async () => {
      const imagePaths = await generateImagesPath(folder)
      setImages(imagePaths)
    }
    fetchImages()
  }, [folder])

  return images
}

export default useImages
