import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { findAllAsyncActionCreator } from '../../store/modules/post/actions';

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardFooter,
  Row, Col,
} from 'reactstrap';

import './HomeComp.css';


const HomeComp = (props) => {
  const store = useSelector(store => store.post.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findAllAsyncActionCreator());
  }, []);

  // useEffect(() => {
  //   if(store.auth.isLogin) {
  //       props.history.push('/private/home');
  //   }
  // }, [store.auth.isLogin, props]);

  return (
    <div className="homeComp">
      <div className="col-md-offset-4 text-center">
        <h1>Ideas para tu closet</h1>
        <br></br>
      </div>
      <Row>
        {store.data.slice(0, 3).map((post) => (
          <Col key={post.id}>
            <Card>
              <CardBody>
                <CardImg top width="100%" src={post.image_url} alt="Card image cap" />
                <CardTitle><h4>{post.title}</h4></CardTitle>
                <CardText>{post.description}</CardText>
                <CardText>
                  {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                </CardText>
              </CardBody>
              <CardFooter>
                <Link to={`/post/${post.id}`}>Detalle</Link>
              </CardFooter>
            </Card>
          </Col>
        ))}
      </Row>
      {/*        
        {this.state.image ? <img src={`data:image/png;base64,${this.state.image}`}/>: ''}
      <pre>
        {JSON.stringify(store, undefined, 2)}
      </pre> */}

    </div>

  );
};


export default HomeComp;