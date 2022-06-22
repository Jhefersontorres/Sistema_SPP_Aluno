import Unifasipe from '../assets/images/logounifasipe.svg'
import Loader from '../assets/images/loader.svg'
import '../styles/home.scss';
import { loadavg } from 'os';

export function Home() {
 
  return (
    <div id="HomeContainer">
      <div>
        <img src={Unifasipe} alt="Logo Fasipe" />
      </div>
      <div>
        <img src={Loader} alt="Logo Fasipe" />
      </div>
    </div>
  )
}