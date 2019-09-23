const leerMunicipios = (estado) => {

  switch (estado) {
    case 'Amazonas':
      return ['Alto Orinoco', 'Atabapo', 'Atures', 'Autana', 'Manapiare', 'Maroa', 'Río Negro'];
  
    case 'Anzoátegui':
      return ['Anaco', 'Aragua', 'Bolívar', 'Bruzual', 'Cajigal', 'Carvajal', 'Diego Bautista Urbaneja', 'Freites', 'Guanipa', 'Guanta', 'Independencia', 'Libertad', 'McGregor', 'Miranda', 'Monagas', 'Peñalver', 'Píritu', 'San Juan de Capistrano', 'Santa Ana', 'Simón Rodriguez', 'Sotillo'];

    case 'Apure':
      return ['Achaguas', 'Biruaca', 'Muñoz', 'Páez', 'Pedro Camejo', 'Rómulo Gallegos', 'San Fernando'];

    case 'Aragua':
      return ['Bolívar', 'Camatagua', 'Francisco Linares Alcántara', 'Girardot', 'José Ángel Lamas', 'José Félix Ribas', 'José Rafael Revenga', 'Libertador', 'Mario Briceño Iragorry', 'Ocumare de la Costa de Oro', 'San Casimiro', 'San Sebastián', 'Santiago Mariño', 'Santos Michelena', 'Sucre', 'Tovar', 'Urdaneta', 'Zamora'];
    
    case 'Barinas':
      return ['Alberto Arvelo Torrealba', 'Andrés Eloy Blanco', 'Antonio José de Sucre', 'Arismendi', 'Barinas', 'Bolívar', 'Cruz Paredes', 'Ezequiel Zamora', 'Obispos', 'Pedraza', 'Rojas', 'Sosa'];
    
    case 'Bolívar':
      return ['Caroní', 'Cedeño', 'El Callao', 'Gran Sabana', 'Heres', 'Piar', 'Raúl Leoni', 'Roscio', 'Sifontes', 'Sucre', 'Padre Pedro Chen'];

    case 'Carabobo':
      return ['Bejuma', 'Carlos Arvelo', 'Diego Ibarra', 'Guacara', 'Juan José Mora', 'Libertador', 'Los Guayos', 'Miranda', 'Montalbán', 'Naguanagua', 'Puerto Cabello', 'San Diego', 'San Joaquín', 'Valencia']; 

    case 'Cojedes':
      return ['Anzoátegui', 'Pao de San Juan Bautista', 'Tinaquillo', 'Girardot', 'Lima Blanco', 'Ricaurte', 'Rómulo Gallegos', 'Ezequiel Zamora', 'Tinaco'];

    case 'Delta Amacuro':
      return ['Antonio Díaz', 'Casacoima', 'Pedernales', 'Tucupita'];

    case 'Falcón':
      return ['Acosta', 'Bolívar', 'Buchivacoa', 'Cacique Manaure', 'Carirubana', 'Colina', 'Dabajuro', 'Democracia', 'Falcón', 'Federación', 'Jacura', 'Los Taques', 'Mauroa', 'Miranda', 'Monseñor Iturriza', 'Palmasola', 'Petit', 'Píritu', 'San Francisco', 'Silva', 'Sucre', 'Tocópero', 'Unión', 'Urumaco', 'Zamora'];

    case 'Distrito Capital':
      return ['Libertador'];

    case 'Guárico':
      return ['Chaguaramas', 'Camaguán', 'El Socorro', 'Francisco de Miranda', 'José Félix Ribas', 'José Tadeo Monagas', 'Juan Germán Roscio', 'Julián Mellado', 'Las Mercedes', 'Leonardo Infante', 'Pedro Zaraza', 'Ortíz', 'San Gerónimo de Guayabal', 'San José de Guaribe', 'Santa María de Ipire'];

    case 'Lara':
      return ['Andrés Eloy Blanco', 'Crespo', 'Iribarren', 'Jiménez', 'Morán', 'Palavecino', 'Simón Planas', 'Torres', 'Urdaneta'];

    case 'Mérida':
      return ['Alberto Adriani', 'Andrés Bello', 'Antonio Pinto Salinas', 'Aricagua', 'Arzobispo Chacón', 'Campo Elías', 'Caracciolo Parra Olmedo', 'Cardenal Quintero', 'Guaraque', 'Julio César Salas', 'Justo Briceño', 'Libertador', 'Miranda', 'Obispo Ramos de Lora', 'Padre Norega', 'Pueblo Llano', 'Rangel', 'Rivas Dávila', 'Santos Marquina', 'Sucre', 'Tovar', 'Tulio Febres Cordero', 'Zea'];
    
    case 'Miranda':
      return ['Acevedo', 'Andrés Bello', 'Baruta', 'Brión', 'Buroz', 'Carrizal', 'Chacao', 'Cristóbal Rojas', 'El Hatillo', 'Guaicaipuro', 'Independencia', 'Lander', 'Los Salias', 'Páez', 'Paz Castillo', 'Pedro Gual', 'Plaza', 'Simón Bolívar', 'Sucre', 'Urdaneta', 'Zamora'];

    case 'Monagas':
      return ['Acosta', 'Aguasay', 'Bolívar', 'Caripe', 'Cedeño', 'Ezequiel Zamora', 'Libertador', 'Maturín', 'Piar', 'Punceres', 'Santa Bárbara', 'Sotillo', 'Uracoa'];

    case 'Nueva Esparta':
      return ['Antolín del Campo', 'Arismendi', 'Díaz', 'García', 'Gómez', 'Maneiro', ' Marcano', 'Mariño', 'Península de Macanao', 'Tubores', 'Villalba'];

    case 'Portuguesa':
      return ['Araure', 'Agua Blanca', 'Esteller', 'Guanare', 'Guanarito', 'Monseñor José Vicente de Unda', 'Ospino', 'Páez', 'Papelón', 'San Genaro de Boconoíto', 'San Rafael de Onoto', 'Santa Rosalía', 'Sucre', 'Turén'];

    case 'Sucre':
      return ['Andrés Eloy Blanco', 'Andrés Mata', 'Arismendi', 'Benítez', 'Bermúdez', 'Bolívar', 'Cajigal', 'Cruz Salmerón Acosta', 'Libertador', 'Mariño', 'Mejía', 'Montes', 'Ribero', 'Sucre', 'Valdez'];
    
    case 'Tachira':
      return ['Andrés Bello', 'Antonio Rómulo Costa', 'Ayacucho', 'Bolívar', 'Cárdenas', 'Córdoba', 'Fernández Feo', 'Francisco de Miranda', 'García de Hevia', 'Guásimos', 'Independencia', 'Jáuregui', 'José María Vargas', 'Junín', 'Libertad', 'Libertador', 'Lobatera', 'Michelena', 'Panamericano', 'Pedro María Ureña', 'Rafael Urdaneta', 'Samuel Darío Maldonado', 'San Cristóbal', 'Seboruco', 'Simón Rodríguez', 'Sucre', 'Torbes', 'Uribante', 'San Judas Tadeo'];

    case 'Trujillo':
      return ['Andrés Bello', 'Boconó', 'Bolívar', 'Candelaria', 'Carache', 'Escuque', 'José Felipe Márquez Cañizalez', 'Juan Vicente Campos Elías', 'La Ceiba', 'Miranda', 'Monte Carmelo', 'Motatán', 'Pampán', 'Pampanito', 'Rafael Rangel', 'San Rafael de Carvajal', 'Sucre', 'Trujillo', 'Urdaneta', 'Valera'];
    
    case 'Vargas':
      return ['Vargas'];
    
    case 'Yaracuy':
      return ['Arístides Bastidas', 'Bolívar', 'Bruzual', 'Cocorote', 'Independencia', 'José Antonio Páez', 'La Trinidad', 'Manuel Monge', 'Nirgua', 'Peña', 'San Felipe', 'Sucre', 'Urachiche', 'Veroes'];

    case 'Zulia':
      return ['Almirante Padilla', 'Baralt', 'Cabimas', 'Catatumbo', 'Colón', 'Francisco Javier Pulgar', 'Jesús Enrique Losada', 'Jesús María Semprún', 'La Cañada de Urdaneta', 'Lagunillas', 'Machiques de Perijá', 'Mara', 'Maracaibo', 'Miranda', 'Páez', 'Rosario de Perijá', 'San Francisco', 'Santa Rita', 'Simón Bolívar', 'Sucre', 'Valmore Rodríguez'];
      
    default:
      break;
  }
}

export default leerMunicipios;