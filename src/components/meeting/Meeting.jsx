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
    
      <h4 className="meet2">:טיולים שנקבעו</h4>
      
      {dataStore.meetings.length === 0 ? <div>😢 אין פגישות. היומן ריק </div> : null}
      {dataStore.meetings
  .filter(item => {
    const meetingDate = new Date(item.dateTime);
    return meetingDate >= today || meetingDate.toDateString() === today.toDateString(); // Filter out past meetings

  })
  .slice().sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime))
  .map((item) => {
    const meetingDate = new Date(item.dateTime);
    let color = "";

    if (meetingDate.toDateString() === today.toDateString() && meetingDate.getDate() === today.getDate()) {
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
        <h4>{item.name}</h4>
        <div>{item.phone}</div>
        <div>{item.email}</div>
        <div>{item.dateTime}</div>
        <div>{item.service}</div>
      </Grid>
    );
  })}



      {/* {dataStore.meetings.slice().
      sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime)).map((item) => {
        const meetingDate = new Date(item.dateTime);
        let color = "";
        
        // if (meetingDate.toDateString() === today.toDateString()) {
          if (meetingDate.toDateString() === today.toDateString()) {

          color = "orange"; // Meeting is today
        } else if (meetingDate > today && meetingDate <= oneWeekFromNow) {
          color = "green"; // Meeting is this week
        }
        if (meetingDate < today) {
          color = "lightgray"; // Meeting has already taken place
        }
         else {
          color = "purple"; // Meeting is further away
        }

        return (
          
          <Grid
            item
            key={item.name}
            className={`meet ${color}`}
          >
            <h4>{item.name}</h4>
            <div>{item.phone}</div>
            <div>{item.email}</div>
            <div>{item.dateTime}</div>
            <div>{item.service}</div>
          </Grid>
        );
      })} */}
      </div>
    </>
  );
});

export default Meeting;
