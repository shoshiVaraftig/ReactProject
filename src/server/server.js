

import dataStore from "./dataStore";
import Swal from 'sweetalert2';

export async function CheckLogin(name, password) {

  try {
    const response = await fetch("http://localhost:8787/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password }),
    });
    if (response.ok) {
      dataStore.setIsLogin(true);
    } else {
      throw new Error("user name or password not correct");
    }
  } catch (error) {
    alert("server failed");

  }
}


export async function getMeeting() {
  try {
    const response =await fetch("http://localhost:8787/appointments", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },

    });
    console.log("response", response);
    if (response.ok) {
      const meetings = await response.json();
      dataStore.setMeeting(meetings);
    } else {
      throw new Error("Failed to add the meeting");
    }
  } catch (error) {
    console.log(error);
    alert("Server error. Please try again.");
  }
}

export async function addMeeting(meeting) {
  meeting.dateTime = meeting.dateTime.toISOString().slice(0, 19).replace('T', ' ');//format('YYYY-MM-DDTHH:mm:ss');
  try {
    const response =await fetch("http://localhost:8787/appointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(meeting),
    });
    console.log("response", response);
    if (response.ok) {
      dataStore.addMeeting(meeting);
   
      Swal.fire({
        title: "פרטיך נשמרו בהצלחה",
        text: "פרטי הטיול ישלחו אליך בהקדם",
        icon: "success",
      });

    } else {
      
      throw new Error("");
    }
  } catch (error) {
    Swal.fire({
      title: "!שגיאה",
      text: "אין אפשרות לקבוע טיול בתאריך המבוקש",
      icon: "error",
    });
    
  }
}
export async function getService() {
  try {
    const response = await fetch("http://localhost:8787/services");

    if (response.ok) {
      const data = await response.json();
      dataStore.setServices(data);
    } else {
      throw new Error("Failed to add the service");
    }
  } catch (error) {
    console.error(error);
    alert("Server error. Please try again.");
  }
}

export async function addService(serviceDetails) {
  try {
    const response = await fetch("http://localhost:8787/service", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(serviceDetails),
    });

    if (response.ok) {
      dataStore.addServices(serviceDetails);
    } else {
      throw new Error("Failed to add the service");
    }
  } catch (error) {
    console.error(error);
    alert("Server error. Please try again.");
  }
}
export async function fetchBusinessData() {
   fetch('http://localhost:8787/businessData')
    .then(response => response.json())
    .then(data => {
      dataStore.setbusinessData(data);
      // return data;
    });
}

export async function submitForm(data) {
  fetch('http://localhost:8787/businessData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(async response => {
      if (response.ok) {
        console.log('Data saved successfully');
        const data = await response.json();
        dataStore.setbusinessData(data);
      } else {
        console.error('Error saving data:', response.statusText);
      }
    })


}
export async function fetchServices() {
  try {
    const response = await fetch("http://localhost:8787/services");

    if (response.ok) {
      const services = await response.json();
      dataStore.setServices(services);
    } else {
      throw new Error("Failed to fetch the services");
    }
  } catch (error) {
    console.error(error);
    alert("Server error. Please try again.");
  }
}