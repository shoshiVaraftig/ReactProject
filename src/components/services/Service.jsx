import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import dataStore from "../../server/dataStore";
import { getService } from "../../server/server";
import FormAddService from "./FormAddService";
import { observer } from 'mobx-react';
import AddMeetForm from '../meeting/AddMeetForm';
import "../pictures/tourDetails.css";
import ramonImage from './p/ramon.jpg';
import culaImage from './p/cula.jpg';
import givatImage from './p/givat.jpg';
import "./service.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const Service = (observer(() => {
  const [selectmeet, setSelctMeeting] = useState(null)
  useEffect(() => {
    getService()
  }, []);
 const[open,setOpen]=useState(false);
  return (
    <>
    <div className="ser">
    <div className="bolds">:מסלולים נבחרים</div> 
      {services.map((item) => (
        <Grid item key={item.name}>
          <Grid container direction="column" alignItems="center" className="typ">
            <div className="bold">:המסלול</div>
            <div>{item.name}</div>
            <div>{item.description}</div>
            <div className="imgdiv">{item.img}</div>

            {!dataStore.isLogin ? <button onClick={() => setSelctMeeting(item.name)} className="link">קביעת תאריך</button> : null}
            {selectmeet === item.name ? <AddMeetForm serviceitem={item} setSelct={()=>setSelctMeeting(null)}/> : null}
          </Grid>
        </Grid>
        
      ))}
    
      {dataStore.services.map((item) => (
        <Grid item key={item.name}>
          <Grid container direction="column" alignItems="center" className="typ">
            <div className="bold">:המסלול</div>
         

            <div >{item.name}</div>
            <div>{item.description}</div>
            <div className="imgdiv">
  <img src={item.img}  />
</div>
           
            {!dataStore.isLogin ? <button onClick={() => setSelctMeeting(item.name)}className="link" >קביעת תאריך  </button> : null}
            {selectmeet === item.name ? <AddMeetForm serviceitem={item} setSelct={()=>setSelctMeeting(null)}/> : null}
          </Grid>
        </Grid>
        
      ))}
      <br/><br/>
      {dataStore.isLogin ? <Link onClick={()=>setOpen(true)} className="link"> <FontAwesomeIcon icon={faPlus} />
</Link> : null}
     
      
      {/* {open&& <FormAddService />} */}
      {open && <FormAddService handleClose={() => setOpen(false)} />}
      
     {dataStore.isLogin?
     <a href="#" className="link"><FontAwesomeIcon icon={faHome} />
     </a>: null}
  
     </div>
    </>
  )
}))

export default Service
const services = [

  {
    name: "מכתש רמון",
    description: "המבנה הייחודי של הרכסים בהם נוצרו מכתשים, יוצר תופעות ייחודיות ומעניינות והטיול באזור הוא מעין מסע צבעוני אל בטן האדמה",
    img:<img src={ramonImage} alt="מכתש רמון" className="img"/> 
  },
  {
    name: "עמק החולה",
    description: "אתר בעל חשיבות עולמית לעופות מים ובית גידול לח חשוב ביותר במזרח התיכון",
    img:<img src={culaImage} alt="עמק החולה" className="img"/> 
  },
  {
    name: "גבעת התחמושת",
    description: " אתר הנצחה ממלכתי לציון שחרורה ואיחודה של ירושלים במלחמת ששת הימים ",
    img:<img src={givatImage} alt="גבעת התחמושת" className="img"/> 
  }
];
