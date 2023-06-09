import { Link } from "react-router-dom";
import Button from "../../../../../components/Button";
import { useContext } from "react";
import { AuthContext } from "../../../../../Providers/AuthProvider";
import { BsFillCartFill } from "react-icons/bs";


const Header = () => {
      const { user, logOut } = useContext(AuthContext);


      const handleLogOut = () => {

            logOut()
                  .then(() => {
                        alert("logout successfull")
                  })
                  .catch(error => {
                        console.log(error.message);
                  })
      }

      const navbar =
            <> <li><Link to='/'>Home</Link></li>
                  <li><Link to='/menu'>Menu</Link></li>
                  <li><Link to='/secret'>Secret</Link></li>
                  <li><Link to='/order/salad'>Order Food</Link></li>
                  {/* <li><Link to={isAdmin ? '/dashboard/adminhome' : '/dashboard/userhome'}>Dashboard</Link></li> */}
                  <li>
                        <Link to='/dashboard/mycart'>
                              <button className="btn gap-2">

                                    <BsFillCartFill />
                                    {/* <div className="badge badge-secondary">+{cart?.length}</div> */}
                              </button>
                        </Link>
                  </li>

                  {
                        user ? <div className="flex" onClick={handleLogOut}> <Button text={"LogOut"}></Button>

                              <img className="w-[50px] h-[50px] rounded-full" src={user.photoURL} title={user.email} />
                        </div>
                              : <><Link to={'/login'}><Button text={"Login"}></Button></Link></>
                  }


            </>
      return (
            <div className="bg-transparent">
                  <div className="navbar  bg-transparent">
                        <div className="navbar-start">
                              <div className="dropdown">
                                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                          {navbar}
                                    </ul>
                              </div>
                              <a className="btn btn-ghost normal-case text-xl"><span className="text-3xl text-green-500">Athletic</span> <span className="text-green-300">Excel</span></a>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                              <ul className="menu menu-horizontal px-1">
                                    {navbar} 
                              </ul>
                        </div>
                        <div className="navbar-end">





                        </div>
                  </div>
            </div>
      );
};

export default Header;