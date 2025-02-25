import Slider from '../../components/Slider'
export default function Garages() {
  return (
    <div>
      <h1 className='text-3xl font-bold mb-4 text-center'>Garages</h1>

      <Slider folder={'images/garages'} />
      <p className='text-lg text-gray-700 mb-2'>
        5 garages standards avec le plafond isolé.
      </p>
      <p className='text-lg text-gray-700 mb-2'>Surface des garages.</p>
    </div>
  )
}
