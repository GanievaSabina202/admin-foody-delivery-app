import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { AppProvider } from './app/AppProvider'
import Category from './pages/category'
import Dashboard from './pages/Dashboard'
import Login from './pages/login'
import Offers from './pages/offers'
import Orders from './pages/orders'
import Products from './pages/products'
import Restaurants from './pages/Restuarants'

const App = () => {
  return (
    <AppProvider>
      <AnimatePresence>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/panel" component={Dashboard} />
          <Route path="/panel/dashboard" component={Dashboard} />
          <Route path="/panel/products" component={Products} />
          <Route path="/panel/category" component={Category} />
          <Route path="/panel/offers" component={Offers} />
          <Route path="/panel/restaurants" component={Restaurants} />
          <Route path="/panel/orders" component={Orders} />

          {/* <Route  path="/panel/restaurants" component={Dashboard} />
        <Route  path="/panel/orders" component={Dashboard} />
        <Route  path="/panel/offers" component={Dashboard} /> */}
          <Route path="/login" component={Login} />
        </Switch>
      </AnimatePresence>
    </AppProvider>
  )
}

export default App