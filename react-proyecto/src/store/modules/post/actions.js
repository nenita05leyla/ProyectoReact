
import { findAll, findById , save } from '../../../client/post.client';

import {
    POST_FIND_ALL_NOK,
    POST_FIND_ALL_OK,
    POST_FIND_ALL_START,
    POST_FIND_BY_ID_START,
    POST_FIND_BY_ID_OK,
    POST_FIND_BY_ID_NOK,

    POST_SAVE_NOK,
    POST_SAVE_OK,
    POST_SAVE_START,
} from './const';


/**
 * Listado de todos los post 
 */
export const findAllAsyncActionCreator = () => {
    return (dispatch, getStore) => {
        dispatch(findAllStartActionCreator());
        findAll()
            .catch(error => {
                dispatch(findAllNokActionCreator('Error:', error))
            })
            .then(response => {
                console.log(response);
                if (response === undefined) {
                    dispatch(findAllNokActionCreator('Error: generico'))
                }
                else {
                    if (response.message !== 'success') {
                        dispatch(findAllNokActionCreator('Error: generico'))
                    } else {
                        dispatch(findAllOkActionCreator(response.data))
                    }
                }

            });
    }
}

const findAllStartActionCreator = () => ({
    type: POST_FIND_ALL_START,
    payload: null,
});

const findAllOkActionCreator = (data) => ({
    type: POST_FIND_ALL_OK,
    payload: data,
});

const findAllNokActionCreator = (errorMessage) => ({
    type: POST_FIND_ALL_NOK,
    payload: errorMessage,
});


/**
 * Busqueda por ID del Post 
 * @param {*} id 
 */

export const findByIdAsyncActionCreator = (id) => {
    return (dispatch, getStore) => {
        dispatch(findByIdStartActionCreator());

        findById(id)
            .catch(error => {
                dispatch(findByIdNokActionCreator('Error:', error))
            })
            .then(response => {
                debugger
                if (response === null) {
                    dispatch(findByIdNokActionCreator('Error: generico'))
                }
                else {
                    if (response.message !== 'success') {
                        dispatch(findByIdNokActionCreator('Error: generico'))
                    } else {
                        dispatch(findByIdOkActionCreator(response.data))
                    }
                }


            });
    }
}

// find by id
const findByIdStartActionCreator = () => ({
    type: POST_FIND_BY_ID_START,
    payload: null,
});

const findByIdOkActionCreator = (data) => ({
    type: POST_FIND_BY_ID_OK,
    payload: data,
});

const findByIdNokActionCreator = (errorMessage) => ({
    type: POST_FIND_BY_ID_NOK,
    payload: errorMessage,
});




/**
 * Guardar post
 * @param {*} post 
 */
export const saveAsyncActionCreator = (post) => {
    return (dispatch, getStore) => {
        dispatch(saveStartActionCreator());

        save(post)
            .catch(error => {
                dispatch(saveNokActionCreator('Error:', error))
            })
            .then(response => {
                if (response.message !== 'success') {
                    dispatch(saveNokActionCreator('Error: generico'))
                } else {
                    dispatch(saveOkActionCreator(response.data))
                }
            });
    }
}

const saveStartActionCreator = () => ({
    type: POST_SAVE_START,
    payload: null,
});

const saveOkActionCreator = (data) => ({
    type: POST_SAVE_OK,
    payload: data,
});

const saveNokActionCreator = (errorMessage) => ({
    type: POST_SAVE_NOK,
    payload: errorMessage,
});