import { useState } from "react";
import { Button, TextField} from "@mui/material";
import { addMeeting } from "../../server/server";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import './meet.css';


//import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';
 function AddMeetForm({serviceitem, setSelct}) {
  

   // const [isPopupOpen, setPopupOpen] = useState(false);
    const [meet, setMeet] = useState({
      service: serviceitem.name,
        dateTime: '',
        name: '',
        phone: '',
        email: '',
    })
 
    
    const handleChange = (event) => {
        setMeet((prevMeet) => ({
          ...prevMeet,
          [event.target.name]: event.target.value
        }));
      };
      const handleMeetChange = (event) => {
        setMeet((prevMeet) => ({
          ...prevMeet,
          dateTime: event.$d,
        }));
      }
      
    const handleSubmit = async (event) => {
      
        event.preventDefault();
      
        try {
          const response = await addMeeting({ ...serviceitem, ...meet });
        
      
          console.log(response); // Log the full response object if needed
      
          setSelct(null);
        } catch (error) {
          alert("Failed to add the meeting. Please try again.");
        }

      };
      
        return (
            <>
             {/* {isPopupOpen && (
   <BasePopup> */}
                <form onSubmit={handleSubmit} className="state">
               
                <TextField
                        name="service"
                        dir="rtl" 
                    
                        value={meet.service}
                        onChange={handleChange}
                        type="text" disabled 
                        color="warning" />
                     
                        <br /><br />
         
<LocalizationProvider
 dateAdapter={AdapterDayjs}>
                            <DateTimePicker
                               
                                name="dateTime"
                                value={meet.dateTime}
                                onChange={handleMeetChange}
                            />
                        </LocalizationProvider>


                    <br /><br /> 
                    <TextField
                        name="name"
                        label="שם"  
                        InputLabelProps={{ dir: 'rtl' }}
                        value={meet.clientName}
                        onChange={handleChange}
                        type="text"
                        InputProps={{ inputProps: { dir: 'rtl' } }}
                        color="warning" />
                        <br /><br />
                       


                    <TextField
                        name="phone"
                        label="טלפון"
                        className="right-to-left-label"
                        value={meet.phone}
                        onChange={handleChange}
                        type="number"
                       
                        color="warning" />
                   
                    <br /><br />
                    <TextField
                        name="email"
                        label="מייל"
                        InputLabelProps={{ style: { direction: 'rtl' } }} 
                        value={meet.email}
                        onChange={handleChange}
                        color="warning" />
                    <br /><br />
                    <Button type="submit"
style={{color:"black"}}
                    >שמור</Button>
                </form>
               
            </>
            
        )
    }
    export default AddMeetForm