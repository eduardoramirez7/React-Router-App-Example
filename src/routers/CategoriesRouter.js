import { NavLink, Redirect, Route, Switch, useRouteMatch } from "react-router-dom"
import CategoriesPage from "../pages/CategoriesPage"
import PrivateRoute from "./PrivateRoute"

export default function CategoriesRouter() {

    /* Hook que permite construir la ruta con la url anterior */
    const {url} = useRouteMatch();
    
    return (
        /* Crear submenu */
        <div>
            <ul>
                <li>
                    <NavLink exact to={`${url}`} activeClassName="active">All</NavLink>
                </li>
                <li>
                    <NavLink to={`${url}/terror`} activeClassName="active">Terror</NavLink>
                </li>
                <li>
                    <NavLink to={`${url}/comedy`} activeClassName="active">Comedy</NavLink>
                </li>
                <li>
                    <NavLink to={`${url}/action`} activeClassName="active">Action</NavLink>
                </li>
            </ul>
            {/* Envuelve todas las rutas relacionadas a categorias y van hacer rutas privadas en los hijos */}
            <Switch>
                <Route exact path="/categories" component={CategoriesPage} />
                <PrivateRoute exact path="/categories/terror" component={()=> <h1>Category Terror</h1>}/>
                <PrivateRoute exact path="/categories/comedy" component={()=> <h1>Category Comedy</h1>}/>
                <PrivateRoute exact path="/categories/action" component={()=> <h1>Category Action</h1>}/>
                <Route path="*">
                    <Redirect to="/404" />
                </Route>
            </Switch >
        </div>

    )
}
