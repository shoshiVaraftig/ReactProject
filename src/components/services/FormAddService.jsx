import { useState } from "react";
import {  TextField } from "@mui/material";
import { addService } from "../../server/server";

import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function FormAddService({handleClose}){

  const handleSave = () => {
    console.log("handle success");
    event.preventDefault();
    addService(formData);  
    handleClose(); // Close the form after saving
  };

    const[formData,setFormData]=useState({
        name:'',
        img:'',
        description:'',
    })



    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      }
      
    return(
        <>
<br/><br/>
<form >
<TextField
         name="name"
         label="שם"
         value={formData.name}
         onChange={handleChange}
         type="text"
         color="warning"/>
         <br/><br/>


         
         {/* <InputLabel id="demo-simple-select-label"></InputLabel>
    
         <Select
         name="img"
  value={formData.img}
  color="warning"
  onChange={handleChange}
  displayEmpty
  renderValue={(selected) => {
    const selectedImage = images.find((img) => img.value === selected);
    return selectedImage ? (
      <div>
        <img src={selectedImage.image} alt={selectedImage.label} style={{ width: '50px', height: '50px' }} />
   
      </div>
    ) : null;
  }}
>
  {images.map((option) => (
    <MenuItem key={option.value} value={option.value}>
      <img src={option.image} alt={option.label} style={{ width: '50px', height: '50px' }} />
    </MenuItem>
  ))}
</Select>
        */}
      
         <TextField
         name="description"
         label="תאור"
         
         value={formData.description}
         onChange={handleChange}
         type="text"
         color="warning"
         />
         <br/><br/>
         
         <TextField
         name="img"
         label="תמונה"
         value={formData.img}
         onChange={handleChange}
         type="text"
         color="warning"
         />
         <br/><br/>
         <Link type="submit"
         onClick={handleSave}
className="link"
>שמור</Link>
<br/><br/>
</form>
        </>
    )
}
export default FormAddService
//  const images = [
//     { value: 'a', image: a, label: 'Image 1' },
//     { value: 'b', image: b, label: 'Image 2' },
//     { value: 'c', image: c, label: 'Image 3' },
//     { value: 'd', image: d, label: 'Image 4' },
//   ];