export const generateImagesPath = (
  name: string,
  extension: string,
  count: number
) => {
  return Array.from(
    { length: count },
    (_, i) => `/images/${name}${i + 1}.${extension}`
  )
}
export default generateImagesPath
