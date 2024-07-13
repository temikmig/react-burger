import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import css from '../login-page/login-page.module.css';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import { useDispatch, useSelector } from 'react-redux';

import { Link, useNavigate, useLocation } from 'react-router-dom';

import { getUserData, resetPassword } from '../../services/actions/user-data';
import { AppDispatch, TUserData } from '../../utils/types';

export const ResetPasswordPage = () => {
    const { userLoggedIn, isForgotPassword, isResetPassword, isError } = useSelector((store:TUserData) => store.userData);

    const dispatch:AppDispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        dispatch(getUserData());
    }, [dispatch, getUserData]);

    const [submitFlag, setSubmitFlag] = useState(false);

    const [ newPassword, setNewPassword ] = useState('');
    const onChangeNewPassword = (e:ChangeEvent<HTMLInputElement>) => {
        setNewPassword(e.target.value);
        setSubmitFlag(false);
    }

    const [ resetToken, setResetToken] = useState('');
    const onChangeResetToken = (e:ChangeEvent<HTMLInputElement>) => {
        setResetToken(e.target.value);
        setSubmitFlag(false);
    }

    const submitResetPassword = (e:FormEvent) => {
        e.preventDefault();

        if(newPassword==="") return false;
        if(resetToken==="") return false;

        const data = {
            password: newPassword,
            token: resetToken
        }

        setSubmitFlag(true);
    
        dispatch(resetPassword(data));
    }

    useEffect(() => {
        if (userLoggedIn) {
            navigate("/", { replace: true });
        }
    }, [userLoggedIn, navigate]);

    useEffect(() => {
        if (isResetPassword||!isForgotPassword) {
            navigate("/login", { replace: true });
        }
    }, [isResetPassword, isForgotPassword, navigate]);

    return(
        <>
            <main className={css.pageMain}>
                <section className={css.pageSection}>
                    <h1 className={css.pageHeader}>Восстановление пароля</h1>
                    <form onSubmit={submitResetPassword}>
                        <section className={css.pageSectionForm}>
                            <PasswordInput value={newPassword} placeholder={'Введите новый пароль'} required={true} onChange={onChangeNewPassword} />
                            <Input value={resetToken} placeholder={'Введите код из письма'} required={true} onChange={onChangeResetToken} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
                        </section>
                        {submitFlag&&isError&&<p className={css.errorMessage}>Ошибка восстановления пароля</p>}
                        <section className={css.pageSectionButton}>
                            <Button htmlType="submit" type="primary" size="large">Сохранить</Button>
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