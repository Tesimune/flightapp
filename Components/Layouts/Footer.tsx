import Head from 'next/head'
import Image from 'next/image'


export default function Footer() {
  return (
    <div>
        <footer className=''>
        <a
          href="/#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className=''>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
