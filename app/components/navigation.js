'use client'

import Link from 'next/link';
import './navigation.css';
import { usePathname } from 'next/navigation';
// import clsx from 'clsx';

const links = [
  {
    name: "Home", link: "/"
  },
  {
    name: "Shop", link: "/shop"
  },
  {
    name: "Cart", link: "/cart"
  }
]

export default function Navigation() {
  const pathName= usePathname();
  return (
    <nav>
      <ul className="nav-list">
      {links.map((link) => {
        let activeClass = "";
        if(pathName === link.link){
          activeClass = "nav-item__active"
        }
        const cssClasses = "nav-item " + activeClass;
        return (
          <li className={cssClasses} key={link.name}><Link href={link.link}>{link.name}</Link></li>
        );
      })}
  
      </ul>
    </nav>
  );
}