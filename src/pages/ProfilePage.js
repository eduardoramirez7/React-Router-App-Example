//Importamos el hook useParams para capturar los parametros pasados en la URL
import { useParams } from 'react-router-dom';

export default function ProfilePage() {

    /* Un hook se puede ejecutar unicamente dentro de un componente o dentro de otro hook 
    const {objeto desestructurado} devuelve un objeto con los distintos parametros que pueda tener la URL*/
    const {username} = useParams();
    return (
        <div>
            <h1>ProfilePage: {username}</h1>
        </div>
    )
}
