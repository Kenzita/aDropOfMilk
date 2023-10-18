import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./Login.module.scss";
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Login() {
    const [user, setUser] = useState();
    const [feedback, setFeedback] = useState("");
    const [feedbackGood, setFeedbackGood] = useState("");

    const getUser = (userLogged) => {
        setUser(userLogged);
    };

    const yupSchema = yup.object({
        email: yup.string()
            .required("le champ est obligatoire")
            .email("vous devez saisir un email valide"),
        password: yup.string()
            .required("le champ est obligatoire")
    });


    const defaultValues = {
        password: "",
        email: "",
    };

    const { register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitted }
    } = useForm({
        defaultValues,
        mode: "onChange",
        resolver: yupResolver(yupSchema)
    });


    const submit = async (values) => {
        setFeedback("");
        console.log(values);
        const response = await fetch("http://localhost:8009/api/users/login", {
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
                setFeedback(newUser.message);
            }
            else {
                setFeedbackGood("Connexion réussie, vous allez être redirigé");
                reset(defaultValues);
                console.log("User recupéré", newUser);
                let user = {};
                user.username = newUser.username;
                user.email = newUser.email;
                console.log("user modifié", user);
                reset(defaultValues);
                setTimeout(() => {
                    getUser(user);
                    <Link to="/"></Link>;
                }, 3000);
            }
        }
    };

    return (
        <>
            <div className='"flex-fill d-flex flex-column justify-content-center align-items-center card m30'>


                <form className='d-flex flex-column align-items-center' onSubmit={handleSubmit(submit)}>

                    <div className={`mb20  d-flex flex-column align-items-center ${styles.container}`}>

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
                    </div>

                    <p>
                        Pas encore de compte ?
                    <NavLink to="/profile" className={`${styles.lien}`}> Inscrivez-vous </NavLink></p> 

                    {feedback && <p className={`${styles.feedback} mb20`}>{feedback} </p>}
                    {feedbackGood && <p className={`${styles.feedbackGood} mb20`}>{feedbackGood} </p>}


                    <button className={`btn btn-primary-reverse mt20 ${styles.btn}`} disabled={isSubmitted}>  Me connecter </button>
                </form>
            </div>
        </>
    );
}


export default Login;
