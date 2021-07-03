import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import NavBar from '../components/Navbar';
import ProfilePage from '../pages/ProfilePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import DashboardPage from '../pages/DashboardPage';
import PaymentsPage from '../pages/PaymentsPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import CategoriesRouter from './CategoriesRouter';

//este router sera el encargado de renderizar un componente de una pagina u otra
//de acuerdo a la URL que solicita el usuario
//dentro de Route se crean las rutas de la aplicacion
//route renderiza la ruta que se le pasa
//se envuelve en el componente switch para evitar que se accedan a todas las rutas (mostrar una sola vista)
//las rutas deben llevar un orden, del mas especifico al mas general. (la ruta home al final)
//para crear una pagina de error 404, hacerlo al final de las rutas

// *** crear componentes para cada pagina de la aplicacion
//crear carpeta "pages"

//crear menu de navegacion entre rutas (NavBar) -> crear carpeta components

/* CREAR RUTAS ANIDADOS (HIJOS): rutas similares pero que tienen contenido diferente, 
categoria/terro ... categoria/comedia ....
organizarlo en un menu de navegacion solo para esas rutas y envolverlos en un router independientes
para esto se crea una funcion tradicional al final, sino una funcion flecha pero al inicio */


export default function AppRouter() { //este componente debe ser cargado en App.js

    return (
        <div>
            <Router>
                {/* Mostrar el navbar en todas las rutas */}
                <NavBar />
                {/* El switch controla la renderizacion */}
                <Switch>
                    {/* Importamos los componentes para renderizarlos */}
                    <Route exact path="/about" component={AboutPage} />
                    <Route exact path="/contact" component={ContactPage} />
                    <Route exact path="/" component={HomePage} />
                    {/* Crear una ruta con parametros :username captura el parametro */}
                    <Route exact path="/profile/:username" component={ProfilePage} />
                    {/* Crear una ruta con parametros tipo query :username captura el parametro 
                    dentro del http://localhost:3000/categories?  <- agregar ? tab=0 o skip=0&limit=10 traeria los 
                    primeros 10 elementos, para no traer todos los elementos de las tablas, colecciones etc.
                    esto nos lleva a un estado exacto de una aplicacion*/}
                    <Route path="/categories" component={CategoriesRouter} />

                    <PublicRoute exact path="/login" component={LoginPage} />
                    <PublicRoute exact path="/register" component={RegisterPage} />

                    {/* rutas privadas, solo acceden cuando el usuario esta autenticado, crear PrivateRoute (dentro de
                        carpeta routers ) */}
                    <PrivateRoute exact path="/dashboard" component={DashboardPage} />
                    <PrivateRoute exact path="/payments" component={PaymentsPage} />

                    <Route path="/404" component={NotFoundPage} />
                    <Route path="*">
                        <Redirect to="/404" />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
