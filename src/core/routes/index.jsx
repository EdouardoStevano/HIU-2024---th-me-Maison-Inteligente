import React, { Suspense, lazy } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';

// Librairie de traduction
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector'

// Constant components
import ConnectionStatus from "presentation/components/component/connexionStatus/connectionStatus";

// Theme mode verification
import { checkmode } from "presentation/utils/theme/checkmode";

// importation des routes de redirection
const Loader = lazy(() => import('presentation/pages/redirect/loader/loader'))
const UnauthorizedPage = lazy(() => import('presentation/pages/redirect/unauthorized'))

// Principal route imporatation
const MainPage = lazy(() => import('./main'))
const AuthPage = lazy(() => import('./auth'))
// const DashboradPage = lazy(() => import('./dashboard'))
const ExplorePage = lazy(() => import('./explore'))

// Initialize translation
i18n
.use(Backend)
.use(LanguageDetector)
.use(initReactI18next)
.init({
  debug: true,
  fallbackLng: 'fr',
  backend: {
    loadPath: "/locales/{{lng}}/translation.json",
  },
});

// Initialize query client
const queryClient = new QueryClient()

/*
* Routes configuration
*/
function RoutesConfig() {
    checkmode();
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                {/* Notification */}
                 <ToastContainer
                    position="top-right"
                    theme="colored"
                    pauseOnHover={true}
                    rtl={false}
                />

                {/* Statics components */}
                <ConnectionStatus />

                <Suspense fallback={<Loader />}>
                    {/* Pages Routes */}
                    <MainPage />
                    <AuthPage />
                    {/* <DashboradPage /> */}
                    <ExplorePage />
                </Suspense>
            </BrowserRouter>
        </QueryClientProvider>
  )
}

export default RoutesConfig