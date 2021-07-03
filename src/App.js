//importar los componentes
import AppRouter from './routers/AppRouter'
import AuthProvider from './auth/AuthProvider'

function App() {
  //en el div se van a cargar los componentes
  return (
    <div>
      <AuthProvider> {/* Para consumirlo se debe importar */}
        <AppRouter />
      </AuthProvider>
    </div>
  );
}

export default App;
