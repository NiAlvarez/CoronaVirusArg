import React, {Component} from 'react'
import './FAQpage.styles.scss'
import Header from './header.component'
import esteto from '../assets/esteto.png'
import nofumar from '../assets/nofumar.png'

class FAQpage extends Component {
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
                        <div className="titulo">
                            <h1>¿Cuales son los sìntomas de COVID-19?</h1>
                        </div>                        
                    </div>
                </div>
                <div className="row">
                     <div className="col-6">
                        <div className="listaSintomas">
                            <li>Fiebre</li>
                            <li>Tos seca</li>
                            <li>Cansancio</li>
                            <li>Dificultad para respirar</li>
                        </div>
                    </div>               
                
                    <div className="col-6">
                        <div className="estetoLogo">
                            <img src={esteto} alt=""/>
                        </div>                        
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="titulo">
                                <h1>Como se propaga COVID-19?</h1>
                                <h3>La enfermedad puede propagarse de persona a persona a traves de las goticulas procedentes de la nariz o la boca que salen despedidas cuando una perosna infectada tose o exhala</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="titulo">
                                <h1>Quien corre riesgo de desarrollar una enfermedad grave?</h1>
                                <h3>Las personas mayores y las que padecen afecciones medicas preexistentes (como hipertension arterial, enfermedades cardiacas o diabetes) desarrolan casos graves de la enfermedad con mas frecuencia que otras.</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="titulo">
                                <h1>Hay algo que no deba hacer?</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <div className="logoNoFumar">
                                <img src={nofumar} alt=""/>
                            </div>                            
                        </div>
                        <div className="col-8">
                        <div className="listaPhoibido">
                            <li>No fumar</li>
                            <li>No llevar mascarillas a menos que usted se encuentre infectado</li>
                            <li>No automedicarse</li>
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
            </div>
        </React.Fragment>
    )
}
}

export default FAQpage