import { useState } from "react";
import { login } from 'redux/authorization/authorization-operations';
import { useDispatch } from "react-redux";

import styles from "./styles.module.css";
import {Button} from 'react-bootstrap';

function Authorization() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const inputHandler = function (evt) {
        switch (evt.target.name) {
            case "email":
                setEmail(evt.target.value);
                break;
        
            case "password":
                setPassword(evt.target.value);
                break;

            default:
                return;
        };
};

    const submitHanlder = function (evt) {
        evt.preventDefault();
        dispatch(login({email, password}));
        setEmail('');
        setPassword('');
    }

    return (
        <form onSubmit={submitHanlder}>
            <div>
                <p className={styles.registerLabel}>Login</p>
                <input onChange={inputHandler} name="email" type="email" value={email} className={styles.registerInput}/>
            </div>
            
            <div>
                <p className={styles.registerLabel}>Password</p>
                <input onChange={inputHandler} name="password" type="password" value={password} className={styles.registerInput}/>
            </div>

        <Button type="submit" className={styles.submitBtn}>
            Log in
        </Button>
        </form>
    )
};

export default Authorization;