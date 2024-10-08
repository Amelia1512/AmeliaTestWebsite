import Image from 'next/image';
import Navigation from '@/app/components/navigation';

export default function Header() {
    return (   
        <div className='header'>
            <div className='logo-bar'>
                <Image className='logo' src='/cj-logo.svg' width={100} height={100} alt='logo'/>
                    <p className='header-text'>Amelia's Test Site</p>
                    <div className='empty-logo'></div>
            </div>
            <div className='nav-bar'>
                <Navigation />
            </div>
        </div>
    );
  }