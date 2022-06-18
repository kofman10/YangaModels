import Header from "./Header";
import {Link} from 'react-router-dom'

const Homepage = () => {
    return ( 
        <section className="bg-[#F8DBCB] h-screen w-full">
  <Header />
 <main className="mx-2"> 
<h1 className="text-center text-3xl mt-10 mb-10">WE ARE COMING SOON</h1>
<p className="text-center">We are working hard to give you the best experience</p>
<p className="text-center mt-7 pb-10">Yanga Model Management is a modelling agency located in Lagos, Southwest Nigeria specializing in the management and marketing of homegrown fashion, runway and commercial models with the aim of nurturing long term and lucrative careers for our models by supporting and giving them the space to grow.</p>
<Link to="/Scouting" className=" underline ml-2">Become a YangaModel</Link>
</main>
        </section>
       
        
     );
}
 
export default Homepage;