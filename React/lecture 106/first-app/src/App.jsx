import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Card from "./components/Card"

function App() {

  return (
      <>
        <Navbar/>
        <div className="cards">
          <Card title="title 1" description="card 1 description"/>
          <Card title="title 2" description="card 2 description"/>
          <Card title="title 3" description="card 3 description"/>
          <Card title="title 4" description="card 4 description"/>
          
        </div>
        <Footer/>
      </>
  )
}

export default App
