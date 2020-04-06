import React, {Component} from 'react'
import './homepage.styles.scss'
import Header from './header.component'
import Faq from "./faq.component.jsx"
import Recomendaciones from "./recomendaciones.component.jsx"
import Centros from "./centrosinmediatos.component.jsx"
import Autoevaluacion from "./autoevaluacion.component.jsx"
import Seguimiento from "./seguimiento.component.jsx"
import telHospital from '../assets/tel_hospital.png'
import telAlarma from '../assets/tel_alarma.png'
import mundo from '../assets/mundo.png'
import sordo from '../assets/sordo.png'



class Homepage extends Component {
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
                 <div className="col-md-6">
                <span>
                     <h1># <br/> SOMOS <br/> RESPONSABLES</h1>
                </span>        
    
                </div>   
                </div>
            </div>

<div className="container">
    <div className="row">
      <div className="col-4">
        <Faq/>
        <h1>Preguntas Frecuentes</h1>
        </div>
        <div className="col-4">
            <Recomendaciones/>
            <h2>Consejos</h2>
        </div>
        <div className="col-4">
          <Centros/>
          <h2>Centros Inmediatos</h2>
        </div>
</div>
</div>
<div className="container">
    <div className="row">
     <div className="col-6">
        <Autoevaluacion/>
        <h1>Autoevaluacion</h1>
        </div> 
        <div className="col-6">
            <Seguimiento/>
            <h2>Seguimiento de <br/> riesgo</h2>
            </div>  
    </div>
</div>
<br/>
<br/>
<br/>
<br/>
<br/>
<div className="container-fluid">
    <div className="row">
        <div className="col-4">
        <div className="logosHome">
            <img src={telHospital} alt="" width='250' height='250'/>
        </div>        
        </div>
        <div className="col-8">
            <div className="telInformativos">
            <h1>0800-222-1002</h1>
            <h2>0800 Salud responde, opcion 1. Telefono gratuito para llamados desde todo el pais</h2> 
            </div>
        
        </div>
    </div>
    <div className="row">
        <div className="col-4">
        <div className="logosHome">
            <img src={telAlarma} alt="" width='250' height='250'/>
        </div>        
        </div>
        <div className="col-8">
            <div className="telInformativos">
            <h1>134</h1>
            <h2>Para denunciar a quienes violan la cuarentena, comunicate con el Ministerio de Seguridad al numero gratuito 134</h2> 
            </div>
        
        </div>
    </div>
    <div className="row">
        <div className="col-4">
        <div className="logosHome">
            <img src={mundo} alt="" width='200' height='200'/>
        </div>        
        </div>
        <div className="col-8">
            <div className="telInformativos">
            <h1>+54-911-6271-7291</h1>
            <h2>Asistencia a los argentinos en el exterior</h2> 
            </div>
        
        </div>
    </div>
    <div className="row">
        <div className="col-4">
        <div className="logosHome">
            <img src={sordo} alt="" width='250' height='250'/>
        </div>        
        </div>
        <div className="col-8">
            <div className="telInformativos">
            <h1>11-5728-4011</h1>
            <h2>Videollamadas para personas sordas e hipoacusicas. Disponible de Lunes a Viernes de 10 a 15hs</h2> 
            </div>        
        </div>
    </div>
</div>

</React.Fragment>
    );
}
}

export default Homepage