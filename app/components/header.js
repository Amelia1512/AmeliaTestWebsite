import Image from 'next/image';

export default function Header() {
    return (   
        <div className='header'>
            <Image className='logo' src='/cj-logo.svg' width={200} height={200}/>
                <p className='header-text'>Amelia's Test Site</p>
        </div>
    );
  }