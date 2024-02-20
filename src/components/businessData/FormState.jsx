import { useState } from "react";
import { Button, Stack, TextField } from "@mui/material";
import { submitForm } from "../../server/server";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
function FormState() {


    const [formData, setFormData] = useState({
        businessName: '',
        businessOwner: '',
        address: '',
        phone: '',
        moreDetails: '',
    })

    const [closing, setClosing] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        submitForm(formData);
        setClosing(true); 
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }
    return (
        <>
        <div className="log">
          {!closing && (  <Stack>
                <form onSubmit={handleSubmit} className="state">
                    <TextField
                        name="businessName"
                        label=":שם העסק"
                        value={formData.businessName}
                        onChange={handleChange}
                        type="text"
                        color="warning" />

                    <br /><br />
                    <TextField
                        name="businessOwner"
                        label=":בעל העסק"
                        value={formData.businessOwner}
                        onChange={handleChange}
                        type="text"
                        color="warning" />
                    <br /><br />
                    <TextField
                        name="address"
                        label=":כתובת"
                        value={formData.address}
                        onChange={handleChange}
                        type="text"
                        color="warning" />
                    <br /><br />
 
                    <TextField
                        name="phone"
                        label="phone"
                       
                        value={formData.phone}
                        onChange={handleChange}
                        type="text"
                        color="warning" />
                    <br /><br />
                    <TextField
                        name="moreDetails"
                        label=":פרטים נוספים"
                        value={formData.moreDetails}
                        onChange={handleChange}
                        color="warning" />
                    <br /><br />
                    <Button type="submit"
                    style={{color:"black"}}
                    >
                          <div>
      <FontAwesomeIcon icon={faArrowRight} />
    </div>
                    </Button>
                </form>
            </Stack>
            )}
            </div>
        </>
    )
}
export default FormState