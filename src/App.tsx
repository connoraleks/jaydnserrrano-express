import {Header, About, Divider, Projects} from './components/lib';
import { useResizeDetector } from 'react-resize-detector';
function App() {
  const { ref, width, height } = useResizeDetector();
  return (
    <div ref={ref} className={"max-w-3xl w-full mx-auto p-8 sm:p-16"}>
      <Header width={width!} height={height!} />
      <Divider id={"about"} />
      <About width={width!} height={height!} />
      <Divider id={"projects"} />
      <Projects width={width!} height={height!} />
      {/* <Footer /> */ }
    </div>
  );
}

export default App;
