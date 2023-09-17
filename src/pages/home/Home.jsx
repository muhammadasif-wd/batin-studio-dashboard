import React, { Suspense, lazy } from "react";
import Loader from "../../utils/helpers/Spinner";
const Layouts = lazy(() => import("../../components/layouts/Layouts"));


export default function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <div>
        <Layouts />
      </div>
    </Suspense>
  )
}
