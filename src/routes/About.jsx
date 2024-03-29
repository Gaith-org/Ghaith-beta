import '../styles/about.css'
import Verse from '../assets/ahseno-ayah.svg'

const About = () => {
    return ( 
        <>
        <article className='article'>
            <h2 className='ehsan-slogan'>🌿 بعطائكم يستمر الإحسان </h2>
            <section className="dilemma">
                  <h2>الفكرة </h2>
                  <p>بهدف تسهيل فرصة التبرع و الحرص على السرعة في تفريج الكربة, فكرنا في فكرة منصة إلكترونية حيث يمكن وضع الطلبات من طرف الجمعيات كشركاء منفذين أو من طرف الأشخاص بشروط محددة. 
من خلال عرض الطلبات على المنصة, يصبح سهلا على الأفراد مساعدة المحتاج بشكل مباشر و فعال.</p>
            </section>
           <section className="vision">
           <h2>رؤيتنا</h2>
           <p> منذ إنشائها سنة 2022, تطمح منظمتنا إلى إتاحة و تسهيل فرص العمل الخيري من خلال إدراج التكنولوجيات الحديثة في عمليات التبرع والتطوع ضمن حياة المستخدمين, كما نسعى إلى أن نصبح أحد الرواد على المستوى القاري من خلال إبراز دور القطاع الغير ربحي و بنــــاء منظومــة فاعليــة عبــــر الشــــراكات مــــع القطاعــــات الحكوميــة والخاصة وغير الربحية.</p>
           </section>
           <section className="mission">
           <h2>رسالتنا</h2>
           <p>تسعى منظمة غيث إلى المساهمة في العمل الخيري من خلال توفير منصة إلكترونية للعمل الخيري و التبرع والمساهمة في مختلف المعضلات التي يواجهها المسلمون في حياتهم اليومية بهدف تعظيم أثر المشاريع و الخدمات التنموية وخدمة المجتمع والمساهمة في تسهيل الأعمال الخيرية من خلال تقديم الحلول التقنية المتقدمة.</p>
           </section>
           <section className="values">
           <h2>مالذي تضيفه المنصة  للمجال الخيري ؟</h2>
           <ul className='about-features'>
            <li>التبرع الإلكتروني و التبرع السريع</li>
            <li>الشفافية و سهولة الاستعمال</li>
            <li>موافقة الأحكام الشرعية و القانونية</li>
            <li>دعم الحالات المختلفة عبر كامل التراب الوطني</li>
           </ul>
           </section>
           <section className="verse">
            <img src={Verse} alt="quran verse" />
           </section>
        </article>
        </>
     );
}
 
export default About;