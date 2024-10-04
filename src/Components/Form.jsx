import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "../Stylesheets/Form.css";
import { AiFillCheckCircle } from 'react-icons/ai';

export const ContactUs = () => {
    const form = useRef();
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    const validate = () => {
        let newErrors = {};
        const formData = {
            user_name: form.current['user_name'].value,
            user_email: form.current['user_email'].value,
            message: form.current['message'].value
        };

        if (!formData.user_name.trim()) {
            newErrors.user_name = 'El nombre es requerido';
        }
        else if(formData.user_name.length < 3){
            newErrors.user_name = "El nombre debe tener más caracteres."
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.user_email) {
            newErrors.user_email = 'El email es requerido';
        } else if (!emailRegex.test(formData.user_email)) {
            newErrors.user_email = 'El formato del email es incorrecto.';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'El mensaje es requerido.';
        }

        else if(formData.message.length < 30){
            newErrors.message = "El mensaje debe ser más extenso."
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setSuccess(false);
        
        if (!validate()) {
            setSuccess(false)
            return;
        }
        else{
            setSuccess(true);
        }

        emailjs.sendForm('service_zyexeet', 'template_gf0oh3m', form.current, {
            publicKey: '6pVgnW1ZL-8brkI2F',
        }).then(() => { 
            console.log('SUCCESS!');
        }, (error) => {
            console.log('FAILED...', error.text);
        });
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="form">
            <label>Nombre</label>
            <input type="text" name="user_name" placeholder="Escriba su nombre" required/>
            {errors.user_name && <p className="error">{errors.user_name}</p>}
            
            <label>Email</label>
            <input type="email" name="user_email" placeholder="ejemplo@gmail.com" required/>
            {errors.user_email && <p className="error">{errors.user_email}</p>}
            
            <label>Mensaje</label>
            <textarea name="message" placeholder="Escriba aquí su mensaje" required/>
            {errors.message && <p className="error">{errors.message}</p>}
            <input type="submit" value="Enviar" />
            {
                success ? <span className='success-span'><AiFillCheckCircle className='success-iconc'/> Enviado correctamente</span> : null 
            }
        </form>
    );
}
