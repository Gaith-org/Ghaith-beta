import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import '../styles/case.css'

const Case = ({caseItem}) => {
    return ( 
   
    <article className="Case">
        <section className="Desc">
            <VolunteerActivismIcon variant='filled' sx={{color: 'white', fontSize:60}}/>
            <h2>{caseItem.Name}</h2>
            <p>{caseItem.Description}</p>
            <div className="tags">
            <span>{caseItem?.Urgency == true ? <p className='urgent-tag'>عاجلة</p> : null}</span>
            <span>{caseItem?.Completion == false ? <p className='complete-tag'>غير مكتملة</p> : null}</span>
            </div>
        </section>
        <section className="content">
            <div className="info head">
                <h2>التفاصيل</h2>
                <h2>{caseItem.Case_Number}</h2>
            </div>
            <div className="info">
                <h2 className='title'>الصنف</h2>
                <h2>{caseItem.Categorie}</h2>
            </div>
            <div className="info">
                <h2 className='title'>الموقع</h2>
                <h2>{caseItem.Wilaya}</h2>
            </div>
            <div className="info">
                <h2 className='title'>المبلغ</h2>
                <h2>{caseItem.Amount} DZD</h2>
            </div>
            <div className="info">
                <h2 className='title'>رقم الحساب</h2>
                <h2>{caseItem.CCP}</h2>
            </div>
            <div className="info">
                <h2 className='title'>الشريك المنفذ</h2>
                <h2> {caseItem.Partner ? caseItem.Partner : "لا يوجد"} </h2>
            </div>
          <button className="donate-btn" type="submit">تسجيل التبرع</button>
        </section>
    </article>
     );
}
 
export default Case;