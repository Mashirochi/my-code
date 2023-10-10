import './App.scss';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { doGetAccount } from './redux/action/accountAction';
import { useEffect } from 'react';
import RingLoader from "react-spinners/RingLoader";
import { useSelector, useDispatch } from 'react-redux'
import axios from './service/customizeApi';
const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.account.userInfo);
  const isLoading = useSelector(state => state.account.isLoading);
  const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };

  useEffect(() => {
    if (user) {
      dispatch(doGetAccount());
    }
  }, [])


  return (
    <>
      {isLoading === true ?
        <div style={style}>
          <RingLoader
            color={"#36d7b7"}
            loading={true}
            size={100}
          />
        </div>
        :
        <div className="app-container">
          <div className='header-container'>
            <Header />
          </div>
          <div className='main-container'>
            <div className='sidenav-container'>
              <div />
              <div>
                <Outlet></Outlet>
              </div>
            </div>
          </div>
        </div >}

    </>

  );
}

export default App;
