import flash from "../assets/Flash On.svg"
import categories from "../assets/Multiple Pages Mode.svg"
import ux from "../assets/Web.svg"
import security from "../assets/Web Shield.svg"
import "../styles/feature.css"
const Features = () => {
    return ( 
       <div className="features-cards">
        <section className="box">
            <div className="icon">
                <img src={flash} alt="flash logo indicating speed"/>
                </div>
                <h1>السرعة</h1>
                <p>توفر المنصة خيار التبرع بإستعمال
                البطاقة الذهبية, التبرع السريع و التزويد
                بمعلومات الحالة بشكل كامل من أجل ضمان
                إرسال و استقبال المبالغ لحظيًا و بكل سهولة.</p>
        </section>
        <section className="box">
            <div className="icon">
                <img src={categories} alt="flash logo indicating speed"/>
                </div>
                <h1>تنوع الفئات</h1>
                <p> توفر المنصة تصنيفات مختلفة حسب الحالات
                الموجودة ومن أبرزها: الأيتام, الأرامل و الحالات
                الصحية, يمكنك عرض الحالات باستخدام 
                التصنيف او البحث عنها بالإسم.</p>
        </section>
        <section className="box">
            <div className="icon">
                <img src={ux} alt="flash logo indicating speed"/>
                </div>
                <h1>سهولة الإستخدام</h1>
                <p>تم تطوير المنصة باستعمال أحدث إطارات
                العمل لتتوافق مع المعايير المتقدمة وهذا
                لضمان تجربة سلسة و توفير الخدمة بشكل
                ممتاز.</p>
        </section>
        <section className="box">
            <div className="icon">
                <img src={security} alt="flash logo indicating speed"/>
                </div>
                <h1>أمن البيانات</h1>
                <p>توفر المنصة خيار التبرع بإستعمال
                البطاقة الذهبية, التبرع السريع و التزويد
                بمعلومات الحالة بشكل كامل من أجل ضمان
                إرسال و استقبال المبالغ لحظيًا و بكل سهولة.</p>
        </section>
       </div>
            
        );
}
 
export default Features;