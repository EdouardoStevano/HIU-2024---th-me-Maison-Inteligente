import { React, lazy } from "react";
import { Route, Routes } from "react-router-dom";

// Main pages importation
const AuthPage = lazy(() => import('presentation/pages/auth'));
const SignInPage = lazy(() => import('presentation/pages/auth/section/signIn/signIn'));
const SignUpPage = lazy(() => import('presentation/pages/auth/section/signUp/signUp'));
const ResetPasswordPage = lazy(() => import('presentation/pages/auth/section/resetPassword/resetPassword'))

function AuthRoutes() {
  return (
      <Routes>
        <Route path="/auth" element={<AuthPage />}>
            <Route index element={<SignInPage />} />
            <Route path="signIn" element={<SignInPage />} />
            <Route path="signUp" element={<SignUpPage />} />
            <Route path="password/reset" element={<ResetPasswordPage />} />
        </Route>
      </Routes>
  );
}

export default AuthRoutes;
