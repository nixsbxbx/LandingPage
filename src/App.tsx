import { Header } from "./components/Header"

function App() {

  return (
    <main className= 'border border-white w-[375px] m-auto'>
      <section className= 'bg-gray-500 p-6 h-[420px]'>
        <Header />

        <img 
        src= "/public/images/ilustration-intro.png" 
        alt="intro ilustration" 
        />
        
        <img 
        className='absolute'
        src= "/public/images/bg-curvy-mobile.svg" 
        alt="bg curvy mobile" 
        />
      </section>
    </main>
  )
}

export default App
