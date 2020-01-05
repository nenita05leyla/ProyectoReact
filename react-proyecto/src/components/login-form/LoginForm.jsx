import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginAsyncActionCreator } from '../../store/modules/auth/actions';

import {
    Col,
    Button,
    Form, FormGroup, Input,
    InputGroup, InputGroupAddon, InputGroupText,
} from 'reactstrap';

import './LoginForm.css';

const LoginForm = (props) => {
    const store = useSelector(store => store);
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlerSubmit = (event) => {
        event.preventDefault();
        dispatch(loginAsyncActionCreator({
            email,
            password,
        }));
    }

    //hook
    useEffect(() => {
        if (store.auth.isLogin) {
            //si esta logueado lo redirige al home privado
            props.history.push('/private/home');
        }
    }, [store.auth.isLogin, props]);

    return (
        <div className="login-form">
            <Form onSubmit={handlerSubmit}>
                <FormGroup>
                    <Col sm={10}>
                        <h1>Login</h1>
                        <p>Ingrese sus credenciales para acceder a su cuenta.</p>
                    </Col>
                    <Col sm={10}>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText></InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="email" value={email} onChange={({ target }) => setEmail(target.value)} placeholder="Usuario@" />
                        </InputGroup>
                    </Col>
                    
                </FormGroup>
                <FormGroup>
                    <Col sm={10}>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText></InputGroupText>
                            </InputGroupAddon>
                            <Input type="password" placeholder="password" value={password} onChange={({ target }) => setPassword(target.value)} placeholder="Password" />
                        </InputGroup>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col sm={10}>
                        <Button color="primary">Entrar</Button>
                        
                    </Col>
                </FormGroup>
            </Form>
            { /*
                <pre>
                    {JSON.stringify(store, undefined, 2)}
                </pre>
            */}
        </div>
    );
};

export default LoginForm;