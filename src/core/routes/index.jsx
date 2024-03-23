import React, { Suspense, lazy } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';

// importation des routes de redirection
const Loader = lazy(() => import('presentation/pages/redirect/loader'));

const queryClient = new QueryClient()

/*
* @desc: Configuration des routes
*/
function RoutesConfig() {
  return (
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>

          <ToastContainer
            position="top-right"
            theme="colored"
            pauseOnHover={true}
            rtl={false}
          />

          <Suspense fallback={<Loader />}>
            {/* Pages Routes */}
             <span>Test</span>
          </Suspense>
        </BrowserRouter>
    </QueryClientProvider>
  )
}

export default RoutesConfig