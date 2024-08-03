import React, { FC, useEffect } from 'react';
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
    OrderFeedPage,
    NotFound404 
} from '../../pages';

import { ProtectedRouteElement } from '../protected-route';

import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderFeedDetails from '../order-feed-details/order-feed-details';
import Modal from '../modal/modal';
import AppHeader from '../app-header/app-header';
import { FeedPage } from '../../pages/feed-page/feed-page';
import { useDispatch } from '../../services/types/hooks';
import { getOrderDetails } from '../../services/actions/order-details';

const App:FC = () => {
    // const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const background = location.state && location.state.background;

    const handleCloseModal = () => {
        navigate(-1)
    };

    return (
        <>
            <AppHeader />
            <Routes location={background || location}>
                <Route path="/" element={<HomePage />} />
                <Route path="/feed" element={<FeedPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                <Route path="/reset-password" element={<ResetPasswordPage />} />
                    <Route path="/profile/*" element={<ProtectedRouteElement element={<ProfilePage />} />} />
                <Route path="*" element={<NotFound404 />} />
                <Route path="/ingredients/:id" element={<IngredientPage />} />
                <Route path="/feed/:number" element={<OrderFeedPage />} />
            </Routes>
            {background && (
                <Routes>
                    <Route path="/ingredients/:id" element={<Modal cont={<IngredientDetails />} header="Детали ингредиента" handleCloseThis={handleCloseModal} />} />
                    <Route path="/feed/:number" element={<Modal cont={<OrderFeedDetails />} header="" handleCloseThis={handleCloseModal} />} />
                    <Route path="/profile/orders/:number" element={<Modal cont={<OrderFeedDetails />} header="" handleCloseThis={handleCloseModal} />} />
                </Routes>
            )}
        </>
    );
}

export default App;