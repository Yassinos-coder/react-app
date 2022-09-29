import '../css/App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faDiscord, faWhatsapp,faTwitter } from '@fortawesome/free-brands-svg-icons'


const Footer = ()  => {
    return (
        <div className="Footer">
            <footer>
                <div className="f-left">
                    <p className='f-left-p'>Moroccan Bikers</p>
                </div>
                <div className="f-right">
                    <p className='p-footer'>No matter how bad your day is your bike will always make you feel better.</p>
                    <div className="f-fa">
                        <p className='f-p'>Join us !</p>
                        <FontAwesomeIcon className='fa facebook' icon={faFacebook}></FontAwesomeIcon>
                        <FontAwesomeIcon className='fa discord'  icon={faDiscord}></FontAwesomeIcon>
                        <FontAwesomeIcon className='fa whatsapp' icon={faWhatsapp}></FontAwesomeIcon>
                        <FontAwesomeIcon className='fa twitter'  icon={faTwitter}></FontAwesomeIcon>
                    </div>
                </div>
            </footer>
        </div>
    )   
}

export default Footer