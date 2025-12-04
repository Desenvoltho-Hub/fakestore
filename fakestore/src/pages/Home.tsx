import Hero from "../components/Hero";

import { useGuardRoute } from "../hooks/useGuard";


function Home() {
   useGuardRoute()
    return ( 
        <div className="grid grid-cols-1 md:grid-cols-2 p-5">
            <Hero />
            <img src="/roupas.jpg" alt="" />
          
        </div>
     );
}

export default Home;