import { React, lazy } from "react";
import { Route, Routes } from "react-router-dom";

// Main pages importation
const MainPage = lazy(() => import('presentation/pages/main'))
// const HomeSection = lazy(() => import('pages/main/content/home/mainHome'))
const Loader = lazy(() => import('presentation/pages/redirect/loader'))

function MainRoutes() {
  return (
      <Routes>
        <Route path="/loader" element={<Loader />} />
        <Route path="/" element={<MainPage />}>
            {/* <Route index element={<HomeSection />} />
            <Route path="/home" element={<HomeSection />} /> */}
        </Route>
      </Routes>
  );
}

export default MainRoutes;
