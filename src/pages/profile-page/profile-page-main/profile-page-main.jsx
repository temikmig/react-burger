import React, { useState, useRef } from 'react';
import css from './profile-page-main.module.css';
import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { patchUser } from '../../../services/actions/user-data';

export const ProfilePageMain = () => {
    const { data } = useSelector(store => store.userData);

    const dispatch = useDispatch();

    const profileNameRef = useRef(null);

    const [ profileNameError, setProfileNameError ] = useState(false);
    const [ profileEmailError, setProfileEmailError ] = useState(false);

    const [submitFlag, setSubmitFlag] = useState(false);
    
    const [ changeDataFlag, setChangeDataFlag ] = useState(false);
    const [ profileName, setProfileName ] = useState(data.user.name);
    const onChangeName = e => {
        setProfileName(e.target.value);
        setProfileNameError(false);
        setChangeDataFlag(true);
    }

    const [ profileNameDisabled, setProfileNameDisabled ] = useState(true);
    const onChangeProfileNameDisabled = () => {
        setProfileNameDisabled(!profileNameDisabled);
        
        if(profileNameDisabled) setTimeout(() => profileNameRef.current.focus(), 0);
        else setTimeout(() => profileNameRef.current.blur(), 0);
    }

    const [ profileEmail, setProfileEmail ] = useState(data.user.email);
    const onChangeEmail = e => {
        setProfileEmail(e.target.value);
        setProfileEmailError(false);
        setChangeDataFlag(true);
    }

    const [ profilePassword, setProfilePassword ] = useState('');
    const onChangePassword = e => {
        setProfilePassword(e.target.value);
        setChangeDataFlag(true);
    }

    const saveProfileChange = (e) => {
        e.preventDefault();

        if(profileName==="") setProfileNameError(true);
        if(profileEmail==="") setProfileEmailError(true);

        if(profileName===""||profileEmail==="") return false;
        else {
            const data = {};

            if(profileName!=="") data["name"] = profileName;
            if(profileEmail!=="") data["email"] = profileEmail;
            if(profilePassword!=="") data["password"] = profilePassword;

            setSubmitFlag(true);
            dispatch(patchUser(data)); 
        }
    }

    const clearChanges = (e) => {
        setProfileName(data.user.name);
        setProfileEmail(data.user.email);
        setProfilePassword('');
        setChangeDataFlag(false);
        setProfileNameError(false);
        setProfileEmailError(false);
    }

    return(
        <>
            <form onSubmit={saveProfileChange}>
                <section className={css.pageSectionForm}>
                    <Input ref={profileNameRef} value={profileName} error={profileNameError} errorText={'Введите имя'} onBlur={(e) => {e.preventDefault(); setProfileNameDisabled(true)}} onChange={onChangeName} placeholder={'Имя'} onIconClick={onChangeProfileNameDisabled} disabled={profileNameDisabled} icon={'EditIcon'} />
                    <EmailInput type="email" value={profileEmail} error={profileEmailError} errorText={'Введите e-mail'} onChange={onChangeEmail} placeholder={'Логин'} isIcon={true} />
                    <PasswordInput type="password" value={profilePassword} onChange={onChangePassword} icon={'EditIcon'} />
                </section>
                
                {changeDataFlag&&
                <section className={css.pageSectionButtons}>
                    <Button htmlType="submit" type="primary" size="large">Сохранить</Button>
                    <Button htmlType="button" type="secondary" size="large" onClick={clearChanges}>Отменить</Button>
                </section>
                }
            </form>
        </>
    );
}