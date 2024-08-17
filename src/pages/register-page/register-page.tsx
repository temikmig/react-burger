import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import css from '../login-page/login-page.module.css';
import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import { Link, useNavigate, useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from "../../services/types/hooks";

import { registerUser, getUserData } from '../../services/actions/user-data';

export const RegisterPage = () => {
    const { userLoggedIn, isError } = useSelector((store) => store.userData);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        dispatch(getUserData());
    }, [dispatch, getUserData]);

    const [submitFlag, setSubmitFlag] = useState(false);

    const [ regName, setRegName ] = useState('');
    const onChangeRegName = (e:ChangeEvent<HTMLInputElement>) => {
        setRegName(e.target.value);
        setSubmitFlag(false);
    }
   

    const [ regEmail, setRegEmail ] = useState('');
    const onChangeRegEmail = (e:ChangeEvent<HTMLInputElement>) => {
        setRegEmail(e.target.value);
        setSubmitFlag(false);
    }

    const [ regPassword, setRegPassword ] = useState('');
    const onChangeRegPassword = (e:ChangeEvent<HTMLInputElement>) => {
        setRegPassword(e.target.value);
        setSubmitFlag(false);
    }

    const submitRegistrationUser = (e:FormEvent<HTMLFormElement>) => {
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
            <main className={css.pageMain}>
                <section className={css.pageSection}>
                    <h1 className={css.pageHeader}>Регистрация</h1>
                    <form onSubmit={submitRegistrationUser}>
                        <section className={css.pageSectionForm}>
                            <Input value={regName} type={'text'} placeholder={'Имя'} required={true} onChange={onChangeRegName} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
                            <EmailInput value={regEmail} name={'email'} required={true} onChange={onChangeRegEmail} />
                            <PasswordInput value={regPassword} name={'password'} required={true} onChange={onChangeRegPassword} />
                        </section>
                        {submitFlag&&isError&&<p className={css.errorMessage}>Ошибка регистрации</p>}
                        <section className={css.pageSectionButton}>
                            <Button htmlType="submit" type="primary" size="large">Зарегистрироваться</Button>
                        </section>
                    </form>
                    <section className={css.pageSectionText}>
                        <p>Уже зарегистрированы? <Link className={css.pageSectionLink} to="/login">Войти</Link></p>
                    </section>
                </section>
            </main>
        </>
    );
}