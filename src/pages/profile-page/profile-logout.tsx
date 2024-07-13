import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {  } from '../../services/actions/user-data';
import { logoutUser } from '../../services/actions/user-data';
import { AppDispatch, TUserData } from '../../utils/types';

export const LogoutPage:any = () => {
    const { userLoggedIn } = useSelector((store:TUserData) => store.userData);

    const dispatch:AppDispatch = useDispatch();

    useEffect(() => {
        if(userLoggedIn) {
            dispatch(logoutUser());
        }
    }, [dispatch, logoutUser]);
}