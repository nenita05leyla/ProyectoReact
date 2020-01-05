import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    InputGroup, InputGroupAddon, Input, InputGroupText,
    Container, Row, Col, Button
} from 'reactstrap';

import { saveAsyncActionCreator } from '../../store/modules/user/actions';
import { HeaderPrivate } from '../../containers/header-private/HeaderPrivate';

const PrivateSaveUser = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const userSaveModule = useSelector(store => store.user.userSave);

    useEffect(() => {
        dispatch({
            type: 'USER_SAVE_VOID',
            payload: null,
        })
    }, []);

    useEffect(() => {
        if (userSaveModule.data.id) {
            props.history.push('/private/home');
            dispatch({
                type: 'USER_SAVE_VOID',
                payload: null,
            })
        }
    }, [userSaveModule.data.id])

    const handlerSave = (event) => {
        event.preventDefault();
        const user = {
            name,
            email,
            password,
        };
        
        dispatch(saveAsyncActionCreator(user));
    }

    const validForm = () => {
        return name === '' || email === '' || password === '';
    }

    return (
        <div className="private-save-user">
            <HeaderPrivate></HeaderPrivate>
            <Container>
                <Row>
                    <Col>
                        <h1>Crear usuario</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <form onSubmit={handlerSave}>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText> </InputGroupText>
                                </InputGroupAddon>
                                <Input placeholder="Nombre" value={name} onChange={({ target }) => setName(target.value)} />
                            </InputGroup>
                            <br />
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText></InputGroupText>
                                </InputGroupAddon>
                                <Input type="email" placeholder="Email" value={email} onChange={({ target }) => setEmail(target.value)} />
                            </InputGroup>
                            <br />
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText></InputGroupText>
                                </InputGroupAddon>
                                <Input type="password" placeholder="Contraseña" value={password} onChange={({ target }) => setPassword(target.value)} />
                            </InputGroup>
                            <br />
                            <Button disabled={validForm()} color="primary">Guardar</Button>
                        </form>
                    </Col>
                </Row>
            </Container>
            {/* {JSON.stringify(userSaveModule)} */}
        </div>
    );
}
export default PrivateSaveUser;