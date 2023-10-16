import { useForm } from 'react-hook-form';
import styles from './Register.module.scss';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import Banner from '../Banner/Banner';
import Navbar from '../NavBar/Navbar';
import { useNavigate } from 'react-router-dom';

function Register({ seeLoginForm, toggleUnRegister }) {
    const [feedback, setFeedback] = useState("");
    const [feedbackGood, setFeedbackGood] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();

    const yupSchema = yup.object({
        username: yup.string()
            .required("Le champ doit contenir au minimum 2 caractères ")
            .min(2, "le champ doit contenir au minimum 2 caractères ")
            .max(12),
        email: yup.string()
            .required("le champ est obligatoire")
            .email("vous devez saisir un email valide"),
        password: yup.string()
            .required("le champ est obligatoire")
            .min(5, "mot de passe trop court")
            .max(10, "mot de passe trop long"),
        confirmPassword: yup.string()
            .required("vous devez confirmer votre mot de passe")
            .oneOf(
                [yup.ref("password", "")], "les mots de passe ne correspondent pas")
    });



    const defaultValues = {
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
    };

    const { register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        defaultValues,
        mode: "onChange",
        resolver: yupResolver(yupSchema)
    });



    const submit = async (values) => {
        console.log(values);
        const response = await fetch("http://localhost:8009/api/users/addUser", {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (response.ok) {
            const newUser = await response.json();
            console.log("newUser", newUser);
            if (newUser.message) {
                setFeedback("Email déjà existant");
                setIsSubmitted(true);
            } else {
                setFeedbackGood(newUser.messageGood);
                reset(defaultValues);
                setFeedback(null)
                setTimeout(() => {
                    navigate('/connexion');
                }, 3000);
            }
        }
        setIsSubmitted(false);
    };

    return (
        <>
            <Banner />
            <Navbar />
            <div className='flex-fill d-flex flex-column justify-content-center align-items-center m30'>

                <h1 className='mb50'>Inscription</h1>
                <form className='d-flex flex-column align-items-center' onSubmit={handleSubmit(submit)}>

                    <div className={`mb20  d-flex flex-column align-items-center ${styles.container}`}>

                        <div className={`mb20 ${styles.input_group}`}>
                            <input required type="text" name="username" className={`${styles.input}`} id="username" {...register("username")} />
                            <label className={`${styles.user_label}`}>Nom d'Utilisateur</label>
                            {errors?.username && (<p className={`${styles.feedback}`} >{errors.username.message}</p>)}
                        </div>



                        <div className={`mb20 ${styles.input_group}`}>
                            <input type="email" required className={`${styles.input}`} id="email" {...register("email")} />
                            <label htmlFor="email" className={`${styles.user_label}`}> Adresse email</label>
                            {errors?.email && (<p className={`${styles.feedback}`} >{errors.email.message}</p>)}
                        </div>


                        <div className={`mb20 ${styles.input_group}`}>
                            <input type="password" required id="password" className={`${styles.input}`} {...register("password")} />
                            <label htmlFor="password" className={`${styles.user_label}`}> Mot de passe</label>
                            {errors?.password && (<p className={`${styles.feedback}`} >{errors.password.message}</p>)}
                        </div>

                        <div className={`mb20 ${styles.input_group}`}>
                            <input type="password" required id="confirmPassword" className={`${styles.input}`} {...register("confirmPassword")} />
                            <label htmlFor="confirmPassword" className={`${styles.user_label}`}> Confirmer votre mot de passe</label>
                            {errors?.confirmPassword && (<p className={`${styles.feedback}`} >{errors.confirmPassword.message}</p>)}
                        </div>
                    </div>
                    {feedback && <p className={`${styles.feedback} mb20`}>{feedback} </p>}
                    {feedbackGood && <p className={`${styles.feedbackGood} mb20`}>{feedbackGood} </p>}

                    <button className={`btn btn-primary-reverse mt20 ${styles.btn}`} disabled={isSubmitted}> S'inscrire </button>
                </form>
            </div>
        </>
    );
}

export default Register;
