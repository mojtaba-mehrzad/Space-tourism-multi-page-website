import React from 'react'
import NavLinks from './NavLinks'

export default function MobileMenu({isOpen, onClose }) {
  return (
    <aside className={`${isOpen ? 'fixed' : 'hidden'} nav-mobileMenu`}>
      <NavLinks onClick={onClose} />
    </aside>
  )
}
