import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import homebg from '../public/homebg.png'
import bg from "../components/assets/homebg.png"
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Navbar from "../components/Navbar"
import Header from "../components/Header"

const Home: NextPage = () => {
  const headerStyle = {
    backgroundImage: `url(${bg.src})`,
    /* Additional styles can be added here */

    // Set background size to cover the container by default
    backgroundSize: "cover",

    // Center the background image by default
    backgroundPosition: "center",

    // Media query for mobile devices
    "@media (maxWidth: 768px)": {
      backgroundSize: "auto", // Adjust background size for smaller screens
      backgroundPosition: "center", // You can adjust this as needed
    },
  };
  return (
    <div className={` h-screen`} style={headerStyle}>
      <div className={`${headerStyle}`}>
        <Navbar />
        <Header />
      </div>
      {/* <Image src={homebg} alt="homebg"/> */}

      <footer className={styles.footer}>
        <a href="https://rainbow.me" rel="noopener noreferrer" target="_blank">
          Made with ❤️ by your frens at 🌈
        </a>
      </footer>
    </div>
  );
};

export default Home;
