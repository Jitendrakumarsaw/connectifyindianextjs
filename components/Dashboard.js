import React from 'react'
import Dashboard_MenuItem from './Dashboard_MenuItem';
import classNames from 'classnames/bind';

const dashboard = ({showDashBoard}) => {
  const show=classNames('block');
  const hide=classNames('hidden');
  const menu_items = [
    {
      title: "Templates By APP",
      submenu: [
        { title: "Word", connect: "http://localhost:3000/word"},
        { title: "Excell", connect: "http://localhost:3000/excell" },
        { title: "PowerPoint", connect: "http://localhost:3000/powerpoint" },
        { title: "Pdf", connect: "http://localhost:3000/pdf"},
      ]
    },
    {
      title: "Browse By Category",
      submenu: [
        { title: "Agendas", connect: "https://www.quora.com" },
        { title: "Blank and General", connect: "https://www.quora.com" },
        { title: "Brochures", connect: "https://www.quora.com" },
        { title: "Business Cards", connect: "https://www.quora.com" },
        { title: "Calenders", connect: "https://www.quora.com" },
        { title: "Cards", connect: "https://www.quora.com" },
        { title: "Flyers", connect: "https://www.quora.com" },
        { title: "Home Learning", connect: "https://www.quora.com" },
        { title: "Inventories", connect: "https://www.quora.com" },
        { title: "Invoices", connect: "https://www.quora.com" },
        { title: "Labels", connect: "https://www.quora.com" },
        { title: "Newsletters", connect: "https://www.quora.com" },
        { title: "Photo Albums", connect: "https://www.quora.com" },
        { title: "Resumes And Cover letters", connect: "https://www.quora.com" },
        { title: "Themes", connect: "https://www.quora.com" },
        { title: "TimeLines", connect: "https://www.quora.com" },
        { title: "More", connect: "https://www.quora.com" },
      ]
    },
    {
      title: "Special Events And Milestones",
      submenu: [
        { title: "Back To School", connect: "https://www.quora.com" },
        { title: "Birthday", connect: "https://www.quora.com" },
        { title: "Wedding", connect: "https://www.quora.com" },
        { title: "Graduation", connect: "https://www.quora.com" },
        { title: "Baby", connect: "https://www.quora.com" },
        { title: "Crismas", connect: "https://www.quora.com" },
        { title: "Congratulations", connect: "https://www.quora.com" },
        { title: "Autumn", connect: "https://www.quora.com" },
        { title: "Spring", connect: "https://www.quora.com" },
        { title: "Summer", connect: "https://www.quora.com" },
        { title: "Winter", connect: "https://www.quora.com" },
        { title: "All Holidays", connect: "https://www.quora.com" },
      ]
    },

    { title: "Contact", connect: "https://www.quora.com" },
    { title: "Technologies", connect: "https://www.quora.com" },
    { title: "Hardware", connect: "https://www.quora.com" },
    { title: "Software", connect: "https://www.quora.com" },
    {
      title: "About",
      submenu: [
        { title: "fundraiser", connect: "https://www.quora.com" },
        { title: "legal", connect: "https://www.quora.com" },
        { title: "aspire", connect: "https://www.quora.com" },
        { title: "ngo", connect: "https://www.quora.com" },
        { title: "non-ngo", connect: "https://www.quora.com" },
      ]
    },
  ];
  return (
    <>
      <nav className={`${'bg-gray-50 text-black lg:flex  mt-1 md:mt-0 lg:mt-0 px-4  shadow-sm shadow-slate-900'} ${showDashBoard?show:hide}`}>

        <div className='w-full px-0 py-1'>
          <div className='capitalize text-center my-5 text-3xl font-bold'>Templates / Dashboard</div>
          <hr />
          {menu_items.map((item, index) => {
            return < Dashboard_MenuItem item={item} key={index} depth={1} />


          })}
        </div>
      </nav>
    </>
  )
}

export default dashboard