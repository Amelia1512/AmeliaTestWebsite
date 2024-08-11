import Link from 'next/link';
import './navigation.css';

export default function Navigation() {
  return (
    <nav>
      <ul className="nav-list">
        <li className='nav-item'><Link href="/">Home</Link></li>
        <li className='nav-item'><Link href="/shop">Shop</Link></li>
        <li className='nav-item'><Link href="/cart">Cart</Link></li>
      </ul>
    </nav>
  );
}