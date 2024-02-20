import { makeObservable, observable, action } from 'mobx';
//import Map from '../components/pictures/Map';
class dataStore {

  //data
  isLogin = false;
 
  meetings = [];
  //1. set all 2. add 3. updtate one 4. delete;
  services = [
   

  ];
  businessData = {}


  // export type
  constructor() {
    makeObservable(this,
      {
        isLogin: observable,//<div>{datastore.isLogin?משתמש רשום:null}</div>}
        setIsLogin: action,//onClick(datastore.setIslogin())
        meetings: observable,
        setMeeting: action,
        addMeeting: action,
        services: observable,
        setServices: action,
        addServices: action,
        setbusinessData:action,
        businessData:observable,
        
      }
    )
  }

  //set actions --> update data
  setIsLogin(status) {
    if (status) {
      this.isLogin = true;
    }
  }

  setMeeting(meetings) {
    this.meetings = meetings;
  }
  addMeeting(meeting) {
    this.meetings =[...this.meetings,meeting] ;
  }
  setServices(services) {
      if (Array.isArray(services)) {
        this.services = services;
      } else {
        console.error("Data is not an array");
      }
    
    
    //this.services = services;
  }

  addServices(service) {
    this.services.push(service);
  }

  setbusinessData(data) {
    this.businessData = data;
  }
}




export default new dataStore();