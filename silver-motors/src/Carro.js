import React from 'react';

export default function GerarCarro(props) {
  return (
    <div class="carro">
      <h4>{props.nome}</h4>
      <img src={props.arquivo} alt={props.nome} width="400" height="300"/>
      <p>Preço: R$ {props.preço}</p>
    </div>
  );
}