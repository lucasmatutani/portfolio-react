import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import {useState} from 'react'

function App() {

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovocolaborador = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario aoCadastrarcolaborador={colaborador => aoNovocolaborador(colaborador)}/>
    </div>
  );
}

export default App;
