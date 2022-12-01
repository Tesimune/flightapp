import Footer from './Layouts/Footer'
import Navbar from './Layouts/Navbar'

export default function Layout({ Children }) {
  return (
    <>
      <Navbar />
        <main>{Children}</main>
      <Footer />
    </>
  )
}
