import Link from 'next/link'

const Logo = () => {
  return (
    <Link className='logo' href='/'>
      <img src='/img/logo.png' alt='Logo' className='logo__img' />
      <span>РТелеком</span>
    </Link>
  )
}

export default Logo
