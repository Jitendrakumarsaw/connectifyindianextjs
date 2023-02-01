import React, { useState } from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaTimes } from 'react-icons/fa';
import SideBar from './Sidebar';


const Header = () => {
    const [showSidebar, setShowSidebar] = useState(false)
    const showSidebarIcon = () => {
        setShowSidebar((prev) => !prev)

    }
    return (
        <>
            <div className='mt-0 font-semibold text-xl sticky top-0 left-0 right-0 z-50'>



                <ul className="main-navigation">
                    <div className='px-2 py-2 flex gap-10 text-3xl  lg:hidden'>
                        <a className='text-amber-200 font-bold' href="#">
                            {
                                showSidebar ? <FaTimes onClick={showSidebarIcon} /> : <FaBars onClick={showSidebarIcon}/>
                            }
                        </a>
                        <div className='uppercase text-center'>Connectify India</div>
                    </div>
                    <li><a href="#"><img className='w-8 h-6 ' src="images/logo.jpg" alt="main_logo" /></a></li>
                    <li className='mr-11'><a href="#">Connectify India</a></li>
                    <li><a href="#">Simply Counsel</a></li>
                    <li><a href="#">Legal Aspire</a></li>
                    <li><a href="#">AINAW</a></li>
                    <li><a href="#">Business Connect</a></li>
                    <li className='z-40'><a href="#">Project</a>
                        <ul>
                            <li><a href="#">State Project</a></li>
                            <li><a href="#">Central project</a></li>
                            <li><a href="#">Private and public Project</a></li>

                        </ul>
                    </li>

                    <li className='z-40'><a href="#">Fundraiser</a>
                        <ul>
                            <li><a href="#">Fundraiser</a></li>
                            <li><a href="#">Donation</a></li>
                            <li><a href="#">Campaign</a></li>

                            <li><a href="#">Stories/SuccessStory</a>
                                <ul>
                                    <li><a href="#">Portfolios</a></li>
                                    <li><a href="#">Testimonials</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Options</a></li>
                        </ul>
                    </li>
                    <li className='z-40 '><a href="#">NGO</a>
                        <ul>
                            <li><a href="#">NGO By Location</a></li>
                            <li><a href="#">NGO By Category</a></li>
                            <li><a href="#">Global NGO</a></li>
                            <li className='z-40'><a href="#">Volunteer</a>
                                <ul className=''>
                                    <li><a href="#">Volunteer Signup</a></li>
                                    <li><a href="#">Organisation Signup</a>
                                        <ul>
                                            <li><a href="#">Resets</a></li>
                                            <li><a href="#">Grids</a></li>
                                            <li><a href="#">Frameworks</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Blood</a>
                                        <ul>
                                            <li><a href="#">state</a></li>
                                            <li><a href="#">Location</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className='z-40'><a href="#">About</a>
                        <ul>


                            <li><a href="#">History</a></li>
                            <li><a href="#">Vision & Mission</a></li>
                            <li><a href="#">Team Member</a></li>
                            <li><a href="#">Financials</a></li>
                            <li><a href="#">Media Center</a></li>
                            <li><a href="#">FAQs</a></li>


                            <li><a href="#">Custom Post Types</a>
                                <ul>
                                    <li><a href="#">Portfolios</a></li>
                                    <li><a href="#">Testimonials</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Options</a></li>
                        </ul>
                    </li>
                    <li className='z-40 '><a href="#" className='text-amber-200 font-bold text-2xl'><FaRegUserCircle /></a>
                        <ul>
                            <li><a href="#">Connectify India</a></li>

                            <li><a href="#">Simply Counsel</a></li>
                            <li><a href="#">Legal Aspire</a></li>
                            <li><a href="#">Ainaw</a></li>
                            <li><a href="#">Business Connect</a></li>
                        </ul>
                    </li>


                </ul>
            </div>
            <SideBar showSidebar={showSidebar}/>
        </>
    )
}

export default Header