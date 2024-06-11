import React, {useEffect, useState} from "react";
import './Form.css';
import {useTelegram} from "../hooks/useTelegram";
const Form = () => {
    const [name, setName] = useState('');
    const [yrl, setYrl] = useState('');
    const [subject, setSubject] = useState('physical');
    const {tg} = useTelegram();

    useEffect(() => {
        tg.MainButton.setParams({
            text: "Отправить данные"
        })

    }, [])

    useEffect(() => {
        if(!yrl || !name ) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }

    }, [name, yrl])

    const onChangeName = (e) => {
        setName(e.target.value) 
    }

    const onChangeYrl = (e) => {
        setYrl(e.target.value)
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }


    return (
        <div className={"form"}>
            <h3>Введите ваши данные</h3>
        <input className={'input'} type="text" placeholder={'Как вас зовут?'} value={name} onChange={onChangeName}/>
        <input className={'input'} type="text" placeholder={'Что вы умеете?'} value={yrl} onChange={onChangeYrl}/>
            <select value={subject} onChange={onChangeSubject} className={'select'} >
                <option value={'legal'}>Юр. Лицо</option>
                <option value={'physical'}>Физ. лицо</option>
            </select>
        </div>
    );
};

export default Form;