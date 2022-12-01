import Head from 'next/head'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className='bg-slate-900 text-white p-3 border-b-2 border-white'>
      <nav className='flex justify-between'>
        <a href='#' className='flex gap-2 item text-xl'>
          <Image src='/images/logo.png' alt='logo' height={40} width={40} />
          <span className='flex items-center'>FlightApp</span>
        </a>
        <div className='hidden md:block'>
          <ul className='flex items-center text-sm uppercase font-bold'>
            <li><a className='px-2 border-r border-dotted' href='#home'>About</a></li>
            <li><a className='px-2 border-r border-dotted' href='#home'>Contacts</a></li>
            <li><a className='px-2 border-r border-dotted' href='#home'>PLAN&BOOK</a></li>
            <li><a className='px-2 border-r border-dotted' href='#home'>FLY DIFFERENT</a></li>
            <li><a className='px-2 border-r border-dotted' href='#home'>DISCOVER</a></li>
            <li><a className='px-2 border-r border-dotted' href='#home'>Sign in</a></li>
            <li><a className='px-2 py-1.5 m-2 border rounded-full' href='#home'>Sign up</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
