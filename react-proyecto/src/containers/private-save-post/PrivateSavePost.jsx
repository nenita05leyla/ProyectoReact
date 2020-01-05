import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    InputGroup, InputGroupAddon, Input, InputGroupText, FormGroup, Label, FormText, Form,
    Container, Row, Col, Button
} from 'reactstrap';

import { saveAsyncActionCreator } from '../../store/modules/post/actions';
import { HeaderPrivate } from '../../containers/header-private/HeaderPrivate';

// import {
//     POST_SAVE_VOID,
// } from '../../store/modules/post/const';

const PrivateSavePost = (props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image_url, setImage] = useState('');

    const dispatch = useDispatch();
    const postSaveModule = useSelector(store => store.post);

    useEffect(() => {
        debugger
        dispatch({
            type: 'POST_SAVE_VOID',
            payload: null,
        })
    }, []);

    useEffect(() => {
        debugger
        if (postSaveModule.id) {
            debugger
            props.history.push('/private/home');
            dispatch({
                type: 'POST_SAVE_VOID',
                payload: null,
            })
        }
    }, [postSaveModule.id])

    const handlerSave = (event) => {
        event.preventDefault();
        console.log(postSaveModule);

        debugger
        const post = {
            title,
            description,
            image_url,
        };
        dispatch(saveAsyncActionCreator(post));
    }

    const validForm = () => {
        return title === '' || description === '';
    }

    return (
        <div className="private-save-post">
            <HeaderPrivate></HeaderPrivate>
            <Container>
                <Row>
                    <Col>
                        <h1>Crear Post</h1>
                    </Col>
                </Row>
                <Form onSubmit={handlerSave}>
                    <FormGroup row>
                        <Label for="exampleEmail" sm={2}>Titulo</Label>
                        <Col sm={10}>
                            <Input placeholder="Titulo" value={title} onChange={({ target }) => setTitle(target.value)} />
                        </Col>
                    </FormGroup>
                    <FormGroup onSubmit={handlerSave} row>
                        <Label for="exampleText" sm={2}>Descripción</Label>
                        <Col sm={10}>
                            <Input type="textarea" placeholder="Descripción" value={description} onChange={({ target }) => setDescription(target.value)} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="image_url" sm={2}>File</Label>
                        <Col sm={10}>
                            <Input type="file" name="file" id="image_url" value={image_url} onChange={({ target }) => setImage(target.value)} />
                            <FormText color="muted">
                                Seleccione una imagen.
                            </FormText>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Button disabled={validForm()} color="primary">Guardar</Button>
                    </FormGroup>
                </Form>

            </Container>
            {/* {JSON.stringify(postSaveModule)} */}
        </div>
    );
}
export default PrivateSavePost;