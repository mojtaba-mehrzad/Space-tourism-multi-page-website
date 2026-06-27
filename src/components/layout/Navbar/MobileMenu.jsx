import React, { useEffect, useRef } from 'react';
import NavLinks from './NavLinks';

export default function MobileMenu({isOpen, onClose }) {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
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
