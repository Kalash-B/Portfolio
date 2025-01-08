import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Client from './components/Client';
import Loader from './components/Loader';
import Tape from './components/Tape';
import ContactForm from './components/ContactForm';
import WebFooter from './components/WebFooter';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 3000)); 
        setIsLoading(false);
      } catch (error) {
        console.error("Error during loading:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Home />
          <Tape />
          <Projects />
          <Client />
          <ContactForm />
          <WebFooter />
        </>
      )}
    </div>
  );
};

export default App;
