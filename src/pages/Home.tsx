import { Link } from "react-router-dom";

import Prontuario from "../assets/images/logoprontuario.svg";
import NothingFound from "../assets/images/nothing-found.svg";
import Logout from "../assets/images/logout.svg";
import Avatar from "../assets/images/avatar.jpg";

import "../styles/home.scss";


export function Home() {
  return (
    <div id="HomeContainer">
      <nav>
        <div className="logo">
          <img src={Prontuario} alt="logo Prontuário" />
        </div>
        <div className="user-avatar">
          <p>Jheferson torres de macena</p>
          <img src={Avatar} alt="avatar usuario" id="avatar" />
        <Link to={'/'}>
          <img src={Logout} alt="Sair do sistema" />
        </Link>
        </div>
      </nav>
      <main>
        <div className="home-content">
          <button className="solicitation">SOLICITAR PRONTUÁRIO</button>
          <p>Lista de Solicitação de Prontuário</p>
        </div>
        <div className="card-status-solicitation">
          <div id="not-found-solicitation">
            <img src={NothingFound} alt="nothing-found" />
            <h1>Não a solicitações de Prontuário</h1>
          </div>
        </div>
      </main>

      <footer>Desenvolvido por Jheferson Torres</footer>
    </div>
  );
}
