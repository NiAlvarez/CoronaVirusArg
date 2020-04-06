import React, {Component} from 'react'
import './recomendacionesPage.styles.scss'
import Header from './header.component'
import distancia from '../assets/distancia.png'
import alergias from '../assets/alergias.png'
import flecha from '../assets/flecha.png'
import lavadoManos from '../assets/lavado.png'

class RecomendacionesPage extends Component {
render() {
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <Header/>
                    </div>
                 </div>
            </div>
           <div className="container">
               <div className="row">
                   <div className="col-12">
                       <h1>Recomendaciones</h1>
                       <div className="logoDistancia">
                           <img src={distancia} alt=""/>
                       </div>
                   </div>
               </div>
           </div>
           <div className="container">
               <div className="row">
                   <div className="col-12">
                       <h4>-Evita el contacto cercano con personas que tengan sintomas de gripe Si tenes tos y fiebre, evita el contacto estrecho y busca atencion medica tempranamente. </h4>
                   </div>
               </div>
           </div>
           <div className="container">
               <div className="row">
                   <div className="col-12">
                       <div className="alergiasLogo">
                           <img src={alergias} alt=""/>
                       </div>
                   </div>
               </div>
           </div>
           <div className="container">
               <div className="row">
                   <div className="col-12">
                   <h4>-Al toser y/o estornudar, cubri tu boca y nariz con la cara interna del codo o un pañuelo desechable (desechar inmediatamente)</h4>
                   </div>
               </div>
           </div>
           <div className="container">
               <div className="row">
                   <div className="col-12">
                   <h4>-Evita tocarte los ojos, la nariz o la boca con las manos sin lavar</h4>
                   </div>
               </div>
           </div>
           <div className="container">
               <div className="row">
                   <div className="col-12">
                       <div className="flechaLogo">
                           <img src={flecha} alt=""/>
                       </div>
                   </div>
               </div>
           </div>
           <div className="container">
               <div className="row">
                   <div className="col-12">
                       <div className="lavadoDeManosImagen">
                           <img src={lavadoManos} alt=""/>
                       </div>
                   </div>
               </div>
           </div>
           <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="advertencia">
                                <h1>PRECAUCION</h1>
                                <h3>RECORDA LLAMAR ANTES AL 0800-222-1002 ANTES DE ACUDIR A UN CENTRO DE SALUD PARA PREVENIR MAS CONTAGIOS</h3>
                            </div>
                            
                        </div>
                    </div>
                </div>
</React.Fragment>
    );
}
}

export default RecomendacionesPage