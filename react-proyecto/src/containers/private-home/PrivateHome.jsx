import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UserModal from '../../components/user-modal/UserModal';
import { logoutActionCreator } from '../../store/modules/auth/actions';
import { findAllAsyncActionCreator, findByIdAsyncActionCreator } from '../../store/modules/user/actions';

import {
    Container, Button, Table,
    Nav, NavItem, NavLink
} from 'reactstrap';

import { HeaderPrivate } from '../../containers/header-private/HeaderPrivate';

const PrivateHome = () => {
    const dispatch = useDispatch();
    const userModule = useSelector(store => store.user.users);
    const userByIdModule = useSelector(store => store.user.userById);

    useEffect(() => {
        dispatch(findAllAsyncActionCreator());
    }, []);


    const handlerFindById = (user) => {
        return (event) => {
            dispatch(findByIdAsyncActionCreator(user.id));
        }
    }

    return (
        <Container className="private-home">
            <HeaderPrivate></HeaderPrivate>

            <br></br>
            <h1>Listado de Usuarios</h1>
            <Table striped  hover responsive >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {userModule.data.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td><Button onClick={handlerFindById(user)}>Ver</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {userByIdModule.data.id && (<UserModal user={userByIdModule} />)}
        </Container>
    );
};

export default PrivateHome;