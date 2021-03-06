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
import ford1 from './imagens/ford-ka.jpeg'
import ford2 from './imagens/ford-ecosport.jpg'
import ford3 from './imagens/ford-ranger.jpg'
import honda1 from './imagens/honda-fit.jpg'
import honda2 from './imagens/honda-hr-v.jpg'
import honda3 from './imagens/honda-civic.jpg'
import honda4 from './imagens/honda-cg-160.jpeg'
import honda5 from './imagens/honda-biz-110i.jpg'
import honda6 from './imagens/honda-nxr-160.jpg'
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
import suzuki1 from './imagens/suzuki-gsx-s750.jpg'
import suzuki2 from './imagens/suzuki-v-strom-650.jpg'
import suzuki3 from './imagens/suzuki-gsx-s1000.jpg'
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
          <h2>O que n??s somos?</h2>
          <p id="texto">
            Somos uma empresa de vendas de carros novos e seminovos
            h?? mais de 3 anos no mercado com ??timos profissionais e t??cnicos
            que ir??o te auxiliar a conseguir o sonho de adquirir um carro.
            Al??m disso, vendemos motos novas e seminovas de diversas marcas
            dispon??veis no estoque da loja.
          </p>
        </div>
        <div id="montadoras">
          <h3>CHERY:</h3>
          <div class="carros">
            <GerarCarro nome="Tiggo 5x" arquivo={chery1} pre??o="140.000,00"/>
            <GerarCarro nome="Tiggo 8" arquivo={chery2} pre??o="170.000,00"/>
            <GerarCarro nome="Tiggo 2" arquivo={chery3} pre??o="170.000,00"/>
          </div>
          <h3>CHEVROLET:</h3>
          <div class="carros">
            <GerarCarro nome="Onix" arquivo={chevrolet1} pre??o="75.000,00"/>
            <GerarCarro nome="Onix Plus" arquivo={chevrolet2} pre??o="80.000,00"/>
            <GerarCarro nome="Tracker" arquivo={chevrolet3} pre??o="70.000,00"/>
          </div>
          <h3>FIAT:</h3>
          <div class="carros">
            <GerarCarro nome="Strada" arquivo={fiat1} pre??o="90.000,00"/>
            <GerarCarro nome="Argo" arquivo={fiat2} pre??o="75.000,00"/>
            <GerarCarro nome="Mobi" arquivo={fiat3} pre??o="65.000,00"/>
          </div>
          <h3>FORD:</h3>
          <div class="carros">
            <GerarCarro nome="Ka" arquivo={ford1} pre??o="50.000,00"/>
            <GerarCarro nome="EcoSport" arquivo={ford2} pre??o="70.000,00"/>
            <GerarCarro nome="Ranger" arquivo={ford3} pre??o="150.000,00"/>
          </div>
          <h3>HONDA CARROS:</h3>
          <div class="carros">
            <GerarCarro nome="Fit" arquivo={honda1} pre??o="80.000,00"/>
            <GerarCarro nome="HR-V" arquivo={honda2} pre??o="120.000,00"/>
            <GerarCarro nome="Civic" arquivo={honda3} pre??o="110.000,00"/>
          </div>
          <h3>HONDA MOTOS:</h3>
          <div class="carros">
            <GerarCarro nome="CG 160" arquivo={honda4} pre??o="9.000,00"/>
            <GerarCarro nome="Biz 110i" arquivo={honda5} pre??o="7.500,00"/>
            <GerarCarro nome="NXR 160" arquivo={honda6} pre??o="10.000,00"/>
          </div>
          <h3>HYUNDAI:</h3>
          <div class="carros">
            <GerarCarro nome="Tucson" arquivo={hyundai1} pre??o="200.000,00"/>
            <GerarCarro nome="Creta" arquivo={hyundai2} pre??o="95.000,00"/>
            <GerarCarro nome="HB20" arquivo={hyundai3} pre??o="75.000,00"/>
          </div>
          <h3>JEEP:</h3>
          <div class="carros">
            <GerarCarro nome="Compass" arquivo={jeep1} pre??o="160.000,00"/>
            <GerarCarro nome="Renegade" arquivo={jeep2} pre??o="100.000,00"/>
            <GerarCarro nome="Commander" arquivo={jeep3} pre??o="215.000,00"/>
          </div>
          <h3>NISSAN:</h3>
          <div class="carros">
            <GerarCarro nome="Versa" arquivo={nissan1} pre??o="90.000,00"/>
            <GerarCarro nome="Leaf" arquivo={nissan2} pre??o="290.000,00"/>
            <GerarCarro nome="Kicks" arquivo={nissan3} pre??o="105.000,00"/>
          </div>
          <h3>PEUGEOT:</h3>
          <div class="carros">
            <GerarCarro nome="208" arquivo={peugeot1} pre??o="85.000,00"/>
            <GerarCarro nome="2008" arquivo={peugeot2} pre??o="85.000,00"/>
            <GerarCarro nome="3008" arquivo={peugeot3} pre??o="260.000,00"/>
          </div>
          <h3>RENAULT:</h3>
          <div class="carros">
            <GerarCarro nome="Captur" arquivo={renault1} pre??o="120.000,00"/>
            <GerarCarro nome="Duster" arquivo={renault2} pre??o="100.000,00"/>
            <GerarCarro nome="Kwid" arquivo={renault3} pre??o="50.000,00"/>
          </div>
          <h3>SUZUKI:</h3>
          <div class="carros">
            <GerarCarro nome="GSX-S750" arquivo={suzuki1} pre??o="58.000,00"/>
            <GerarCarro nome="V-Strom 650" arquivo={suzuki2} pre??o="38.000,00"/>
            <GerarCarro nome="GSX-S1000" arquivo={suzuki3} pre??o="90.000,00"/>
          </div>
          <h3>VOLKSWAGEN:</h3>
          <div class="carros">
            <GerarCarro nome="Gol" arquivo={volkswagen1} pre??o="70.000,00"/>
            <GerarCarro nome="T-Cross" arquivo={volkswagen2} pre??o="110.000,00"/>
            <GerarCarro nome="Nivus" arquivo={volkswagen3} pre??o="120.000,00"/>
          </div>
          <h3>YAMAHA:</h3>
          <div class="carros">
            <GerarCarro nome="Crosser 150" arquivo={yamaha1} pre??o="15.000,00"/>
            <GerarCarro nome="Factor 150" arquivo={yamaha2} pre??o="14.000,00"/>
            <GerarCarro nome="Fazer 150" arquivo={yamaha3} pre??o="12.000,00"/>
          </div>
        </div>
      </div>
      <div id = "rodape">
        <p id="contato">Telefone de contato: +55 21 2498-2088</p>
        <p id="contato">Hor??rio de funcionamento: 9h ??s 18h</p>
      </div>
    </div>
  );
}

export default App;