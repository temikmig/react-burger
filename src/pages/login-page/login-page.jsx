import React, { useState, useEffect } from 'react';
import css from './login-page.module.css';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import { loginUser } from '../../services/actions/user-data';
import { getUserData } from '../../services/actions/user-data';

import AppHeader from '../../components/app-header/app-header';

export const LoginPage = () => {
    const { userLoggedIn, isError } = useSelector(store => store.userData);

    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserData());
    }, [dispatch, getUserData]);

    const [submitFlag, setSubmitFlag] = useState(false);

    const [ loginEmail, setLoginEmail ] = useState('');
    const onChangeLoginEmail = e => {
        setLoginEmail(e.target.value);
        setSubmitFlag(false);
    }

    const [ loginPassword, setLoginPassword ] = useState('');
    const onChangeLoginPassword = e => {
        setLoginPassword(e.target.value);
        setSubmitFlag(false);
    }

    const submitLoginUser = (e) => {
        e.preventDefault();

        if(loginEmail==='') return false; 
        if(loginPassword==='') return false; 

        const data = {
            email: loginEmail,
            password: loginPassword
        }
    
        setSubmitFlag(true);
        dispatch(loginUser(data));
    }

    useEffect(() => {
        if (userLoggedIn) {
            const { from } = location.state || { from: { pathname: "/" } };
            if (from.pathname === "profile/logout") {
                from.pathname = "/";
            }
            navigate(from.pathname, { replace: true });
        }
    }, [userLoggedIn, navigate]);

    return (
        <>
            <AppHeader />
            <main className={css.pageMain}>
                <section className={css.pageSection}>
                    <form onSubmit={submitLoginUser}>
                        <h1 className={css.pageHeader}>Вход</h1>
                        <section className={css.pageSectionForm}>
                            <Input type="email" placeholder="E-mail" value={loginEmail} required={true} onChange={onChangeLoginEmail} />
                            <PasswordInput placeholder="Пароль" value={loginPassword} required={true} onChange={onChangeLoginPassword} />
                        </section>
                        {submitFlag&&isError&&<p className={css.errorMessage}>Ошибка входа</p>}
                        <section className={css.pageSectionButton}>
                            <Button htmlType="submit" type="primary" size="large">Войти</Button>
                        </section>
                        <section className={css.pageSectionText}>
                            <p>Вы - новый пользователь? <Link to="/register">Зарегистрироваться</Link></p>
                            <p>Забыли пароль? <Link to="/forgot-password">Восстановить пароль</Link></p>
                        </section>
                    </form>
                </section>
            </main>
        </>
    );
}