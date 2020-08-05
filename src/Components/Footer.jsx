import React from 'react';
import { Container } from 'react-grid-system';
const Footer= () => {
    return(
   <>
     <Container>
    <footer>
    <img className="img-fluid footer-logo" src={require('../images/minalog.png')}></img>
    <p>Phone : 310 741 1445</p>
    <p>Apricopt. All right reserved</p>
    </footer>
    </Container>
   </>
    )
}
export default Footer;