import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import Sidebar from "@/components/layout/Sidebar"

const Home = () => {
  return (
    <>
      <Header/>
      <div id='wrapper'>
        <Sidebar/>
        <h1>Hello World</h1>
      </div>
      <Footer/>
    </>
  )
}

export default Home