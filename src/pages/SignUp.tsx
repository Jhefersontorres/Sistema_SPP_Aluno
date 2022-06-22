import Fasiclin from "../assets/images/logofasiclin.svg";
import googleIconImg from "../assets/images/google-icon.svg";
import "../styles/home.scss";
import { loadavg } from "os";

export function SignUp() {
  return (
    <div>
      <aside>
        <img src={Fasiclin} alt="Logo Fasiclin" />
      </aside>
      <main>
        <strong>Crie sua conta </strong>
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
          <section>
            <input type="checkbox" name="acceptTerms" id="acceptTerms" />
            <span >
              <div >
                <div >
                  <span id="acceptTerms">Aceito os </span>
                  <a href="#" >
                    Termos de Uso
                  </a>
                  e
                  <a
                   href="#"
                  >
                    Política de Privacidade
                  </a>
                  .
                </div>
              </div>
            </span>
          </section>
          <button type="submit">Criar conta</button>
        </form>
        <div>
          <strong>
            <a>
            Não sabe sua senha ?
            </a>
            </strong>
        </div>
        <div>
          <p>
           Já tenh conta
            <a href="#" target="_blank">
              Fazer login aqui
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
