import React, { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { routes } from "./routes/routes"
import Loader from "./utils/helpers/Spinner"

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>

        {
          routes.map(({ path, Component, _id }) =>
            <Route key={_id} path={path} element={<Component />} />
          )
        }
      </Routes>
    </Suspense>
  )
}

export default App
