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
import yamaha1 from './imagens/yamaha-crosser-150.jpg'
import yamaha2 from './imagens/yamaha-factor-150.jpg'
import yamaha3 from './imagens/yamaha-fazer-150.jpg'
import GerarCarro from './Carro'

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
            Além disso, vendemos motos novas e seminovas de diversas marcas
            disponíveis no estoque da loja.
          </p>
        </div>
        <div id="montadoras">
          <h3>CHERY:</h3>
          <div class="carros">
            <GerarCarro nome="Tiggo 5x" arquivo={chery1} preço="140.000,00"/>
            <GerarCarro nome="Tiggo 8" arquivo={chery2} preço="170.000,00"/>
            <GerarCarro nome="Tiggo 2" arquivo={chery3} preço="170.000,00"/>
          </div>
          <h3>CHEVROLET:</h3>
          <div class="carros">
            <GerarCarro nome="Onix" arquivo={chevrolet1} preço="75.000,00"/>
            <GerarCarro nome="Onix Plus" arquivo={chevrolet2} preço="80.000,00"/>
            <GerarCarro nome="Tracker" arquivo={chevrolet3} preço="70.000,00"/>
          </div>
          <h3>FIAT:</h3>
          <div class="carros">
            <GerarCarro nome="Strada" arquivo={fiat1} preço="90.000,00"/>
            <GerarCarro nome="Argo" arquivo={fiat2} preço="75.000,00"/>
            <GerarCarro nome="Mobi" arquivo={fiat3} preço="65.000,00"/>
          </div>
          <h3>HONDA:</h3>
          <div class="carros">
            <GerarCarro nome="Fit" arquivo={honda1} preço="80.000,00"/>
            <GerarCarro nome="HR-V" arquivo={honda2} preço="120.000,00"/>
            <GerarCarro nome="Civic" arquivo={honda3} preço="110.000,00"/>
          </div>
          <h3>HYUNDAI:</h3>
          <div class="carros">
            <GerarCarro nome="Tucson" arquivo={hyundai1} preço="200.000,00"/>
            <GerarCarro nome="Creta" arquivo={hyundai2} preço="95.000,00"/>
            <GerarCarro nome="HB20" arquivo={hyundai3} preço="75.000,00"/>
          </div>
          <h3>JEEP:</h3>
          <div class="carros">
            <GerarCarro nome="Compass" arquivo={jeep1} preço="160.000,00"/>
            <GerarCarro nome="Renegade" arquivo={jeep2} preço="100.000,00"/>
            <GerarCarro nome="Commander" arquivo={jeep3} preço="215.000,00"/>
          </div>
          <h3>NISSAN:</h3>
          <div class="carros">
            <GerarCarro nome="Versa" arquivo={nissan1} preço="90.000,00"/>
            <GerarCarro nome="Leaf" arquivo={nissan2} preço="290.000,00"/>
            <GerarCarro nome="Kicks" arquivo={nissan3} preço="105.000,00"/>
          </div>
          <h3>PEUGEOT:</h3>
          <div class="carros">
            <GerarCarro nome="208" arquivo={peugeot1} preço="85.000,00"/>
            <GerarCarro nome="2008" arquivo={peugeot2} preço="85.000,00"/>
            <GerarCarro nome="3008" arquivo={peugeot3} preço="260.000,00"/>
          </div>
          <h3>RENAULT:</h3>
          <div class="carros">
            <GerarCarro nome="Captur" arquivo={renault1} preço="120.000,00"/>
            <GerarCarro nome="Duster" arquivo={renault2} preço="100.000,00"/>
            <GerarCarro nome="Kwid" arquivo={renault3} preço="50.000,00"/>
          </div>
          <h3>VOLKSWAGEN:</h3>
          <div class="carros">
            <GerarCarro nome="Gol" arquivo={volkswagen1} preço="70.000,00"/>
            <GerarCarro nome="T-Cross" arquivo={volkswagen2} preço="110.000,00"/>
            <GerarCarro nome="Nivus" arquivo={volkswagen3} preço="120.000,00"/>
          </div>
          <h3>YAMAHA:</h3>
          <div class="carros">
            <GerarCarro nome="Crosser 150" arquivo={yamaha1} preço="15.000,00"/>
            <GerarCarro nome="Factor 150" arquivo={yamaha2} preço="14.000,00"/>
            <GerarCarro nome="Fazer 150" arquivo={yamaha3} preço="12.000,00"/>
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