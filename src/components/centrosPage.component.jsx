import React, {Component} from 'react'
import './CentrosPage.styles.scss'

class CentrosPage extends Component {
render() {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Centros de salud cercanos a su hogar</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="mapaAPI">
                            <script async defer
                            src='https://maps.googleapis.com/maps/api/js?key=AIzaSyDOrFVwxEFd76NCw2RytoRhqKJFcyLHcf0&callback=initMAP'></script>
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
)
            }
            }

export default CentrosPage