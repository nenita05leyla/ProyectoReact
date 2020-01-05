import React, { useState, useEffect } from 'react';
 
import { findById } from '../../client/post.client';
import './PostDetail.css'

const PostDetail = (props) => {
    const { id } = props.match.params;
    const [post, setPost] = useState({});

    useEffect(() => {
        findById(id).then((response) => {
            //const posts = response.data.data;
            const posts = response.data;
            //console.log(posts.description);
            setPost(posts);

        }).catch((err) => {
            debugger;
            console.log(err);
        })
        return () => {
            // alert('Chao private');
        }
    }, []);

    return (
        <div className="text-center">
            <h1>{post.title}</h1>
            <img width="360px" src={post.image_url}/>
            <br></br>
            <div>
                <p>{post.description}</p>
            </div>
        
        </div>

    );
};

export default PostDetail;