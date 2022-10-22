import Display from "./components/Display";
import Navbar from "./components/Navbar";
import {useRef} from 'react';
function App() {
  const pages = [useRef(null), useRef(null), useRef(null), useRef(null)];
  return(
      <main className="h-screen w-screen relative overflow-hidden">
        <Navbar pages={pages}></Navbar>
        <Display home={pages[0]} about={pages[1]} gallery={pages[2]} contact={pages[3]}></Display>			
      </main>
  )
}

export default App;
