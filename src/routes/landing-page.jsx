import { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import Header from '../partials/header';
import Footer from '../partials/footer';
import Linkedin from '../assets/linkedin.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const landingPage = () => {
 const form = useRef();
 const [email,setEmail]= useState('');
 const showToast = () => {
  toast.success('تم تسجيل طلبك بنجاح', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
}
 const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gf6gpdf','template_u1byq5k', form.current, 'xwitWHV6S5YYIbc7P')
      .then((result) => {
          setEmail('');
          showToast();
      }, (error) => {
          console.log(error.text);
      });
  };
    return ( 
            <>
            <head>
              <meta charset="UTF-8" />
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <meta name="description" content="ghaith is a nonprofit organization that seeks to connect donors with some of the most emergency cases " />
              <meta name="keywords" content="nonprofit,غيث,Ghaith" />
              <title>Ghaith - The Nonprofit For Everyone</title>
            </head>
            <main>
                <section className="landing">
                   <h1 className='coming-soon'>Coming Soon !</h1>
                   <h1 className='description'>بيت مال المسلمين للقرن الواحد و العشرين , أدخل بريدك الإلكتروني و كن أول من يعلم بإطلاق منصتنا !</h1> 
                   <form ref={form} onSubmit={sendEmail}>
                      <input type="email" id='email' name="user_email"value={email} onChange={(e) => setEmail(e.target.value)} placeholder='البريد الإكتروني' required/>
                      <input type='submit' id='button' value="إرسال" />
                    </form>
                    <ToastContainer />
                   <div className="sm">تابعونا على <a href="https://www.linkedin.com/company/gaith-%D8%BA%D9%8A%D8%AB/" target='_blank'><img src={Linkedin} alt="linkedin-logo"/></a></div>
                </section>
            </main>
            </>
       
     );
}
 
export default landingPage;