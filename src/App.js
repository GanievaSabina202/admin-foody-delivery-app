import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { AppProvider } from './app/AppProvider'
import Dashboard from './pages/Dashboard'
import Login from './pages/login'


const App = () => {
  return (
    <AppProvider>

      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/panel/dashboard" component={Dashboard} />
        <Route path="/panel" component={Dashboard} />
        {/* <Route  path="/panel/restaurants" component={Dashboard} />
        <Route  path="/panel/orders" component={Dashboard} />
        <Route  path="/panel/offers" component={Dashboard} /> */}
        <Route path="/login" component={Login} />
      </Switch>
    </AppProvider>
  )
}

export default App