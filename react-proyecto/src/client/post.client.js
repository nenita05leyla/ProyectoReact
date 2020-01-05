import { API_HOST } from './config';

/**
 * Debe ser method : GET si no crea el registro.
 */
export const findAll = () => {
    return fetch(`${API_HOST}/api/post`, {
            method: 'GET', // or 'PUT'
            //body: JSON.stringify(), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        //.catch(error => console.error('Error:', error))
        //.then(response => console.log('Success:', response));
        
}


export const findById = (id) => {
    const token = localStorage.getItem('token');
    return fetch(`${API_HOST}/api/post/${id}`, {
        method: 'GET', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(res => res.json())
};


/**
 * Guardar registro
 * Metodo POST 
 * @param {*} post 
 */
export const save = (post) => {
    const token = localStorage.getItem('token');
    return fetch(`${API_HOST}/api/post`, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(post),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(res => res.json())
};