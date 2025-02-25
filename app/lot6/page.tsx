import Slider from '../../components/Slider'

export default function Lot6() {
  return (
    <div>
      <h1 className='text-3xl font-bold mb-4 text-center'>Studio</h1>

      <Slider folder={'images/lot6'} />
      <p className='text-lg text-gray-700 mb-2'>
        Surface loi Carrez total : 26 m²
      </p>
      <p className='text-lg text-gray-700 mb-2'>Surface au sol total : 26 m²</p>
    </div>
  )
}
