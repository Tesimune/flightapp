import Landing from '../Components/Landing'
import Header from '../Components/Layouts/Header'
import Navbar from '../Components/Layouts/Navbar'


export default function Home() {
  return (
    <div>
      <Header />
      
      <div className='min-h-screen'>

        <main className=''>
          <Navbar />
          <Landing />
        </main>

      </div>
     
    </div>
  )
}
