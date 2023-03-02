import logo from '../assets/Ghaith-logo.png'
// import LazyLoad from 'react-lazy-load'
// Lazy Loading the assets improves our web app performance and increases the SEO rate
const Header = () => {
    return (     
        <header>
           <img src={logo} alt="Ghaith-logo" loading="lazy" />
        </header>
    );
}
export default Header;