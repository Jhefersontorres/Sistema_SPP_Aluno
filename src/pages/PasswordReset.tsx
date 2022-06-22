import Unifasipe from '../assets/images/logounifasipe.svg'
import Loader from '../assets/images/loader.svg'
import '../styles/PasswordReset.scss';
import { loadavg } from 'os';

export function PassawordReset() {
 
  return (
    <div id="page-reset">
      <div>
        <img src={Unifasipe} alt="Logo Fasipe" />
      </div>
      <div>
        <img src={Loader} alt="Logo Fasipe" />
      </div>
    </div>
  )
}