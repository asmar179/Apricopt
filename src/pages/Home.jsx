import React from 'react';
import {NavLink} from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';
const Home = () => {
    return(
   <>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <Container>
  <Row>
  <Col sm={3}></Col>
      <Col sm={6}>
          <h1 className="apricopt">Apricopt<span className="tech"> Tech</span></h1>
          <p className="para">Apricopt providing reliable, quality services and ensuring lasting customer satisfaction. Provide high-quality, cost-effective and hands-on practical assistance to all of our clients on all software development requirements.</p>
          <NavLink exact to="/See"><button className="btn-pricing">See Pricing</button></NavLink>
          </Col>
          <Col sm={3}></Col>
      </Row>
      </Container>
      <div id="demo" class="carousel slide" data-ride="carousel">
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  <br></br>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img className="img-slid" src={require('../images/slid1.png')}></img>
    </div>
    <div class="carousel-item">
    <img className="img-slid" src={require('../images/slid2.png')}></img>
    </div>
    <div class="carousel-item">
    <img className="img-slid" src={require('../images/slid3.png')}></img>
    </div>
  </div>
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
</div>
<br></br>
<br></br> 
 <Container>
    <h1 className="services">Our Services</h1>
    <br></br>
    <br></br>
    <Row>
        <Col sm={4}>
        <div className="div1">
        <h4 className="">Website Development</h4>
        <p>Getting your online presence is important these days. Get Modern web application spinning on the internet.</p>
        </div>
      </Col>
        <Col sm={4}>
            <div className="div1">
        <h4 className="">Ecommerce Store</h4>
        <p>Ecommerce store is the product where we rule the most.Set your market on the internet and join the market of future.</p>
        </div>
        </Col>
        <Col sm={4}>
        <div className="div1">
        <h4 className="">Cloud Hosting Services</h4>
        <p>Store you precious files on your very own computer running somewhere in data center.Host your website on it.One server that fullfills all your needs.</p>
        </div>
        </Col>
    </Row>
    <Row>
    <Col sm={4}>
        <div className="div1">
    <h4 className="">Mobile App Development</h4>
    <p>Having app for your bussiness is very important.Native applications to Hybrid one.   </p>
    <p></p>  
    </div>
    </Col>
    <Col sm={4}>
    <div className="div1">
    <h4 className="">Graphic Design & Video Editing</h4>
    <p>We provide complete graphic designing and video editing services for youtube channels of our customers and for other platforms.  </p>
    </div>
    </Col >
    <Col sm={4}>
    <div className="div1">
    <h4 className="">Social Media Marketing</h4>
    <p>Everyone is on social media so why not your bussiness? Our Social media experts manage all social media tasks for you.</p>
    </div>
    </Col>
    </Row>
    </Container>
     <Container>
    <h1 className="services">Features of our products</h1>
    <Row>
      <Col  sm={3}></Col>
      <Col  sm={6}>
      <p className="para">We just donot end up with a base product. 
      Our clients get some extra features on their products which provide them alot of ease in maintaining their product.</p>
      </Col>
      <Col  sm={3}></Col>
      </Row>
    </Container>
    <br></br>
    <br></br>
     <Container>
      <Row>
        <Col sm={6}>
          <p className="paragrap">PAY FOR ONE BACKEND AND USE IT ON ALL PLATFORMS</p>
          <h2 className="ant">Headless Content Managment Systems</h2>
          <p className="act">The world is moving toward future.So why don't we with every dynamic website we provide a headless CMS. One backend for all your platforms like Android , IOS , Websites and Desktop Applications.'</p>
        </Col>
        <Col sm={6}>
           <img className="img-fluid" src={require('../images/features.png')}></img>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
      <Col sm={6}>
           <img className="img-fluid" src={require('../images/features2.png')}></img>
        </Col>
        <Col sm={6}>
          <div className="div2">
          <p className="paragrap">YOUR VERY OWN SERVER RUNNING ON CLOUD</p>
          <h2 className="ant">Scalable Applications hosting .</h2>
          <p className="act">Buy your own server on platforms like Amazon Web Services, Google Cloud Platform, DigitalOcean and scale the server with your bussiness needs. Our IT experts will assist you in the whole process.</p>
          </div>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col sm={6}>
          <div className="div2">
          <p className="paragrap">WE BELEIVE IN CLIENT & CUSTOMER RELATIONSHIPS.</p>
          <h2 className="ant">We Value our customers.</h2>
          <p className="act">ven after the deployment of products. We keep in touch with our customers. Everything just turns to be as family and if they need a little change we feel happy to do it for free.

</p>
          </div>
        </Col>
        <Col sm={6}>
           <img className="img-fluid" src={require('../images/features3.png')}></img>
        </Col>
      </Row>
    </Container>
    <br></br>
<br></br> 
 <Container>
    <h1 className="test">Customer testimonials</h1>
    <Row>
      <Col  sm={3}></Col>
      <Col  sm={6}>
      <p className="para2">We are so proud to present reviews of our valued customers.</p>
      </Col>
      <Col  sm={3}></Col>
      </Row>
    </Container>
    <Container>
    <Row>
      <Col sm={4}>
       <p>- Apricopt did great job with my model agency website. Team is highly supportive and work according to my directions and bussiness needs.I highly recommend them for bussiness website. I was thrilled by the quality of support. They work reliable has no complications.</p>
       <hr className="mar"></hr>
       <span className="white">Bruno</span><span className="tag">/</span><span className="toc">toxicmodelmgmt.com</span>
      </Col>
      <Col  sm={4}>
      <p className="">- Apricopt team cares about customer satisfaction , I am really satisfied with their team work for Touch heights. I highly recommend their services.</p>
      <br></br>
      <br></br>
      <hr className="mar2"></hr>
      <span className="white">Ali Aamir</span><span className="tag">/</span><span className="toc">touchheightsconsult.com</span>
      </Col>
      <Col  sm={4}>
        <p>-experience design solar website from Apricopt, Now they are doing great job on promotion of my website.</p>
        <br></br>
        <br></br>
        <br></br>
        <hr className="mar3"></hr>
        <span className="white">Leone</span><span className="tag">/</span><span className="toc">Solarimprovements.net</span>
        </Col>
      </Row>
    </Container>
    <br></br>
    <br></br>
    <Container>
      <p className="para3">WELL HERE WE ARE</p>
      <Row>
      <Col  sm={3}></Col>
      <Col  sm={6}>
      <p className="para4">Executive Team</p>
      </Col>
      <Col  sm={3}></Col>
      </Row>
      <hr className=""></hr>
    </Container>
    <Container>
      <Row>
      <Col lg={2}  sm={2}>
      <img className="img-fluid img1" src={require('../images/img1.jpeg')}></img>
      </Col>
      <Col  lg={2}  sm={2}>
      <img className="img-fluid img1" src={require('../images/img2.jpeg')}></img> </Col>
      <Col  lg={2}  sm={2}>
      <img className="img-fluid img1" src={require('../images/img3.jpeg')}></img>
      </Col>
      <Col  lg={2}   sm={2}>
      <img className="img-fluid img1" src={require('../images/img4.jpeg')}></img>
         </Col>
      <Col  lg={2}  sm={2}>
      <img className="img-fluid img1" src={require('../images/img5.jpeg')}></img>
      </Col>
      </Row>
    </Container>
    <br></br>
    <br></br>
   </>
    )
}
export default Home;