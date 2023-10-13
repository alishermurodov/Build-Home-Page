import './App.css'
import Burger from './components/Burger'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from "react"
import Switcher from './components/Switcher'
import { useTranslation } from "react-i18next"
import { IconButton } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';

import About from './Pages/about/About';
import Services from './Pages/services/Services';
import Gallery from './Pages/gallery/Gallery';
import Contact from './Pages/contact/Contact';
import Story from './Pages/story/Story';
import Careers from './Pages/careers/Careers';
import News from './Pages/news/News';
import Notfound from './Pages/notFound/Notfound';
import Process from './Pages/process/Process';
import Home from './Pages/home/home';

function App() {

  const wifi = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          index: true,
          element:<Home/>
        },
        {
          path: "about",
          element:<About/>
        },
        {
          path: "services",
          element:<Services/>
        },
        {
          path: "gallery",
          element:<Gallery/>
        },
        {
          path: "contact",
          element:<Contact/>
        },
        {
          path: "story",
          element:<Story/>
        },
        {
          path: "process",
          element:<Process/>
        },
        {
          path: "careers",
          element:<Careers/>
        },
        {
          path: "news",
          element:<News/>
        },
        {
          path: "*",
          element:<Notfound/>
        }
      ]
    }
  ])

  // useEffect(() => {
  //   AOS.init();
  // }, [])

  // const { t, i18n } = useTranslation()

  // const changeLanguage = (language) => {
  //   i18n.changeLanguage(language)
  // }

  return (
    <RouterProvider router={wifi}/>
  )
}

export default App