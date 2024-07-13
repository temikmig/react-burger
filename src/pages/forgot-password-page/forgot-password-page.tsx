import React, { useState, useEffect, FC, ChangeEvent, FormEvent } from 'react';
import css from '../login-page/login-page.module.css';
import { EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import { useDispatch, useSelector } from 'react-redux';

import { Link, useNavigate, useLocation } from 'react-router-dom';

import { getUserData, forgotPassword } from '../../services/actions/user-data';
import { AppDispatch, TUserData, TUserForgotPassword } from '../../utils/types';

export const ForgotPasswordPage:FC = () => {
    const { userLoggedIn, isForgotPassword, isError } = useSelector((store:TUserData) => store.userData);

    const dispatch:AppDispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const [submitFlag, setSubmitFlag] = useState(false);

    useEffect(() => {
        dispatch(getUserData());
    }, [dispatch, getUserData]);

    const [ resetEmail, setResetEmail ] = useState('');
    const onChangeResetEmail = (e:ChangeEvent<HTMLInputElement>) => {
        setResetEmail(e.target.value);
        setSubmitFlag(false);
    }

    const submitForgotPassword = (e:FormEvent) => {
        e.preventDefault();

        if(resetEmail==="") return false;

        const data = {
            email: resetEmail
        }
    
        setSubmitFlag(true);

        dispatch(forgotPassword(data));
    }

    useEffect(() => {
        if (userLoggedIn) {
            navigate("/", { replace: true });
        }
    }, [userLoggedIn, navigate]);

    useEffect(() => {
        if (isForgotPassword) {
            navigate("/reset-password", { replace: true });
        }
    }, [isForgotPassword, navigate]);

    return(
        <>
            <main className={css.pageMain}>
                <section className={css.pageSection}>
                    <h1 className={css.pageHeader}>Восстановление пароля</h1>
                    <form onSubmit={submitForgotPassword}>
                        <section className={css.pageSectionForm}>
                            <EmailInput value={resetEmail} required={true} onChange={onChangeResetEmail} />
                        </section>
                        {submitFlag&&isError&&<p className={css.errorMessage}>Ошибка восстановления пароля</p>}
                        <section className={css.pageSectionButton}>
                            <Button htmlType="submit" type="primary" size="large">Восстановить</Button>
                        </section>
                    </form>
                    <section className={css.pageSectionText}>
                        <p>Вспомнили пароль? <Link className={css.pageSectionLink} to="/login">Войти</Link></p>
                    </section>
                </section>
            </main>
        </>
    );
}