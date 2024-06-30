import React, { useState, useEffect } from 'react';
import { EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';

import {  } from '../../services/actions/user-data';
import { logoutUser, getUserData } from '../../services/actions/user-data';

import AppHeader from '../../components/app-header/app-header';

export const LogoutPage = () => {
    const { userLoggedIn } = useSelector(store => store.userData);

    const dispatch = useDispatch();

    useEffect(() => {
        if(userLoggedIn) {
            dispatch(logoutUser());
        }
    }, [dispatch, logoutUser]);
}