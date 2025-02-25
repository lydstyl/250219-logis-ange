import Slider from '../../components/Slider'

export default function Lot2() {
  return (
    <div>
      <h1 className='text-3xl font-bold mb-4 text-center'>T3</h1>

      <Slider folder={'images/lot2'} />
      <p className='text-lg text-gray-700 mb-2'>
        Surface loi Carrez total : 85 m²
      </p>
      <p className='text-lg text-gray-700 mb-2'>Surface au sol total : 99 m²</p>
    </div>
  )
}
