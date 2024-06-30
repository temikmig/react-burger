import React, { useState, useEffect } from 'react';
import css from '../login-page/login-page.module.css';
import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import { Link, useNavigate, useLocation } from 'react-router-dom';

import AppHeader from '../../components/app-header/app-header';
import { useDispatch, useSelector } from 'react-redux';

import { registerUser, getUserData } from '../../services/actions/user-data';

export const RegisterPage = () => {
    const { userLoggedIn, isError } = useSelector(store => store.userData);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        dispatch(getUserData());
    }, [dispatch, getUserData]);

    const [submitFlag, setSubmitFlag] = useState(false);

    const [ regName, setRegName ] = useState('');
    const onChangeRegName = e => {
        setRegName(e.target.value);
        setSubmitFlag(false);
    }
   

    const [ regEmail, setRegEmail ] = useState('');
    const onChangeRegEmail = e => {
        setRegEmail(e.target.value);
        setSubmitFlag(false);
    }

    const [ regPassword, setRegPassword ] = useState('');
    const onChangeRegPassword = e => {
        setRegPassword(e.target.value);
        setSubmitFlag(false);
    }

    const submitRegistrationUser = (e) => {
        e.preventDefault();

        if(regName==='') return false;
        if(regEmail==='') return false;
        if(regPassword==='') return false;
        
        const data = {
            name: regName,
            email: regEmail,
            password: regPassword
        }
    
        setSubmitFlag(true);

        dispatch(registerUser(data));
    }

    useEffect(() => {
        if (userLoggedIn) {
            navigate("/", { replace: true });
        }
    }, [userLoggedIn, navigate]);

    return(
        <>
            <AppHeader />
            <main className={css.pageMain}>
                <section className={css.pageSection}>
                    <h1 className={css.pageHeader}>Регистрация</h1>
                    <form onSubmit={submitRegistrationUser}>
                        <section className={css.pageSectionForm}>
                            <Input value={regName} type={'text'} placeholder={'Имя'} required={true} onChange={onChangeRegName} />
                            <EmailInput value={regEmail} name={'email'} required={true} onChange={onChangeRegEmail} />
                            <PasswordInput value={regPassword} name={'password'} required={true} onChange={onChangeRegPassword} />
                        </section>
                        {submitFlag&&isError&&<p className={css.errorMessage}>Ошибка регистрации</p>}
                        <section className={css.pageSectionButton}>
                            <Button htmlType="submit" type="primary" size="large">Зарегистрироваться</Button>
                        </section>
                    </form>
                    <section className={css.pageSectionText}>
                        <p>Уже зарегистрированы? <Link to="/login">Войти</Link></p>
                    </section>
                </section>
            </main>
        </>
    );
}