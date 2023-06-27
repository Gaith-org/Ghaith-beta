import { useState, useEffect } from 'react'
import axios from 'axios'
import Bg from '../assets/Hero-Background.jpg'
import Verse from "../assets/lntnalo-ayah.svg"
import CaseCard from "./CaseCard.jsx"
import Features from '../components/Feature'
import '../styles/Home.css'


const Home = () => {
const [cases,setCases] = useState([]);
const [total,setTotal] = useState();

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        const endpoint = "https://ghaith-api.onrender.com/"
        const fetchCases = async () => {
          const res = await axios.get(`${endpoint}/v1/cases/all`,{signal})
          const recent= res.data.data.slice(0,3);
            setCases(recent);
            setTotal(res.data.data.length)
          return abortController.abort();
        }
        fetchCases()
      }, [])

    return ( 
    <main>
        <section className="wrapper">
            <img src={Bg} className='hero-img flex-1' alt="Man holding a plant" loading='lazy' />
            <div className="slogan">
            <h2>بيت مال المسلمين للقرن الواحد و العشرين</h2>
            <p>قال رسول الله صلى الله عليه وسلم :مَن نَفَّسَ عن مُؤْمِنٍ كُرْبَةً مِن كُرَبِ الدُّنْيَا، نَفَّسَ اللَّهُ عنْه كُرْبَةً مِن كُرَبِ يَومِ القِيَامَةِ، وَمَن يَسَّرَ علَى مُعْسِرٍ، يَسَّرَ اللَّهُ عليه في الدُّنْيَا وَالآخِرَةِ، وَمَن سَتَرَ مُسْلِمًا، سَتَرَهُ اللَّهُ في الدُّنْيَا وَالآخِرَةِ، وَاللَّهُ في عَوْنِ العَبْدِ ما كانَ العَبْدُ في عَوْنِ أَخِيهِ .</p>
            <br></br>
            <p className='p-desc'> نؤمن ان الخير مزال باقيا و أن هنالك العديد من الأشخاص بحاجة إلى يد العون, لهذا جاءت منصة غيث: أول منصة إلكترونية للتبرعات و العمل الخيري في الجزائر </p>
            </div>
        </section>
        <section className='cases-section'>
            <h1>تعرف على أبرز فرص التبرع الموجودة على منصتنا</h1>
            <div className="cards">
            {cases == null || [] ? cases?.map(caseItem => (
          <CaseCard caseItem={caseItem} key={caseItem._id} />)) : <h2>'لا يوجد أي حالات '</h2>}
            </div>
        </section>
        <section className="features">
            <h2>مالذي يميز منصتنا عن غيرها ؟</h2>
            <Features/>
        </section>
        <section className="cta">
            <h2>بعطائكم يستمر الإحسان</h2>
            <div className="cta-stats">
              <div className="wilayas">
                <h1>58</h1>
                <p>ولاية تصلها التبرعات</p>
              </div>
              <div className="amount">
                <h1>{total}</h1>
                <p>حالة معروضة على المنصة</p>
              </div>
              <div className="donors">
                <h1>11</h1>
                <p>محسن ساهم بتفريج الكرب</p>
              </div>
              <div className="categories-num">
                <h1>4</h1>
                <p>فئات مختلفة </p>
              </div>
            </div>
          </section>
        <section className="Quran-verse">
        <img src={Verse} alt="لن تنالوا البر حتى تنفقوا مما تحبون"/>
        </section>
    </main> 
    );
}
 
export default Home;