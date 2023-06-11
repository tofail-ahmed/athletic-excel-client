import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaBook, FaCartPlus, FaHome, FaIntercom, FaMoneyCheckAlt, FaUser, FaUtensils } from "react-icons/fa";
import SectionHeader from '../components/SectionHeader/SectionHeader';

const DashBoard = () => {
      const isAdmin = false;
      const isInstructor =true ;
      return (
            <div>
                  <div className="drawer drawer-mobile">
                        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                              {/* Page content here */}
                              <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button ">Open drawer</label>
                              <SectionHeader title={" DashBoard"}></SectionHeader>
                              <Outlet></Outlet>
                        </div>
                        <div className="drawer-side">
                              <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                              <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                                    {/* Sidebar content here */}
                                    {
                                          isAdmin ?
                                                <>
                                                      <li><NavLink to="/dashboard/adminhome">  <FaHome></FaHome>Admin Home
                                                      </NavLink></li>
                                                      <li><NavLink to="/dashboard/addclass">
                                                            <FaUtensils></FaUtensils> Add Class
                                                      </NavLink></li>
                                                      <li><NavLink to="/dashboard/manageclass">
                                                            <FaIntercom></FaIntercom>
                                                            Manage Classes
                                                      </NavLink></li>

                                                      <li><NavLink to='/dashboard/alluser'>
                                                            <FaUser></FaUser> AllUsers

                                                      </NavLink></li>

                                                </> :
                                                isInstructor ?
                                                      <>
                                                            <li><NavLink to="/dashboard/instructorhome">  <FaHome></FaHome>Instructor Home
                                                            </NavLink></li>
                                                            <li><NavLink to="/dashboard/addclass">
                                                                  <FaUtensils></FaUtensils> Add Class
                                                            </NavLink></li>
                                                            <li><NavLink to='/dashboard/classbyinstructor'>
                                                                  <FaBook></FaBook> Instructor Classes

                                                            </NavLink></li>

                                                </>
                                                :
                                                <>
                                                            <li><NavLink to="/dashboard">  <FaHome></FaHome>UserHome
                                                      </NavLink></li>
                                                      <li><NavLink to='/dashboard/mycart'>
                                                            <FaBook></FaBook> My Classes

                                                      </NavLink></li>
                                                </>
                                    }

                                    <div className="divider"></div>

                                    <li><NavLink to='/'>Home</NavLink></li>
                                    <li><NavLink to='/menu'>Menu</NavLink></li>
                                    <li><NavLink to='/secret'>Secret</NavLink></li>
                                    <li><NavLink to='/order/salad'>Order Food</NavLink></li>
                              </ul>
                        </div>
                  </div>
            </div>
      );
};

export default DashBoard;