import React, { useState } from 'react';
import Formulario from './Component/Formulario';
import Tarjeta from './Component/Tarjeta/Tarjeta';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const [personas, setPersonas] = useState([])
  const [persona, setPersona] = useState({
    nombre: "",
    ocupacion: "",
    edad: "",
    dni: ""
  })

  return (
    <React.Fragment>
      <Container>
        <h3 className="text-primary">Hola Main</h3>
        <Row>
          <Col className="mb-4" xs={12}>
            <Formulario
              setPersona={setPersona}
              persona={persona}
              personas={personas}
              setPersonas={setPersonas}
            />
          </Col>
          <Col>
            {/* si es un solo item no es necesario los parentesis */}
            <div className="d-flex flex-wrap">

              {personas.map((item) => {
                return (
                  <Tarjeta key={item.dni} persona={item} />
                )
              })}
            </div>
            {/* Cada vez que iteramos, sea con map o lo que sea debe llevar una key y se debe colocar algun valor que no se repita como un id o un DNI*/}

          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}


export default App;
