import Link from 'next/link'

const Nav = () => (
  <div>
    <nav className='bg-gray-800 p-4'>
      <ul className='flex space-x-4 text-white'>
        <li>
          <Link className='text-white' href='/'>
            Accueil
          </Link>
        </li>
        <li>
          <Link href='/lot1'>Local commercial</Link>
        </li>
        <li>
          <Link href='/lot2'>T3</Link>
        </li>
        <li>
          <Link href='/lot3'>premier T2</Link>
        </li>
        <li>
          <Link href='/lot4'>deuxième T2</Link>
        </li>
        <li>
          <Link href='/lot5'>troisième T2</Link>
        </li>
        <li>
          <Link href='/lot6'>Studio</Link>
        </li>
        <li>
          <Link href='/garages'>Garages</Link>
        </li>
        <li>
          <Link href='/commun'>Parties communes</Link>
        </li>
        <li>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  </div>
)

export default Nav
