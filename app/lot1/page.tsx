import Slider from '../components/Slider'

const images = ['/images/lot11.png', '/images/lot12.png', '/images/lot13.png']

export default function Contact() {
  return (
    <div>
      <h1 className='text-3xl font-bold mb-4 text-center'>Local commercial</h1>

      <Slider images={images} />
      <p className='text-lg text-gray-700 mb-4'>
        <span>
          Local commercial de 121 m² situé en plein cœur de Raismes, en face de
          la mairie.
        </span>
      </p>
    </div>
  )
}
