import { Suspense, useEffect,useState } from "react";
import axios from 'axios'
import CaseCard from "./CaseCard.jsx"
import Loading from '../components/Loading.jsx'
import '../styles/cases.css'
const Cases = () => {
    const [cases,setCases] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        const endpoint = "http://ec2-13-48-30-207.eu-north-1.compute.amazonaws.com:3100/v1/cases/all"
        const fetchCases = async () => {
          const res = await axios.get(endpoint,{signal})
            setCases(res.data.data);
          return abortController.abort();
        }
        fetchCases();
        
      }, [cases])
    return ( 
        <section className="cases-list">
            <h2 className="head-title"> إكتشف أزيد من {cases.length} حالة موجودة على المنصة <span>🌱</span> </h2>
           <section className="cases">
           <Suspense fallback={<Loading/>}>
                {cases == null || [] ? cases?.map(caseItem => (
                    <CaseCard caseItem={caseItem} key={caseItem._id} />)) : <Loading/>}
                </Suspense>
           </section>
        </section>
     );
}
 
export default Cases;
<section className="cases-list">
    <h2></h2>
</section>