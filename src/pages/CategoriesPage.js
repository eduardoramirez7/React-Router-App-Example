/* Componente con parametro tipo query, para traer los datos de las tablas o colecciones, agregar el
hook useLocation */
import { useLocation, useHistory } from 'react-router-dom';

export default function CategoriesPage() {
    const location = useLocation();
    const history = useHistory();

    /* para acceder a cada uno de los valores del query skip o limit.
    para obtener cada uno de los valores utilizamos el elemento get propio de URLSearchParams.
    Si el usuario no indica el parametro se debe colocar un valor por defecto, esto agregando || valor por defecto*/
    const query = new URLSearchParams(location.search);

    
    /* const skip = query.get('skip') || 0;
    const limit = query.get('limit') || 15; */
    const skip = parseInt(query.get('skip')) || 0;
    const limit = parseInt(query.get('limit')) || 15;


    /* funcion flecha para el boton next 
    Para setear o actualizar la query se utiliza set(atributo a actulizar, nuevo parametro)
    y actualizar la url usando el hook historyPush -> importar useHistory (permite navegar entre distintas rutas)*/
    const handleNext = () => {
        query.set("skip", skip + limit);
        //query.set("limit", 200)  con el skip es suficiente, se agrega el limit al set("skip", skip+limit)
        history.push({search: query.toString()}); //para mostrar los registros segun la cantidad por paginacion
    }

    return (
        <div>
            <h1>CategoriesPage</h1>
            <h1>skip: {skip}</h1>
            <h1>limit: {limit}</h1>

            {/* Para la paginacion se agrega un boton para mostrar los siguientes elementos y siga sincronizado con los
            parametros de la query para esto agregar handle..
            */}
            <button onClick={handleNext}>Next</button>
        </div>
    )
}
