import React from 'react'
import NavLinks from './NavLinks'

export default function MobileMenu({isOpen, onClose }) {
  return (
    <div id='nav-mobileMenu' className={`${isOpen ? 'fixed' : 'hidden'}`}>
      <NavLinks onClick={onClose} />
    </div>
  )
}
