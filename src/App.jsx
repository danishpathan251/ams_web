import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home';
import PricingPlans from './components/PricingPlans';
import PageWrapper from './PageWrapper';
import { AnimatePresence } from 'framer-motion';
import Headers from './components/Headers';
import { Routes, Route, useLocation } from 'react-router-dom';
import Footer from './Footer';
import ContactUs from './components/ContactUs';
import ComponyAbout from './components/CompnayAbout';
import AboutUs from './components/AboutUs';
import TrialDownloadApp from './components/TrialDownloadApp';
import LoginPage from './components/LoginPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <Headers/>
    <AnimatePresence mode="wait">
      
      <Routes location={location} key={location.pathname}>
         ComponyAbout

        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/plan-details" element={<PageWrapper><PricingPlans /></PageWrapper>} />
        <Route path="/ContactUs" element={<PageWrapper><ContactUs /></PageWrapper>} />
        <Route path="/Aboutus" element={<PageWrapper><AboutUs /></PageWrapper>} />
        <Route path="/ComponyAbout" element={<PageWrapper><ComponyAbout /></PageWrapper>} />
        <Route path="/Trail" element={<PageWrapper><TrialDownloadApp /></PageWrapper>} />
        <Route path="/Login" element={<PageWrapper><LoginPage /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
      <Footer/>

    </>
  )
}

export default App
