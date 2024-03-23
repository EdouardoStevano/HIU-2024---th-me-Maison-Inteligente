import { React, lazy } from "react";
import { Route, Routes } from "react-router-dom";

// Main pages importation
const Explore = lazy(() => import('presentation/pages/explore'))
const HomeSection = lazy(() => import('presentation/pages/explore/content/explore/mainExplore'))


function ExploreRoutes() {
  return (
      <Routes>
        <Route path="/explore" element={<Explore />}>
            <Route index element={<HomeSection />} />
            <Route path="home" element={<HomeSection />} />
         </Route>
      </Routes>
  )
}

export default ExploreRoutes;
