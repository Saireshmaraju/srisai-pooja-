import React from 'react';
import {Container,Table} from 'react-bootstrap';


const footer = () => {
    return (
        <>
        <footer className="text-white text-center text-lg-start bg-primary">
    {/* <!-- Grid container --> */}
    <Container className="p-4">
      {/* <!--Grid row--> */}
      <div className="row mt-4">
        {/* <!--Grid column--> */}
        <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4">ABOUT COMPANY</h5>

          <p>
            * The Holy Rivers Ganga, Godavari, Narmada, Kaveri, Krushna, Brahmaputra and Yamuna are considered the seven Holy Rivers. Water from all these seven rivers is collected in the ritualistic pot, which is used during ritualistic worship. ‘Water from these seven Holy Rivers has the ability to attract and transmit the frequencies of Saptadevtas (seven Superior Deities). 
          </p>

          <p>
            *  India is known as the most sattva predominant place on earth because it is the only country through which all these seven rivers flow. Many yogis have undertaken penance on the banks of these rivers so as to acquire the Principles of the Saptadevtas in the Universe. This water from the ritualistic pot is used for performing the abhishek. The subtle sound frequencies from the ritualistic pot absorb the frequencies of the Saptadevtas in the water and effectively transmit them into the atmosphere.
          </p>

          <div className="mt-4">
            {/* <!-- Facebook --> */}
            <a href={"/#"} type="button" className="btn btn-floating btn-transparent btn-lg"><i className="fab fa-facebook-f"></i></a>
            {/* <!-- Dribbble --> */}
            <a href={"/#"} type="button" className="btn btn-floating btn-transparent btn-lg"><i className="fab fa-dribbble"></i></a>
            {/* <!-- Twitter --> */}
            <a href={"/#"} type="button" className="btn btn-floating btn-transparent btn-lg"><i className="fab fa-twitter"></i></a>
            {/* <!-- Google + --> */}
            <a href={"/#"} type="button" className="btn btn-floating btn-transparent btn-lg"><i className="fab fa-google-plus-g"></i></a>
            {/* <!-- Linkedin --> */}
          </div>
        </div>
        {/* <!--Grid column--> */}

        {/* <!--Grid column--> */}
        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4 pb-1">Search something</h5>

          <div className="form-outline form-white mb-4">
            <input type="text" id="formControlLg" className="form-control form-control-lg" />
            <label className="form-label" for="formControlLg">Search</label>
          </div>

          <ul className="fa-ul" style={{"margin-left": "1.65em"}}>
            <li className="mb-3">
              <span className="fa-li"><i className="fas fa-home"></i></span><span className="ms-2">Sai.reshma Raju</span>
            </li>
            <li className="mb-3">
              <span className="fa-li"><i className="fas fa-envelope"></i></span><span className="ms-2">sairajuusha1998@gmail.com</span>
            </li>
            <li className="mb-3">
              <span className="fa-li"><i className="fas fa-phone"></i></span><span className="ms-2">+91-7780377642</span>
            </li>
          </ul>
        </div>
        {/* <!--Grid column--> */}

        {/* <!--Grid column--> */}
        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4">Opening hours</h5>

          <Table classNameName="text-center text-white">
            <tbody className="fw-normal">
              <tr>
                <td>Mon - Thu:</td>
                <td>8am - 9pm</td>
              </tr>
              <tr>
                <td>Fri - Sat:</td>
                <td>8am - 1am</td>
              </tr>
              <tr>
                <td>Sunday:</td>
                <td>9am - 10pm</td>
              </tr>
            </tbody>
          </Table>
        </div>
        {/* <!--Grid column--> */}
      </div>
      {/* <!--Grid row--> */}
    </Container>
    {/* <!-- Grid container --> */}

    {/* <!-- Copyright --> */}
    <div className="text-center p-3" style={{"background-color": "rgba(0, 0, 0, 0.2)"}}>
      © 2021 Copyright:
      <a className="text-white" href="https://mdbootstrap.com/">srisaipoojastores.com</a>
    </div>
    {/* <!-- Copyright --> */}
  </footer>
        </>
    )
}


export default footer