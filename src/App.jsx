import React, { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { routes } from "./routes/routes"
import Loader from "./utils/helpers/Spinner"
import Layouts from "./components/layouts/Layouts"
import Login from "./services/auth/Login"
import Index from "./pages/home/Index"

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={'/auth/login'} element={<Login />} />
        <Route path='/' element={<Layouts />}>
          <Route index={true} element={<Index />} />
          {routes.map(({ path, Component, _id }) =>
            <Route key={_id} path={path} element={<Component />} />
          )}
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
