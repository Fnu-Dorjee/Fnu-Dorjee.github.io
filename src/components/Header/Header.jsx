
//import reactImg from '../../assets/react-core-concepts.png'
import headerImg from '../../assets/Or.png';
import './Header.css';
const reactDescriptions = ['traditions', 'schools', 'sects'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
export default function Header(props){
    const description = reactDescriptions[genRandomInt(2)];
    return(
      <header>
          <img src={headerImg} alt="Stylized atom" />
          <h1>4 Schools of Buddhism</h1>
          <p>
            These {description} evolved over hundreds of years 
            from common roots in India.  
          </p>
        </header>
    );
  }