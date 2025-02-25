import Slider from '../../components/Slider'

export default function Lot4() {
  return (
    <div>
      <h1 className='text-3xl font-bold mb-4 text-center'>Deuxième T2</h1>

      <Slider folder={'images/lot4'} />
      <p className='text-lg text-gray-700 mb-2'>
        Surface loi Carrez total : 68 m²
      </p>
      <p className='text-lg text-gray-700 mb-2'>Surface au sol total : 82 m²</p>
    </div>
  )
}
