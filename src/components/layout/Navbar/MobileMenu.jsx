import React, { useEffect, useRef } from 'react';
import NavLinks from './NavLinks';

export default function MobileMenu({isOpen, onClose }) {
  const menuRef = useRef(null);

 useEffect(() => {
    const handleClickOutside = (event) => {
      // اگر کلیک روی HamburgerButton بود، نادیده بگیر
      if (event.target.closest('button[aria-label="Toggle Menu"]')) {
        return;
      }

      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);
  return (
    <aside ref={menuRef} className={`${isOpen ? 'fixed' : 'hidden'} nav-mobileMenu`}>
      <NavLinks onClick={onClose} />
    </aside>
  )
}
