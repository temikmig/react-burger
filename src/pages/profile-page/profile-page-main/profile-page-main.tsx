import React, { useState, useRef, ChangeEvent, FormEvent, FocusEvent, SyntheticEvent, FC } from 'react';
import css from './profile-page-main.module.css';
import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { patchUser } from '../../../services/actions/user-data';
import { AppDispatch, TUserData } from '../../../utils/types';

export const ProfilePageMain:FC = () => {
    const { data } = useSelector((store:TUserData) => store.userData);

    const dispatch:AppDispatch = useDispatch();

    const profileNameRef = useRef<HTMLInputElement>(null);

    const [ profileNameError, setProfileNameError ] = useState<boolean>(false);
    const [ profileEmailError, setProfileEmailError ] = useState<boolean>(false);

    const [submitFlag, setSubmitFlag] = useState<boolean>(false);
    
    const [ changeDataFlag, setChangeDataFlag ] = useState<boolean>(false);
    const [ profileName, setProfileName ] = useState<string>(data.user.name);
    const onChangeName = (e:ChangeEvent<HTMLInputElement>) => {
        setProfileName(e.target.value);
        setProfileNameError(false);
        setChangeDataFlag(true);
    }

    const [ profileNameDisabled, setProfileNameDisabled ] = useState<boolean>(true);
    const onChangeProfileNameDisabled = () => {
        setProfileNameDisabled(!profileNameDisabled);
        
        if(profileNameDisabled) setTimeout(() => profileNameRef.current?.focus(), 0);
        else setTimeout(() => profileNameRef.current?.blur(), 0);
    }

    const [ profileEmail, setProfileEmail ] = useState<string>(data.user.email);
    const onChangeEmail = (e:ChangeEvent<HTMLInputElement>) => {
        setProfileEmail(e.target.value);
        setProfileEmailError(false);
        setChangeDataFlag(true);
    }

    const [ profilePassword, setProfilePassword ] = useState<string>('');
    const onChangePassword = (e:ChangeEvent<HTMLInputElement>) => {
        setProfilePassword(e.target.value);
        setChangeDataFlag(true);
    }

    const saveProfileChange = (e:FormEvent) => {
        e.preventDefault();

        if(profileName==="") setProfileNameError(true);
        if(profileEmail==="") setProfileEmailError(true);

        if(profileName===""||profileEmail==="") return false;
        else {
            const data:any = {};

            if(profileName!=="") data.name = profileName;
            if(profileEmail!=="") data.email = profileEmail;
            if(profilePassword!=="") data.password = profilePassword;

            setSubmitFlag(true);
            dispatch(patchUser(data)); 
        }
    }

    const clearChanges = (e:SyntheticEvent) => {
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
                    <Input ref={profileNameRef} value={profileName} error={profileNameError} errorText={'Введите имя'} onBlur={(e:FocusEvent<HTMLInputElement>) => { e.preventDefault(); setProfileNameDisabled(true); } } onChange={onChangeName} placeholder={'Имя'} onIconClick={onChangeProfileNameDisabled} disabled={profileNameDisabled} icon={'EditIcon'} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
                    <EmailInput value={profileEmail} onChange={onChangeEmail} placeholder={'Логин'} isIcon={true} />
                    <PasswordInput value={profilePassword} onChange={onChangePassword} icon={'EditIcon'} />
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