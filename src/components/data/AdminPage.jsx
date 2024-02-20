import  Login  from '../login/Login';
import { observer } from "mobx-react"
import DataStore from '../../server/dataStore';
import AdminHome from './AdminHome';
const AdminPage = observer(() => {
  const isLogin = DataStore.isLogin;

  return (
    <>
      {isLogin ? <AdminHome /> : <Login />}
    </>
  );
});

export default AdminPage