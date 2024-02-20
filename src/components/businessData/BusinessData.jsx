import { useEffect } from 'react';
import { observer } from 'mobx-react';
import { fetchBusinessData } from '../../server/server';
import dataStore from '../../server/dataStore';
import { Link } from 'react-router-dom';
import "./business.css";

const BusinessData = observer(() => {

  useEffect(() => {
    fetchBusinessData();
  }, []);

  return (
<>
<div className='content'>

    <div className='fixed'>
   
    {Object.entries(dataStore.businessData).map(([label, value]) => (
      <div key={label} className='business-item'>
        <div >{value}</div>
      </div>
    ))}
  </div>
  {dataStore.isLogin?<div className="links">
    <nav></nav>
    <Link to="edit" className="link">עריכת פרטים</Link>
    
    <nav></nav>
    <Link to="meetings" className="link">פגישות</Link>
    <nav></nav>
    <Link to="service" className="link">רשימת טיולים </Link>
    </div>:null}
  </div>
  </>
  );
});

export default BusinessData;
