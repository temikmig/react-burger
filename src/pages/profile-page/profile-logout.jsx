import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {  } from '../../services/actions/user-data';
import { logoutUser } from '../../services/actions/user-data';

export const LogoutPage = () => {
    const { userLoggedIn } = useSelector(store => store.userData);

    const dispatch = useDispatch();

    useEffect(() => {
        if(userLoggedIn) {
            dispatch(logoutUser());
        }
    }, [dispatch, logoutUser]);
}