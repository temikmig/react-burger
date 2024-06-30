import React from 'react';
import css from './app.module.css';

import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { 
    HomePage, 
    LoginPage, 
    RegisterPage, 
    ForgotPasswordPage, 
    ResetPasswordPage, 
    ProfilePage, 
    IngredientPage,
    NotFound404 
} from '../../pages';

import { ProtectedRouteElement } from '../protected-route';

import IngredientDetails from '../ingredient-details/ingredient-details';
import Modal from '../modal/modal';

const App = () => {
    // const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const background = location.state;

    const handleCloseModal = () => {
        navigate(-1)
    };

    return (
        <>
            <Routes location={background || location}>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                <Route path="/reset-password" element={<ResetPasswordPage />} />
                    <Route path="/profile/*" element={<ProtectedRouteElement element={<ProfilePage />} />} />
                <Route path="*" element={<NotFound404 />} />
                <Route path="/ingredients/:id" element={<IngredientPage />} />
            </Routes>
            {background && (
                <Routes>
                    <Route path="/ingredients/:id" element={<Modal cont={<IngredientDetails />} header="Детали ингредиента" handleCloseThis={handleCloseModal} />} />
                </Routes>
            )}
        </>
    );
}

export default App;