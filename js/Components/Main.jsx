import React from 'react'
import config from '../config'
import TableRows from './Libraries/TableRows.jsx'

class Main extends React.Component {

  render() {
    return (
      <div>
        <div className="pull-right title-main-pos">
          <h1> WITAJ DROGI UŻYTKOWNIKU :) </h1>
          <h3> KWIACIARNIA <strong>PRZEPIĘKNE KWIATY</strong> przedstawia swoją ofertę</h3>
          <h4>Przejdź do działu <strong>Produkty</strong> i znajdź swój wymarzony bukiet</h4>
        </div>

        <div className="maxi-photo-main">
        <img src="http://www.rosa.freewebweb.com/photo/0/8982/1/normal/168242.jpg"
             alt="bukiet kwiatów"
             title="bukiet powitalnych kwiatów"/>
        </div>
        <div className="mini-photo-main">
          <ul>
            <li> <img src="https://pk1.pocztakwiatowa.pl/media/catalog/product/cache/1/image/550x550/602f0fa2c1f0d1ba5e241f914e856ff9/9/0/9002_kwiaty_dream_8003_001_2.jpg" width="100px" alt="Dream" title="Dream" /> </li>
            <li> <img src="https://pk1.pocztakwiatowa.pl/media/catalog/product/cache/1/image/550x550/602f0fa2c1f0d1ba5e241f914e856ff9/1/2/1212_1.jpg" width="100px" alt="Erosa" title="Erosa" /> </li>
            <li> <img src="https://pk1.pocztakwiatowa.pl/media/catalog/product/cache/1/image/550x550/602f0fa2c1f0d1ba5e241f914e856ff9/2/5/25012_3.jpg" width="100px" alt="Impresja" title="Impresja" /> </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Main
