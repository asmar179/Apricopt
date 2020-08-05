import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
const Contactus= () => {
    return(
   <>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
    <Container>
    <form className="form">
        <Container className="padd">
    <Row>
        <Col sm={8}>
            <br></br>
            <h4 className="write">Write to us:</h4>
            <br></br>
            <Row>
            <Col sm={6}>
            <div  className="form-group">
    <input type="email"  className="form-control input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Full Name" />
  </div>
            </Col>
            <Col sm={6}>
            <div  className="form-group">
    <input type="email"  className="form-control input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address" />
     </div>
            </Col>
            </Row>
            <Row>
            <Col sm={6}>
            <div  className="form-group">
    <input type="email"  className="form-control input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Contact Number" />
  </div>
            </Col>
            <Col sm={6}>
            <div  className="form-group">
    <input type="email"  className="form-control input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Company Name" />
  </div>
            </Col>
            </Row>
          <Row>
              <Col sm={12}>
  <textarea class="form-control" rows="5" id="comment" placeholder="Your message"></textarea>
  <br></br>
  <button type="submit" className="btn btn-primary">Send Message</button>
              </Col>
          </Row>
        </Col>
        <Col sm={4}>
            <br></br>
            <h4 className="right">Contact information</h4>
            <br></br>
            <p className="right">101 California Av 302 Santa</p>
            <p className="right">Monica ca 90403</p>
            <br></br>
            <p className="right">Phone : 310 741 1445</p>
            <hr className="hei"></hr>
            </Col>
            
  </Row>
  </Container>
</form>

    </Container>
    <br></br>
    <br></br>
    <br></br>
   </>
    )
}
export default Contactus;