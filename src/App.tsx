import Header from "./layouts/Header";
import Main from "./layouts/Main";
import Footer from "./layouts/Footer";

function App() {

  return (
    <>
      <div className="grid h-screen w-screen grid-rows-[auto_1fr_auto]">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </>
  )
}

export default App
