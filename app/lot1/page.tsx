import Slider from '../../components/Slider'

export default function Lot1() {
  return (
    <div>
      <h1 className='text-3xl font-bold mb-4 text-center'>Local commercial</h1>

      <Slider folder={'images/lot1'} />
      <p className='text-lg text-gray-700 mb-2'>
        Surface loi Carrez total : 83 m²
      </p>
      <p className='text-lg text-gray-700 mb-2'>
        Surface au sol total : 121 m²
      </p>
    </div>
  )
}
