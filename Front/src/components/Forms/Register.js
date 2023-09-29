import { useForm } from 'react-hook-form';
import styles from './Register.module.scss';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';


function Register({ seeLoginForm, toggleUnRegister }) {
    const [feedback, setFeedback] = useState("");
    const [feedbackGood, setFeedbackGood] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

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
                setTimeout(() => {
                    seeLoginForm();
                }, 3000);
            }
        }
        setIsSubmitted(false);
    };

    return (
        <div className='"flex-fill d-flex flex-column justify-content-center align-items-center m30'>
            <form onSubmit={handleSubmit(submit)}>
                <div className="d-flex flex-column mt20 mb10">
                    <label htmlFor="username" className="mb10"> Nom d'utilisateur </label>
                    <input type="text" placeholder='Choisissez votre nom utilisateur' id="username" {...register("username")} />
                    {errors?.username && (<p className={`${styles.feedback}`} >{errors.username.message}</p>)}
                </div>

                <div className="d-flex flex-column mb10">
                    <label htmlFor="email" className=" mt20 mb10"> Adresse email</label>
                    <input type="text" placeholder='Renseignez votre adresse email ' id="email" {...register("email")} />
                    {errors?.email && (<p className={`${styles.feedback}`} >{errors.email.message}</p>)}
                </div>


                <div className="d-flex flex-column mb10">
                    <label htmlFor="password" className="mt20 mb10"> Mot de passe</label>
                    <input type="password" placeholder='Choisissez votre mot de passe' id="password" {...register("password")} />
                    {errors?.password && (<p className={`${styles.feedback}`} >{errors.password.message}</p>)}
                </div>

                <div className="d-flex flex-column mb10">
                    <label htmlFor="confirmPassword" className="mt20 mb10"> Confirmer votre mot de passe</label>
                    <input type="password" placeholder='Comfirmez votre mot de passe ' id="confirmPassword" {...register("confirmPassword")} />
                    {errors?.confirmPassword && (<p className={`${styles.feedback}`} >{errors.confirmPassword.message}</p>)}
                </div>

                {feedback && <p className={`${styles.feedback} mb20`}>{feedback} </p>}
                {feedbackGood && <p className={`${styles.feedbackGood} mb20`}>{feedbackGood} </p>}

                <button className="btn btn-primary-reverse mt20" disabled={isSubmitted}>  Valider mon inscription </button>
            </form>
        </div>
    );
}

export default Register;
