import "../styles/Footer.css"
const Footer = () => {
    return ( 
        <footer>
            <div className="footer-infos">
            <div className="logo">
                <h2>About Us</h2>
                <p>Ghaith is a nonprofit organization dedicated to prodive a space for donors to contribute to the most urgent cases in need. </p>
            </div>
            <div className='contact-infos'>
            <h2>Contact Us</h2>
                <ul>
                    <li>Bab Ezzouar, Alger 16042, Algeria</li>
                    <li>contact.gaith@gmail.com</li>
                    <li>(213) 799 78 27 60</li>
                </ul>
            </div>
            <div className='sm-links'>
            <h2>Stay Up to date</h2>
                <ul>
                    <li><a href="https://www.linkedin.com/company/gaith-%D8%BA%D9%8A%D8%AB/" target='_blank'>Linkedin</a></li>
                    <li><a href="http://instagram.com/ghaith.organization" target='_blank'>Instagram</a></li>
                </ul>
            </div>
            </div>
            <span>© 2023 Ghaith, All Rights Reserved</span>
        </footer>
     );
}
 
export default Footer;