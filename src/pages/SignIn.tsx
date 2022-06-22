import { useHistory, Link } from "react-router-dom";

import Fasiclin from "../assets/images/logofasiclin.svg";
import googleIconImg from "../assets/images/google-icon.svg";
import Prontuario from "../assets/images/logoprontuario.svg";

import "../styles/auth.scss";

export function SignIn() {
  const history = useHistory();

  function navegateToSolicitation(){
    history.push('/home/solicitation');
  }

  return (
    <div id="page-auth">
      <aside>
        <img id="logoProntuario" src={Fasiclin} alt="Logo Fasiclin" />
        <strong>Sistema de solicitação de prontuário</strong>
        <footer>
          <p>Curso Analise e Desenvolvimento de Sistemas</p>
          <p>Desenvolvido por Jheferson Torres</p>
        </footer>
      </aside>
      <main className="main-content">
        <img src={Prontuario} alt="Logo sistema Prontuário" />
        <button onClick={navegateToSolicitation} className="create-room">
          <img src={googleIconImg} alt="" />
          Crie sua conta com Google
        </button>
        <div className="separator">ou entre com seu login e senha</div>
        <form>
          <input
            type="email"
            name="emailuser"
            id="emailuser"
            placeholder="Digite seu email"
          />
          <input
            type="password"
            name="passworduser"
            id="passworduser"
            placeholder="Digite sua senha"
          />
          <div>
            <p>
              Não sabe sua senha ?
              <Link to={'/passaword-reset'} target="_blank" rel="noopener noreferrer">
                {" "}
                Clique aqui
              </Link>
            </p>
          </div>
          <button type="submit" className="create-account">
            Entrar
          </button>
        </form>

        <div>
          <p>
            Não tem conta ?{" "}
            <Link to={'/signup'}>
              {" "}
              Cadastre-se grátis
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
