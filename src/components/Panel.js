import "bootstrap/dist/css/bootstrap.min.css";
import "../css/App.css";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

const Panel = () => {
  return (
   <div className="mainForm">
        <div className="title">
            <h2>Welcome To <font weight="bold"color="red"> Moroccan Bikers</font> <br /> Sign in | Sign up </h2>
        </div>
        <div className="signinForm">
            <label className="label" htmlFor="input">Username</label>
            <input className="input" type="text" placeholder="Ex: BikerOne22" title="First Name" />
            <label className="label" htmlFor="input">Last Name:</label>
            <input className="input" type="password" placeholder="Enter you passphrase" title="Last Name" />
            <div className="buttons">
                <Button className="btn1" variant="success">Connect</Button>
            </div>
        </div>
        <div className="signupForm">
            <label className="label" htmlFor="input">Username :</label>
            <input className="input" type="text" placeholder="Ex: BikerOne22"  />
            <label htmlFor="input" className="label">Identity Card</label>
            <input type="text" className="input" placeholder="EX: BE45789" />
            <label className="label" htmlFor="input">E-mail</label>
            <input className="input" type="email" placeholder="example@domain.com" />
            <label htmlFor="input" className="label">Enter Password</label>
            <input className="input" type="password" placeholder="Enter password"/>
            <label className="label" htmlFor="input">Confirm Password</label>
            <input className="input" type="password" placeholder="Re-type password" />
            <div className="buttons">
                <Button className="btn2" variant="danger">Cancel</Button>
                <Button className="btn3" variant="success">Register</Button>
                <p className="small-p">By registering your accepting our terms & conditions policies</p>
            </div>
        </div>
   </div>
  );
};
export default Panel;
