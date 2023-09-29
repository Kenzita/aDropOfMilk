import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./Login.module.scss";
import { Link } from 'react-router-dom';

function Login({ seeHomepage }) {
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
        <div className='"flex-fill d-flex flex-column justify-content-center align-items-center card m30'>
            <form onSubmit={handleSubmit(submit)}>

                <div className="d-flex flex-column mb20">
                    <label htmlFor="email" className="mb10">
                        Adresse email</label>
                    <input type="text" placeholder='Votre Email' id="email" {...register("email")} />
                    {errors?.email && (<p className={`${styles.feedback}`} >{errors.email.message}</p>)}
                </div>


                <div className="d-flex flex-column mb20">
                    <label htmlFor="password" className="mb10"> Mot de Passe</label>
                    <input type="password" placeholder='Mot de passe' id="password" {...register("password")} />
                    {errors?.password && (<p className={`${styles.feedback}`} >{errors.password.message}</p>)}
                </div>


                {feedback && <p className={`${styles.feedback} mb20`}>{feedback} </p>}
                {feedbackGood && <p className={`${styles.feedbackGood} mb20`}>{feedbackGood} </p>}


                <button className="btn btn-primary-reverse mt20" disabled={isSubmitted}>  Me connecter </button>
            </form>
        </div>
    );
}


export default Login;
