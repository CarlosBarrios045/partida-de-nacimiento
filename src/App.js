import React, { Component, Fragment } from 'react';
import './App.css';
import estados from './helpers/estados';
import leerMunicipios from './helpers/municipios';
import leerParroquias from './helpers/parroquias';

import jsPDF from 'jspdf';

// Components
import Header from './components/Header';

class App extends Component {
  state = {

    registrador: '',

    padre: '',
    cedulaPadre: '',
    edadPadre: 0,
    estadoCivilPadre: '',
    cargoPadre: '',
    estadoPadre: '',
    municipioPadre: '',
    parroquiaPadre: '',

    madre: '',
    cedulaMadre: '',
    edadMadre: '',
    estadoCivilMadre: '',
    cargoMadre: '',
    estadoMadre: '',
    municipioMadre: '',
    parroquiaMadre: '',

    niño: '',
    fecha: Date,
    estadoNiño: '',
    municipioNiño: '',
    parroquiaNiño: '',
    sitio: '',
    nombreSitio: '',

    testigo: '',
    testigodos: '',
    

    municipiosP: [],
    parroquiasP: [],

    municipiosM: [],
    parroquiasM: [],

    municipiosN: [],
    parroquiasN: []

    
  }

  // Padre
  leerEstadoPadre = e => {
    this.setState({
      municipiosP: leerMunicipios(e.target.value),
      estadoPadre: e.target.value
    });
  }

  leerMunicipioPadre = e => {
    this.setState({
      parroquiasP: leerParroquias(e.target.value, this.state.estadoPadre),
      municipioPadre: e.target.value
    });
  }

  // Madre

  leerEstadoMadre = e => {
    this.setState({
      municipiosM: leerMunicipios(e.target.value),
      estadoMadre: e.target.value
    });
  }

  leerMunicipioMadre = e => {
    this.setState({
      parroquiasM: leerParroquias(e.target.value, this.state.estadoMadre),
      municipioMadre: e.target.value
    });
  }

  // Niño

  leerEstadoNiño = e => {
    this.setState({
      municipiosN: leerMunicipios(e.target.value),
      estadoNiño: e.target.value
    });
  }

  leerMunicipioNiño = e => {
    this.setState({
      parroquiasN: leerParroquias(e.target.value, this.state.estadoNiño),
      municipioNiño: e.target.value
    });
  }

  // Datos
  leerDatos = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // Enviar Datos
  onSubmit = (e) => {
    e.preventDefault();

    // Leer datos registrador,
    const {padre, cedulaPadre, registrador, edadPadre, estadoCivilPadre, cargoPadre, municipioPadre, parroquiaPadre, madre, cedulaMadre, edadMadre, estadoCivilMadre, cargoMadre, municipioMadre, parroquiaMadre, niño, fecha, estadoNiño, municipioNiño, parroquiaNiño, sitio, nombreSitio, testigo, testigodos} = this.state;

    let nacioEn;

    if(sitio === 'clinica') {
      nacioEn = 'la Clínica';
    } else {
      nacioEn = 'el Hospital';
    }

    const fechaCreacion = new Date();

    // Hacer PDF
    const doc = new jsPDF()

    doc.setFontSize(10)
    doc.text([
      'REPUBLICA BOLIVARIANA DE VENEZUELA', 
      `ESTADO ${estadoNiño.toUpperCase()}`, 
      `MUNICIPIO ${municipioNiño.toUpperCase()}`,
      parroquiaNiño.toUpperCase(),
      'REGISTRO CIVIL'
    ], 100, 20, {align: 'center'})
    
    doc.text('PARTIDA DE NACIMIENTO', 100, 50, {align: 'center'})

    doc.text(`${registrador.toUpperCase()}. Primera Autoridad Civil de ${parroquiaNiño}, hago constar, que hoy. ${fechaCreacion.toLocaleDateString()}, me ha sido presentado en este despacho un niño por el ciudadano: ${padre}; quien dice ser su padre y expuso. Que el niño que presenta nació en ${nacioEn} ${nombreSitio} de ${municipioNiño}, el día. ${fecha.toString()}, que tiene por nombre ${niño}, hijo legitimo del presentante y de su cónyuge: ${madre}, el primero de ${edadPadre} años de edad, ${estadoCivilPadre}, ${cargoPadre}, Cedula Nº ${cedulaPadre}, de ${municipioPadre}, residenciado en ${parroquiaPadre}, la segunda de ${edadMadre}, ${estadoCivilMadre}, ${cargoMadre}, Cedula ${cedulaMadre}, de ${municipioMadre}, residenciado en ${parroquiaMadre}.- Fueron testigos presenciales de este acto los ciudadanos: ${testigo.toUpperCase()} Y ${testigodos.toUpperCase()}, mayores de edad.- Leída la presente acta a la presente y testigos manifestaron la conformidad y firman.- JEFE CIVIL (FDO) LA PRESENTE (FDO) LOS TESTIGOS (FDOS) LA SECRETARIA (FDO).`, 20, 60, {align: 'justify', maxWidth: '170'})

    doc.text([
      `${registrador.toUpperCase()}`,
      'JEFE (E) DE REGISTRO CIVIL'
    ], 100, 180, {align: 'center'})
    
    
    doc.save('a4.pdf')

  }

  render() { 
    
    return ( 
      <Fragment>
        <Header />

        <div className="container my-5">
          <h2>Genera tu partida de nacimiento</h2>
          <hr/>

          <form onSubmit={this.onSubmit}>
            <div className="row">
              <label>Nombres y apellidos del Registrador Civil:</label>
              <input type="text" className="form-control" name="registrador" onChange={this.leerDatos} required/>

              <div className="form-group mt-3 col-md-6">
                <h4>Datos del presentante</h4>

                <label>Nombres y apellidos:</label>
                <input type="text" className="form-control" name="padre" onChange={this.leerDatos} required/>

                <label className="mt-3">Número de cédula:</label>
                <input type="text" className="form-control" name="cedulaPadre" onChange={this.leerDatos} required/>

                <label className="mt-3">Edad:</label>
                <input type="number" min="0" max="100" className="form-control" onChange={this.leerDatos} name="edadPadre" required />

                <label className="mt-3">Estado civil:</label>
                <select className="form-control" name="estadoCivilPadre" onChange={this.leerDatos} required>
                  <option value="casado" selected>Casado</option>
                  <option value="soltero">Soltero</option>
                </select>

                <label className="mt-3">Cargo:</label>
                <input type="text" className="form-control" name="cargoPadre" onChange={this.leerDatos} required />

                
                <label className="mt-3">Lugar de nacimiento del presentante:</label>
                <select className="form-control" name="estadoPadre" onChange={this.leerEstadoPadre} required>
                  <option value="" disabled selected>Seleccione un Estado</option>
                  {estados.map((estado, index) => (
                      <option key={index} value={`${estado}`}>{estado}</option>
                  ))}
                </select>

                <label className="mt-3">Municipio del presentante:</label>
                <select className="form-control" name="municipioPadre" onChange={this.leerMunicipioPadre} required>
                  <option value="" disabled selected>Seleccione un Municipio</option>
                  {this.state.municipiosP ? this.state.municipiosP.map((municipio, index) => (
                      <option key={index} value={`${municipio}`}>{municipio}</option>
                  )) : null}
                </select>

                <label className="mt-3">Parroquia del presentante:</label>
                <select className="form-control" name="parroquiaPadre" onChange={this.leerDatos} required>
                  <option value="" disabled selected>Seleccione una Parroquia</option>
                  {this.state.parroquiasP ? this.state.parroquiasP.map((parroquia, index) => (
                      <option key={index} value={`${parroquia}`}>{parroquia}</option>
                  )) : null}    
                </select>
              </div>

              <div className="form-group mt-3 col-md-6">
                <h4>Datos de la madre</h4>

                <label>Nombres y apellidos:</label>
                <input type="text" className="form-control" name="madre" onChange={this.leerDatos} required />

                <label className="mt-3">Número de cédula:</label>
                <input type="text" className="form-control" name="cedulaMadre" onChange={this.leerDatos} required />

                <label className="mt-3">Edad:</label>
                <input type="number" min="0" max="100" className="form-control" name="edadMadre" onChange={this.leerDatos}  />

                <label className="mt-3">Estado civil:</label>
                <select className="form-control" name="estadoCivilMadre" onChange={this.leerDatos} required >
                  <option value="casado" selected>Casada</option>
                  <option value="soltero">Soltera</option>
                </select>

                <label className="mt-3">Cargo:</label>
                <input type="text" className="form-control" name="cargoMadre" onChange={this.leerDatos} required />

                <label className="mt-3">Lugar de nacimiento de la madre:</label>
                <select className="form-control" name="estadoMadre" onChange={this.leerEstadoMadre} required>
                  <option value="" disabled selected>Seleccione un Estado</option>
                  {estados.map((estado, index) => (
                      <option key={index} value={`${estado}`}>{estado}</option>
                  ))}
                </select>

                <label className="mt-3">Municipio de la madre:</label>
                <select className="form-control" name="municipioMadre" onChange={this.leerMunicipioMadre} required>
                  <option value="" disabled selected>Seleccione un Municipio</option>
                  {this.state.municipiosM ? this.state.municipiosM.map((municipio, index) => (
                      <option key={index} value={`${municipio}`}>{municipio}</option>
                  )) : null}
                </select>

                <label className="mt-3">Parroquia de la madre:</label>
                <select className="form-control" name="parroquiaMadre" onChange={this.leerDatos} required>
                  <option value="" disabled selected>Seleccione una Parroquia</option>
                  {this.state.parroquiasM ? this.state.parroquiasM.map((parroquia, index) => (
                      <option key={index} value={`${parroquia}`}>{parroquia}</option>
                  )) : null}    
                </select>
              </div>


              <div className="form-group mt-3 col-md-8">
                <h4>Datos del niño</h4>

                <label>Nombres del niño:</label>
                <input type="text" className="form-control" name="niño" onChange={this.leerDatos} required />

                <label className="mt-3">Fecha de nacimiento:</label>
                <input type="date" className="form-control" name="fecha" onChange={this.leerDatos} required />

                <label className="mt-3">Lugar de nacimiento del niño:</label>
                <select className="form-control" name="estadoNiño" onChange={this.leerEstadoNiño} required >
                  <option value="" disabled selected>Seleccione un Estado</option>
                  {estados.map((estado, index) => (
                      <option key={index} value={`${estado}`}>{estado}</option>
                  ))}
                </select>

                <label className="mt-3">Municipio del niño:</label>
                <select className="form-control" name="municipioNiño" onChange={this.leerMunicipioNiño} required >
                  <option value="" disabled selected>Seleccione un Municipio</option>
                  {this.state.municipiosN ? this.state.municipiosN.map((municipio, index) => (
                      <option key={index} value={`${municipio}`}>{municipio}</option>
                  )) : null}
                </select>

                <label className="mt-3">Parroquia del niño:</label>
                <select className="form-control" name="parroquiaNiño" onChange={this.leerDatos} required >
                  <option value="" disabled selected>Seleccione una Parroquia</option>
                  {this.state.parroquiasN ? this.state.parroquiasN.map((parroquia, index) => (
                      <option key={index} value={`${parroquia}`}>{parroquia}</option>
                  )) : null}    
                </select>

                <label className="mt-3">¿En qué sitio nació?</label>
                <select name="sitio" className="form-control" onChange={this.leerDatos} required >
                  <option value="hospital">Hospital</option>
                  <option value="clinica">Clínica</option>
                </select>

                <label className="mt-3">Nombre del Hospital/Clínica donde nació:</label>
                <input type="text" className="form-control" name="nombreSitio" onChange={this.leerDatos} required />
              </div>

              <div className="form-group mt-3 col-md-4">
                <h4>Datos de los testigos</h4>

                <label>Nombre del primer testigo:</label>
                <input type="text" className="form-control" name="testigo" onChange={this.leerDatos} required />

                <label>Nombre del segundo testigo:</label>
                <input type="text" className="form-control" name="testigodos" onChange={this.leerDatos} required />

                <input type="submit" className="btn btn-success mt-3" value="Crear Partida de Nacimiento"/>
              </div>
            </div>
          </form>
        </div>
    </Fragment>
    );
  }
}
 
export default App;
