import Name from './components/Name';
import About from './components/About';
import Exp from './components/Exp';
import Project from './components/Project';
import Leadership from './components/Leadership';
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


export default function Page() {
  return (
    <div>
      <Navbar />
      <Name/>      
      <About/>
      <Exp/>
      <Project/>
      <Leadership/>
      <Skills/>
      <Footer/>
    </div>
  );
}
