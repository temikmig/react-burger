import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "../../services/types/hooks";
import { logoutUser } from '../../services/actions/user-data';

export const LogoutPage:any = () => {
    const { userLoggedIn } = useSelector((store) => store.userData);

    const dispatch = useDispatch();

    useEffect(() => {
        if(userLoggedIn) {
            dispatch(logoutUser());
        }
    }, [dispatch, logoutUser]);
}