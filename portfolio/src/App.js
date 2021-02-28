import './App.css';
import ContentContainer from './components/contentContainer'
import Aos from "aos"
import "aos/dist/aos.css"
import { Parallax } from 'react-parallax';
import PageTitle from './components/pageTitle';
import AboutMe from './components/aboutMe';
import MyProjects from './components/myProjects'



function App() {
  return (
    <>
    <ContentContainer sectionTitle="I am the champ" sectionBody="some stuff"/> 
    <Parallax bgImage={process.env.PUBLIC_URL + '/images/backgroundPhoto.jpg'} >
    <div className="parallax title-parallax"> 
    <PageTitle/> 
    </ div> 
    </Parallax> 
   <AboutMe /> 
   <Parallax bgImage={process.env.PUBLIC_URL + '/images/backgroundPhoto.jpg'} >
       <div className="parallax title-parallax">
       </ div> 
    </Parallax>
    <MyProjects />
    

    </>
  );
}

export default App;
