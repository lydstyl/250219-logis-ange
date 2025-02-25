import Slider from '../../components/Slider'

export default function Commun() {
  return (
    <div>
      <h1 className='text-3xl font-bold mb-4 text-center'>Parties communes</h1>

      <Slider folder={'images/commun'} />
      <p className='text-lg text-gray-700 mb-2'>
        Local à poubelle et rangement sous escalier.
      </p>
    </div>
  )
}
