import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutActionCreator } from '../../store/modules/auth/actions';

import {
    Container, Button, Table,
    Nav, NavItem, NavLink
} from 'reactstrap';


export const HeaderPrivate = (props) => {
    const dispatch = useDispatch();

    const handlerLogout = () => {
        dispatch(logoutActionCreator());
    }; 
   
    return (
        <div className="private-save-user">
            
            <Nav>
                 <NavItem>
                    <NavLink href="/private/home">Listado usuarios</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/private/home/user/create">Crear usuario</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/private/home/post/create">Crear Post</NavLink>
                </NavItem>
                {/* <NavItem>
                    <NavLink href="#">Actualizar Post</NavLink>
                </NavItem> */}
                <NavItem>
                    <NavLink href="#" onClick={handlerLogout}>Cerrar sesión</NavLink>
                </NavItem>
            </Nav>
            
            
        </div>
    );
}

export default HeaderPrivate;