import { Outlet } from 'react-router-dom';
import Footer from "./component/Footer";
import Header from './component/Header';


function App() {


  return (
    <>
      ,<header>
        <Header/>
      </header>
      <main className="mx-3">
        <Outlet />
      </main>
      <footer className='text-center bg-body-tertiary' style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
        <Footer/>
      </footer>
    </>
  )
}

export default App
