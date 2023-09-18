import React, { Suspense, useEffect } from "react"
import { Route, Routes, redirect } from "react-router-dom"
import { routes } from "./routes/routes"
import Loader from "./utils/helpers/Spinner"
import Home from "./pages/Home"
import Layouts from "./components/layouts/Layouts"
import Login from "./services/auth/Login"

function App() {
  const authUser = localStorage.getItem("authToken")

  useEffect(() => {
    redirect("/login");

  }, [!authUser])

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={'/login'} element={<Login />} />
        <Route path='/' element={<Layouts />}>
          <Route index={true} element={authUser && <Home />} />
          {routes.map(({ path, Component, _id }) =>
            <Route key={_id} path={path} element={<Component />} />
          )}
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
