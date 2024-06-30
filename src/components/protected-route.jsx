import React from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import { getUserData } from '../services/actions/user-data';

export function ProtectedRouteElement({ element }) {
    const { userLoggedIn, isLoad, isError } = useSelector(store => store.userData);

    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!userLoggedIn) {
            dispatch(getUserData());
        }
    }, [dispatch, userLoggedIn]);

    useEffect(() => {
        if (isError) {
            navigate("/login");
            return undefined;
        }
    }, [isError, navigate, location]);

    return isLoad || !userLoggedIn ? 'Загрузка...' : element;
}

ProtectedRouteElement.propTypes = {
    element: PropTypes.element.isRequired
}