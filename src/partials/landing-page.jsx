import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Header from './header';
import Footer from './footer';
import { useState } from 'react';
import Linkedin from '../assets/linkedin.svg';
import {Link} from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const landingPage = () => {
 const form = useRef();
 const [msg,setMessage] = useState(false);
 const [email,setEmail]= useState();
 const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gf6gpdf','template_u1byq5k', form.current, 'xwitWHV6S5YYIbc7P')
      .then((result) => {
          setMessage(true);
          setEmail('');
      }, (error) => {
          console.log(error.text);
      });
  };
  const dismiss = () =>{
    setMessage(false);
  }
    return ( 
        // lazyloading images optimizes the web app performance and increases SEO
            <main>
            <Header/>
                <section className="landing">
                   <h1 className='coming-soon'>Coming Soon !</h1>
                   <h1 className='description'>بيت مال المسلمين للقرن الواحد و العشرين , أدخل بريدك الإلكتروني و كن أول من يعلم بإطلاق منصتنا !</h1> 
                   <form ref={form} onSubmit={sendEmail}>
                      <input type="email" id='email' name="user_email"value={email} onChange={(e) => setEmail(e.target.value)} placeholder='البريد الإكتروني' required/>
                      <input type="submit" id='button' value="إرسال" />
                    </form>
                   { msg && <span onClick={dismiss} className='message'><strong>تم إرسال طلبك بنجاح !</strong> (إضغط لإخفاء الإشعار)</span>}
                   <div className="sm">تابعونا على <a href="https://www.linkedin.com/company/gaith-%D8%BA%D9%8A%D8%AB/"><img src={Linkedin} alt="linkedin-logo"/></a></div>
                </section>
                <Footer/>
            </main>
       
     );
}
 
export default landingPage;