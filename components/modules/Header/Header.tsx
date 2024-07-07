'use client'

import Link from 'next/link'

import Logo from '@/components/elements/Logo/Logo'
import { useLang } from '@/hooks/useLang'
import '@/app/globalStyles/header.css'

const Header = () => {
  const { lang, translations } = useLang()

  return (
    <header className='header'>
      <div className='header__container container'>
        <button className='header__burger'>
          {translations[lang].header.menu_btn}
        </button>
        <div className='header__logo'>
          <Logo />
        </div>
        <ul className='header__links'>
          <li className='header__link'>
            <button className='header__link-btn header__link-btn_search'></button>
          </li>
          <li className='header__link'>
            <Link
              href='/favourites'
              className='header__link-btn header__link-btn_favourites'
            ></Link>
          </li>
          <li className='header__link'>
            <Link
              href='/comparison'
              className='header__link-btn header__link-btn_compare'
            ></Link>
          </li>
          <li className='header__link'>
            <Link
              href='/cart'
              className='header__link-btn header__link-btn_cart'
            ></Link>
          </li>
          <li className='header__link header__link_profile'>
            <Link
              href='/profile'
              className='header__link-btn header__link-btn_profile'
            ></Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
