import './App.css';
import chery1 from './imagens/chery-tiggo-5x.jpg'
import chery2 from './imagens/chery-tiggo-8.jpg'
import chery3 from './imagens/chery-tiggo-2.jpg'
import chevrolet1 from './imagens/chevrolet-onix.jpg'
import chevrolet2 from './imagens/chevrolet-onix-plus.jpg'
import chevrolet3 from './imagens/chevrolet-tracker.jpg'
import fiat1 from './imagens/fiat-strada.jpeg'
import fiat2 from './imagens/fiat-argo.jpeg'
import fiat3 from './imagens/fiat-mobi.jpg'
import honda1 from './imagens/honda-fit.jpg'
import honda2 from './imagens/honda-hr-v.jpg'
import honda3 from './imagens/honda-civic.jpg'
import hyundai1 from './imagens/hyundai-tucson.jpg'
import hyundai2 from './imagens/hyundai-creta.jpg'
import hyundai3 from './imagens/hyundai-hb20.jpg'
import jeep1 from './imagens/jeep-compass.jpg'
import jeep2 from './imagens/jeep-renegade.jpg'
import jeep3 from './imagens/jeep-commander.jpg'
import nissan1 from './imagens/nissan-versa.jpg'
import nissan2 from './imagens/nissan-leaf.jpg'
import nissan3 from './imagens/nissan-kicks.jpg'
import peugeot1 from './imagens/peugeot-208.jpg'
import peugeot2 from './imagens/peugeot-2008.jpg'
import peugeot3 from './imagens/peugeot-3008.jpg'
import renault1 from './imagens/renault-captur.jpg'
import renault2 from './imagens/renault-duster.jpg'
import renault3 from './imagens/renault-kwid.jpg'
import volkswagen1 from './imagens/volkswagen-gol.jpg'
import volkswagen2 from './imagens/volkswagen-t-cross.jpg'
import volkswagen3 from './imagens/volkswagen-nivus.jpg'

function App() {
  return (
    <div id="app">
      <div id="cabecalho">
        <div id="titulo">
          <h1>SILVER MOTORS</h1>
        </div>
        <div id="pesquisa">
          <input/>
          <button>Pesquisar</button>
        </div>
      </div>
      <div id="conteudo">
        <div id="historia">
          <h2>O que nós somos?</h2>
          <p>
            Somos uma empresa de vendas de carros novos e seminovos
            há mais de 3 anos no mercado com ótimos profissionais e técnicos
            que irão te auxiliar a conseguir o sonho de adquirir um carro.
          </p>
        </div>
        <div id="montadoras">
          <h3>CHERY:</h3>
          <div class="carros">
            <div class="carro">
              <h4>Tiggo 5x</h4>
              <img src={chery1} alt="Tiggo 5x" width="400" height="300"/>
              <p>Preço: R$ 140.000,00</p>
            </div>
            <div class="carro">
              <h4>Tiggo 8</h4>
              <img src={chery2} alt="Tiggo 8" width="400" height="300"/>
              <p>Preço: R$ 170.000,00</p>
            </div>
            <div class="carro">
              <h4>Tiggo 2</h4>
              <img src={chery3} alt="Tiggo 8" width="400" height="300"/>
              <p>Preço: R$ 170.000,00</p>
            </div>
          </div>
          <h3>CHEVROLET:</h3>
          <div class="carros">
            <div class="carro">
              <h4>Onix</h4>
              <img src={chevrolet1} alt="Onix" width="400" height="300"/>
              <p>Preço: R$ 75.000,00</p>
            </div>
            <div class="carro">
              <h4>Onix Plus</h4>
              <img src={chevrolet2} alt="Onix Plus" width="400" height="300"/>
              <p>Preço: R$ 80.000,00</p>
            </div>
            <div class="carro">
              <h4>Tracker</h4>
              <img src={chevrolet3} alt="Tracker" width="400" height="300"/>
              <p>Preço: R$ 70.000,00</p>
            </div>
          </div>
          <h3>FIAT:</h3>
          <div class="carros">
            <div class="carro">
              <h4>Strada</h4>
              <img src={fiat1} alt="Strada" width="400" height="300"/>
              <p>Preço: R$ 90.000,00</p>
            </div>
            <div class="carro">
              <h4>Argo</h4>
              <img src={fiat2} alt="Argo" width="400" height="300"/>
              <p>Preço: R$ 75.000,00</p>
            </div>
            <div class="carro">
              <h4>Mobi</h4>
              <img src={fiat3} alt="Mobi" width="400" height="300"/>
              <p>Preço: R$ 65.000,00</p>
            </div>
          </div>
          <h3>HONDA:</h3>
          <div class="carros">
            <div class="carro">
              <h4>Fit</h4>
              <img src={honda1} alt="Fit" width="400" height="300"/>
              <p>Preço: R$ 80.000,00</p>
            </div>
            <div class="carro">
              <h4>HR-V</h4>
              <img src={honda2} alt="HR-V" width="400" height="300"/>
              <p>Preço: R$ 120.000,00</p>
            </div>
            <div class="carro">
              <h4>Civic</h4>
              <img src={honda3} alt="Civic" width="400" height="300"/>
              <p>Preço: R$ 110.000,00</p>
            </div>
          </div>
          <h3>HYUNDAI:</h3>
          <div class="carros">
            <div class="carro">
              <h4>Tucson</h4>
              <img src={hyundai1} alt="Tucson" width="400" height="300"/>
              <p>Preço: R$ 200.000,00</p>
            </div>
            <div class="carro">
              <h4>Creta</h4>
              <img src={hyundai2} alt="Creta" width="400" height="300"/>
              <p>Preço: R$ 95.000,00</p>
            </div>
            <div class="carro">
              <h4>HB20</h4>
              <img src={hyundai3} alt="HB20" width="400" height="300"/>
              <p>Preço: R$ 75.000,00</p>
            </div>
          </div>
          <h3>JEEP:</h3>
          <div class="carros">
            <div class="carro">
              <h4>Compass</h4>
              <img src={jeep1} alt="Compass" width="400" height="300"/>
              <p>Preço: R$ 160.000,00</p>
            </div>
            <div class="carro">
              <h4>Renegade</h4>
              <img src={jeep2} alt="Renegade" width="400" height="300"/>
              <p>Preço: R$ 100.000,00</p>
            </div>
            <div class="carro">
              <h4>Commander</h4>
              <img src={jeep3} alt="Commander" width="400" height="300"/>
              <p>Preço: R$ 215.000,00</p>
            </div>
          </div>
          <h3>NISSAN:</h3>
          <div class="carros">
            <div class="carro">
              <h4>Versa</h4>
              <img src={nissan1} alt="Versa" width="400" height="300"/>
              <p>Preço: R$ 90.000,00</p>
            </div>
            <div class="carro">
              <h4>Leaf</h4>
              <img src={nissan2} alt="Leaf" width="400" height="300"/>
              <p>Preço: R$ 290.000,00</p>
            </div>
            <div class="carro">
              <h4>Kicks</h4>
              <img src={nissan3} alt="Kicks" width="400" height="300"/>
              <p>Preço: R$ 105.000,00</p>
            </div>
          </div>
          <h3>PEUGEOT:</h3>
          <div class="carros">
            <div class="carro">
              <h4>208</h4>
              <img src={peugeot1} alt="208" width="400" height="300"/>
              <p>Preço: R$ 85.000,00</p>
            </div>
            <div class="carro">
              <h4>2008</h4>
              <img src={peugeot2} alt="2008" width="400" height="300"/>
              <p>Preço: R$ 85.000,00</p>
            </div>
            <div class="carro">
              <h4>3008</h4>
              <img src={peugeot3} alt="3008" width="400" height="300"/>
              <p>Preço: R$ 260.000,00</p>
            </div>
          </div>
          <h3>RENAULT:</h3>
          <div class="carros">
            <div class="carro">
              <h4>Captur</h4>
              <img src={renault1} alt="Captur" width="400" height="300"/>
              <p>Preço: R$ 120.000,00</p>
            </div>
            <div class="carro">
              <h4>Duster</h4>
              <img src={renault2} alt="Duster" width="400" height="300"/>
              <p>Preço: R$ 100.000,00</p>
            </div>
            <div class="carro">
              <h4>Kwid</h4>
              <img src={renault3} alt="Kwid" width="400" height="300"/>
              <p>Preço: R$ 50.000,00</p>
            </div>
          </div>
          <h3>VOLKSWAGEN:</h3>
          <div class="carros">
            <div class="carro">
              <h4>Gol</h4>
              <img src={volkswagen1} alt="Gol" width="400" height="300"/>
              <p>Preço: R$ 70.000,00</p>
            </div>
            <div class="carro">
              <h4>T-Cross</h4>
              <img src={volkswagen2} alt="T-Cross" width="400" height="300"/>
              <p>Preço: R$ 110.000,00</p>
            </div>
            <div class="carro">
              <h4>Nivus</h4>
              <img src={volkswagen3} alt="Nivus" width="400" height="300"/>
              <p>Preço: R$ 120.000,00</p>
            </div>
          </div>
        </div>
      </div>
      <div id = "rodape">
        <h5>Telefone de contato:</h5>
        <p id="telefone">+55 21 2498-2088</p>
      </div>
    </div>
  );
}

export default App;