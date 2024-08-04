import imagen1 from '../icons/imagen1.jpg';
import imagen2 from '../icons/imagen2.jpg';
import CALUSA from '../images/CALUSA.jpeg'
import CAPULIES1 from '../images/CAPULIES 01.jpg'
import CAPULIES2 from '../images/CAPULIES 02.jpeg'
import VULACANO from '../images/VULCANO  01.jpeg'
import VULACANO2 from '../images/VULCANO 02.jpeg'
import CHAMA from '../images/CHAMA.jpeg'
import CUPIDO from '../images/CUPIDO.jpeg'
import GOLF1 from '../images/GOLF DE LA MOLINA.jpeg'
import GOLF2 from '../images/GOLF DE LA MOLINA 02.jpeg'
import PLUTON1 from '../images/PLUTON 01.png'
import PLUTON2 from '../images/PLUTON 02.png'
import SAUCO1 from '../images/SAUCO 01.jpg'
import SAUCO2 from '../images/SAUCO 02.jpg'
import SAUCO3 from '../images/SAUCO 03.jpg'



const DatosProyecto = [
    {
      title: 'EDIFICIO CHAMA',
      imageUrl: imagen1, // Reemplaza con la ruta correcta de la imagen
      description: 'Vivienda Multifamiliar\nAREA: 800.00 m2\nSANTIAGO DE SURCO\nEL PROYECTO SE COMPONE DE UN EDIFICIO BIFAMILIAR DE 4 PISOS.',
      extraInfo: 'EL PROYECTO SE COMPONE DE UN EDIFICIO BIFAMILIAR DE 4 PISOS.',
      year: '2019',
      status: 'ejecutadas'
    },
    {
      title: 'CASA EN LA QUEBRADA',
      imageUrl: imagen2, // Reemplaza con la ruta correcta de la imagen
      description: 'Vivienda Unifamiliar\nAREA: 280.00 m2\nPLAYA LA QUEBRADA\nEL PROYECTO SE COMPONE EN UNA CASA DE PLAYA DISTRIBUIDA EN 2 PLANTAS CON VISTAS AL MAR.',
      extraInfo: 'EL PROYECTO SE COMPONE EN UNA CASA DE PLAYA DISTRIBUIDA EN 2 PLANTAS CON VISTAS AL MAR.',
      year: '2020',
      status: 'ejecutadas'
    },
    {
      title: 'CASA PUNTA HERMOSA',
      imageUrl: CALUSA, // Reemplaza con la ruta correcta de la imagen
      description: 'Vivienda Unifamiliar\nAREA: 310.00 m2\nPLAYA PUNTA HERMOSA\nEL PROYECTO SE COMPONE EN UNA CASA DE PLAYA DISTRIBUIDA EN 3 PLANTAS.',
      extraInfo: 'EL PROYECTO SE COMPONE EN UNA CASA DE PLAYA DISTRIBUIDA EN 3 PLANTAS.',
      year: '2021',
      status: 'ejecutadas'
    },
    {
      title: 'REDISENCIAL CORDOVA',
      imageUrl: CAPULIES1, // Reemplaza con la ruta correcta de la imagen
      description: 'Vivienda Multifamiliar\nAREA: 2250.00 m2\nLINCE\nEL PROYECTO MULTIFAMILIAR DE 8 PISOS CON SOTANO PARA EL DISTRITO DE LINCE.',
      extraInfo: 'EL PROYECTO MULTIFAMILIAR DE 8 PISOS CON SOTANO PARA EL DISTRITO DE LINCE.',
      year: '2018',
      status: 'ejecutadas'
    },
    {
      title: 'RESIDENCIAL CALUSA',
      imageUrl: CAPULIES2, // Reemplaza con la ruta correcta de la imagen
      description: 'Vivienda Multifamiliar\nAREA: 900.00 m2\nATE\nEL PROYECTO SE COMPONE DE UN EDIFICIO MULTIFAMILIAR DE 3 PISOS CON AZOTEA.',
      extraInfo: 'EL PROYECTO SE COMPONE DE UN EDIFICIO MULTIFAMILIAR DE 3 PISOS CON AZOTEA.',
      year: '2019',
      status: 'ejecutadas'
    },
    {
      title: 'CASA CERRO',
      imageUrl: VULACANO, // Reemplaza con la ruta correcta de la imagen
      description: 'Vivienda Unifamiliar\nAREA: 450.00 m2\nPLAYA CERRO AZUL\nEL PROYECTO SE COMPONE EN UNA CASA DE PLAYA DISTRIBUIDA EN 2 PLANTAS CON VISTAS AL MAR.',
      extraInfo: 'EL PROYECTO SE COMPONE EN UNA CASA DE PLAYA DISTRIBUIDA EN 2 PLANTAS CON VISTAS AL MAR.',
      year: '2020',
      status: 'ejecutadas'
    },
    {
      title: 'COND. GOLF DE LA MOLINA',
      imageUrl: VULACANO2, // Reemplaza con la ruta correcta de la imagen
      description: 'Vivienda Multifamiliar\nAREA: 1464.68 m2\nLA MOLINA\nEL PROYECTO SE COMPONE UNA QUINTA CON CASAS DE 2 PISOS Y UN SOTANO CONJUNTO.',
      extraInfo: 'EL PROYECTO SE COMPONE UNA QUINTA CON CASAS DE 2 PISOS Y UN SOTANO CONJUNTO.',
      year: '2018',
      status: 'ejecutadas'
    },
    {
      title: 'CASA BLANCA',
      imageUrl: CHAMA, // Reemplaza con la ruta correcta de la imagen
      description: 'Vivienda Unifamiliar\nAREA: 450.00 m2\nPLAYA MINKAMAR\nEL PROYECTO SE COMPONE EN UNA CASA DE PLAYA DISTRIBUIDA EN 2 PLANTAS.',
      extraInfo: 'EL PROYECTO SE COMPONE EN UNA CASA DE PLAYA DISTRIBUIDA EN 2 PLANTAS.',
      year: '2019',
      status: 'ejecutadas'
    },
    {
      title: 'RESIDENCIAL LOS CAPULIES',
      imageUrl: 'path/to/imagen9.jpg', // Reemplaza con la ruta correcta de la imagen
      description: 'Vivienda Multifamiliar\nAREA: 370.92 m2\nATE\nEL PROYECTO SE COMPONE DE UN MULTIFAMILIAR DE 4 PISOS MAS AZOTEA.',
      extraInfo: 'EL PROYECTO SE COMPONE DE UN MULTIFAMILIAR DE 4 PISOS MAS AZOTEA.',
      year: '2020',
      status: 'ejecutadas'
    },
    {
      title: 'CASA DEL SOL',
      imageUrl: 'path/to/imagen10.jpg', // Reemplaza con la ruta correcta de la imagen
      description: 'Vivienda Unifamiliar\nAREA: 300.00 m2\nPLAYA ISLA DEL SOL\nEL PROYECTO SE COMPONE EN UNA CASA DE PLAYA DISTRIBUIDA EN 2 PLANTAS CON VISTAS AL MAR.',
      extraInfo: 'EL PROYECTO SE COMPONE EN UNA CASA DE PLAYA DISTRIBUIDA EN 2 PLANTAS CON VISTAS AL MAR.',
      year: '2021',
      status: 'ejecutadas'
    },
    {
      title: 'RESIDENCIAL LOS SAUCOS',
      imageUrl: 'path/to/imagen11.jpg', // Reemplaza con la ruta correcta de la imagen
      description: 'Vivienda Multifamiliar\nAREA: 1784.59 m2\nATE\nEL PROYECTO SE COMPONE DE UN EDIFICIO MULTIFAMILIAR DE 7 PISOS, AZOTEA Y SEMISOTANO.',
      extraInfo: 'EL PROYECTO SE COMPONE DE UN EDIFICIO MULTIFAMILIAR DE 7 PISOS, AZOTEA Y SEMISOTANO.',
      year: '2020',
      status: 'ejecutadas'
    },
    {
      title: 'RESIDENCIAL CUPIDO',
      imageUrl: 'path/to/imagen12.jpg', // Reemplaza con la ruta correcta de la imagen
      description: 'Vivienda Multifamiliar\nAREA: 1364.69 m2\nATE\nEL PROYECTO SE COMPONE DE UN EDIFICIO MULTIFAMILIAR DE 6 PISOS CON SEMISOTANO.',
      extraInfo: 'EL PROYECTO SE COMPONE DE UN EDIFICIO MULTIFAMILIAR DE 6 PISOS CON SEMISOTANO.',
      year: '2019',
      status: 'ejecutadas'
    },
    {
      title: 'CASA ASIA',
      imageUrl: 'path/to/imagen13.jpg', // Reemplaza con la ruta correcta de la imagen
      description: 'Vivienda Unifamiliar\nAREA: 225.00 m2\nPLAYA DE ASIA\nEL PROYECTO SE COMPONE EN UNA CASA DE PLAYA DISTRIBUIDA EN 3 PLANTAS.',
      extraInfo: 'EL PROYECTO SE COMPONE EN UNA CASA DE PLAYA DISTRIBUIDA EN 3 PLANTAS.',
      year: '2021',
      status: 'ejecutadas'
    },
    {
      title: 'RESIDENCIAL PLUTON',
      imageUrl: 'path/to/imagen14.jpg', // Reemplaza con la ruta correcta de la imagen
      description: 'Vivienda Multifamiliar\nAREA: 800.00 m2\nATE\nEL PROYECTO SE COMPONE EN UN EDIFICIO MULTIFAMILIAR DE 5 PISOS CON AZOTEA Y SEMISOTANO.',
      extraInfo: 'EL PROYECTO SE COMPONE EN UN EDIFICIO MULTIFAMILIAR DE 5 PISOS CON AZOTEA Y SEMISOTANO.',
      year: '2018',
      status: 'ejecutadas'
    },
    {
      title: 'EDIFICIO VULCANO',
      imageUrl: 'path/to/imagen15.jpg', // Reemplaza con la ruta correcta de la imagen
      description: 'Oficina - Industria\nAREA: 1292.59 m2\nATE\nEL PROYECTO FUE DESARROLLADO A RAIZ DE UNA AMPLIACION Y REMODELACION DE OFICINAS E INDUSTRIA.',
      extraInfo: 'EL PROYECTO FUE DESARROLLADO A RAIZ DE UNA AMPLIACION Y REMODELACION DE OFICINAS E INDUSTRIA.',
      year: '2017',
      status: 'ejecutadas'
    },
    {
      title: 'EDIFICIO VULCANO',
      imageUrl: imagen2, // Reemplaza con la ruta correcta de la imagen
      description: 'Oficina - Industria\nAREA: 1292.59 m2\nATE\nEL PROYECTO FUE DESARROLLADO A RAIZ DE UNA AMPLIACION Y REMODELACION DE OFICINAS E INDUSTRIA.',
      extraInfo: 'EL PROYECTO FUE DESARROLLADO A RAIZ DE UNA AMPLIACION Y REMODELACION DE OFICINAS E INDUSTRIA.',
      year: '2017',
      status: 'ejecucion'
    },
    {
      title: 'RESIDENCIAL PLUTON',
      imageUrl: imagen1, // Reemplaza con la ruta correcta de la imagen
      description: 'Vivienda Multifamiliar\nAREA: 800.00 m2\nATE\nEL PROYECTO SE COMPONE EN UN EDIFICIO MULTIFAMILIAR DE 5 PISOS CON AZOTEA Y SEMISOTANO.',
      extraInfo: 'EL PROYECTO SE COMPONE EN UN EDIFICIO MULTIFAMILIAR DE 5 PISOS CON AZOTEA Y SEMISOTANO.',
      year: '2018',
      status: 'ejecucion'
    },
    {
      title: 'RESIDENCIAL PLUTON',
      imageUrl: imagen1, // Reemplaza con la ruta correcta de la imagen
      description: 'Vivienda Multifamiliar\nAREA: 800.00 m2\nATE\nEL PROYECTO SE COMPONE EN UN EDIFICIO MULTIFAMILIAR DE 5 PISOS CON AZOTEA Y SEMISOTANO.',
      extraInfo: 'EL PROYECTO SE COMPONE EN UN EDIFICIO MULTIFAMILIAR DE 5 PISOS CON AZOTEA Y SEMISOTANO.',
      year: '2018',
      status: 'ejecucion'
    },
    {
      title: 'RESIDENCIAL PLUTON',
      imageUrl: imagen1, // Reemplaza con la ruta correcta de la imagen
      description: 'Vivienda Multifamiliar\nAREA: 800.00 m2\nATE\nEL PROYECTO SE COMPONE EN UN EDIFICIO MULTIFAMILIAR DE 5 PISOS CON AZOTEA Y SEMISOTANO.',
      extraInfo: 'EL PROYECTO SE COMPONE EN UN EDIFICIO MULTIFAMILIAR DE 5 PISOS CON AZOTEA Y SEMISOTANO.',
      year: '2018',
      status: 'ejecucion'
    },
    {
      title: 'RESIDENCIAL PLUTON',
      imageUrl: imagen1, // Reemplaza con la ruta correcta de la imagen
      description: 'Vivienda Multifamiliar\nAREA: 800.00 m2\nATE\nEL PROYECTO SE COMPONE EN UN EDIFICIO MULTIFAMILIAR DE 5 PISOS CON AZOTEA Y SEMISOTANO.',
      extraInfo: 'EL PROYECTO SE COMPONE EN UN EDIFICIO MULTIFAMILIAR DE 5 PISOS CON AZOTEA Y SEMISOTANO.',
      year: '2018',
      status: 'ejecucion'
    }
  ];
  export default DatosProyecto;  