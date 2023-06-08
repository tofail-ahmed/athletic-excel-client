
import Header from '../pages/Home/Home/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Home/Home/Shared/Footer/Footer';

const Main = () => {
      return (
            <div>
                  <Header></Header>

                  <Outlet></Outlet>


                  <Footer></Footer>
            </div>
      );
};

export default Main;