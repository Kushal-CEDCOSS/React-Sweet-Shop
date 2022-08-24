import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from './Contexts/Main';
import Modal from '@mui/material/Modal';
import './Home.css';
import Navbar from './Navbar';

const Home = () => {
  
  const context = useContext(MyContext);

  const navigate = useNavigate();


  const sendToProducts = () => {
    navigate('/products');
  }

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    setTimeout(()=>{context.offersModal[1](true)}, 3000)
  },[])

  useEffect(()=>{
    if(context.changeWithCriteria[0] === "")
    {
      return;
    }
    else{
      navigate('/products');
    }
  }, [context.changeWithCriteria[0]])
  
  return (
    <div className="Home">
        <Navbar />
        <div className="entryText">
          <h1 className='animate__animated animate__fadeInLeft animate__fast'>Neelkanth Sweets</h1>
          <p className='animate__animated animate__fadeIn animate__slower'>Since the last 30 years, Neelkanth Sweets has been offering 365 varieties of Sweets and Namkeens to its customers all across the globe. We, at Neelkanth Sweets, have always cared for our customers and at same time we have been  very conscious of our reputation. We always strive to give our customers the best value for their money with our superb quality products.</p>
        </div>
        <h1 className="midText animate__animated animate__fadeIn animate__slower">Sabse Khaas Rishton Ki Mithaas</h1>
        <div className="midArea">
          <div className="midCard">
            <img src="https://i0.wp.com/blog.bigbasket.com/wp-content/uploads/2019/08/traditional-Indian-sweets.jpg?resize=1024%2C683&ssl=1" alt="" />
            <button onClick={()=>{context.changeWithCriteria[1]("Rakhi Mithai")}}>Rakhi Mithai</button>
          </div>
          <div className="midCard">
            <img src="https://i.pinimg.com/236x/0a/18/b0/0a18b0148455715a25663d83a725beed.jpg" alt="" />
            <button onClick={()=>{context.changeWithCriteria[1]("Ladoos")}}>Exotic Ladoos</button>

          </div>
          <div className="midCard">
            <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/11/07/752250-kaju-barfi.jpg" alt="" />
            <button onClick={()=>{context.changeWithCriteria[1]("Kaju Mithai")}}>Kaju Mithai</button>
          </div>
        </div>

        <button className="explore" onClick={sendToProducts}>Explore More Delicacies</button>
        <div className="bottomArea">
          <img src="https://i.pinimg.com/564x/a7/dc/30/a7dc3032ffdea93557ea171e507f1bee.jpg" alt="" />
          <div className="centerContainer">
            <h1>Why We?</h1>
            <p>We, at Neelkanth Sweets, have always cared for our customers and at same time we have been  very conscious of our reputation. We always strive to give our customers the best value for their money with our superb quality products and believe in creating relationships with them for life.</p>
          </div>
          <img src="https://i.pinimg.com/564x/a7/dc/30/a7dc3032ffdea93557ea171e507f1bee.jpg" alt="" />
        </div>

        <Modal open={context.offersModal[0]} onClose={()=>{context.offersModal[1](false)}}
        >
          <div className="entryModal">
            <h1>Get 50% OFF on your first order!!!</h1>
          </div>
        </Modal>        
    </div>
  )
}

export default Home