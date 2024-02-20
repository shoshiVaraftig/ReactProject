import { observer } from "mobx-react";
import { useEffect } from "react";
import "./meet.css";
import { getMeeting } from "../../server/server";
import dataStore from "../../server/dataStore";
import { Grid } from "@mui/material";

const Meeting = observer(() => {
  useEffect(() => {
    getMeeting();
  }, []);

  const today = new Date();
  const oneWeekFromNow = new Date();
  oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7);

  return (
    <>
    <div className="log">
    
      <div className="meet">:טיולים שנקבעו</div>
      {dataStore.meetings.length === 0 ? <div>😢 אין פגישות. היומן ריק </div> : null}



      {dataStore.meetings.map((item) => {
        const meetingDate = new Date(item.dateTime);
        let color = "";
        
        if (meetingDate.toDateString() === today.toDateString()) {
          
          color = "orange"; // Meeting is today
        } else if (meetingDate > today && meetingDate <= oneWeekFromNow) {
          color = "green"; // Meeting is this week
        } else {
          color = "purple"; // Meeting is further away
        }

        return (
          
          <Grid
            item
            key={item.name}
            className={`meet ${color}`}
          >
            <h3>{item.name}</h3>
            <div>{item.phone}</div>
            <div>{item.email}</div>
            <div>{item.dateTime}</div>
            <div>{item.service}</div>
          </Grid>
        );
      })}
      </div>
    </>
  );
});

export default Meeting;
