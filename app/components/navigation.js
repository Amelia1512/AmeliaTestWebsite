'use client'

import Link from 'next/link';
import './navigation.css';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';
import { CartContext } from '../state/contexts';

const links = [
  {
    name: "Home", link: "/", displayCount: false
  },
  {
    name: "Shop", link: "/shop", displayCount: false
  },
  {
    name: "Cart", link: "/cart", displayCount: true
  }
]



export default function Navigation() {
  const pathName= usePathname();
  const context = useContext(CartContext); 
  return (
    <nav>
      <ul className="nav-list">
      {links.map((link) => {
        let activeClass = "";
        let counter = "";
        if(pathName === link.link){
          activeClass = "nav-item__active"
        }
        if(link.displayCount){
            counter = `(${context.totalQuantity()})`
          }
        const cssClasses = "nav-item " + activeClass;
        return (
          <div className={cssClasses}>
            <li key={link.name}><Link href={link.link}>{link.name}</Link></li>
            <li className='total-quantity'>{counter}</li>
          </div>
        );
      })}
      </ul>
    </nav>
  );
}