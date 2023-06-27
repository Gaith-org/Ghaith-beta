import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/contact.css'

const ContactForm = () => {
  const form = useRef()
  const schema = yup.object().shape({
    name: yup.string().required('الإسم مطلوب').min(4,'الإسم يجب ان يكون أطول من 4 أحرف'),
    email: yup.string().email('الإيمايل غير صالح').required('الإيمايل مطلوب'),
    message: yup.string().required('الرجاء كتابة رسالتك').min(10,'الرسالة يجب ان تكون أطول من 10 أحرف'),
  });

  const { register, handleSubmit, formState:{ errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });


  const sendEmail = (e) => {
    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const showToast = () => {
    toast.success('تم الإرسال بنجاح', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      className:'toast'
      });
  }

  const onSubmit = (e) => {
    sendEmail();    
    showToast();
    reset(); // Reset the form fields after submission
  };

  

  return (
    <section className='contact'>
      <h2>منصتنا جديدة , يمكنك مساعدتنا لتصبح أفضل !</h2>
      <p> لديك اقتراح او انتقاد بخصوص المنصة؟ تتمنى وجود خاصية معينة؟ نسعد بقراءة جميع الأراء بهدف تحسين خدمتنا و تطوير مستوى العمل الخيري</p>
   <section className="contact-section">
   <form  ref={form} className="form-elements" onSubmit={handleSubmit(onSubmit)}>
        <div className='element'>
          <label htmlFor="name">الإسم:</label>
          <input type="text" {...register("name")} placeholder='أدخل الإسم' />
          <p className='error'>{errors.name?.message}</p>
        </div>

        <div className='element'>
          <label htmlFor="email">البريد الإلكتروني:</label>
          <input type="email" {...register("email")} autoComplete='false' placeholder='أدخل البريد الإلكتروني'/>
          <p className='error'>{errors.email?.message}</p>
        </div>

        <div className='element'>
          <label htmlFor="message">رسالتك:</label>
          <textarea rows={3} {...register("message")}  placeholder='أكتب رسالتك'/>
          <p className='error'>{errors.message?.message}</p>
        </div>

        <button type="submit" className='submit-btn'>إرسال</button>
      </form>
      <ToastContainer/>
     </section>
    </section>
  );
};

export default ContactForm;
