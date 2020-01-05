import React from 'react';
import { Link } from 'react-router-dom';
import HomeComp from '../../components/home-comp/HomeComp';
import './Home.css'

const Home = () => {
    return (
       
        <div className="home">
            <HomeComp/>    
        </div>
        
    );
}
export default Home;