import main from '../assets/images/main-alternative.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import {Logo} from '../components';
import { Link } from 'react-router-dom';

const Landing = () => {

    return ( 
       <Wrapper>
           <nav>
            <Logo />
           </nav>
           <div className="container page">
               <div className="info">
                   <h1>
                       Job <span>tracking</span> app
                    </h1>
                    <p>
                        I'm baby selfies hashtag disrupt, skateboard 
                        woke messenger bag man bun mumblecore sartorial 
                        pabst asymmetrical tbh. Shaman shoreditch lyft 
                        chia, selvage health goth tumeric waistcoat 
                        palo santo before they sold out plaid small 
                        batch tote bag next level.
                    </p>
                    <Link to='/register' className='btn btn-hero'>Login/Register</Link>
               </div>
               <img src={main} alt="job hunt" className='img main-img' />
           </div>
        </Wrapper>
     );
}


 
export default Landing;