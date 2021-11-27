import React, { useEffect, useState } from "react";
import twitterLogo from "./assets/twitter-logo.svg";
import "./App.css";

// Constants
const TWITTER_HANDLE = "_buildspace";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
  const [currentAccount, setCurrentAccount] = useState(null);

  const checkIfWalletConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have MetaMask installed");
        return;
      }
      console.log("Ethereum global found", ethereum);
      // Check if we are authorized to access users wallet
      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const [account] = accounts;
        console.log("Found an authorized account:", account);
        setCurrentAccount(account);
      } else {
        console.log("No authorized account found");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const connectWalletAction = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Install MetaMask");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts"
      });
      const [account] = accounts;
      setCurrentAccount(account);
      console.log("Connected", account);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    checkIfWalletConnected();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header gradient-text">🦄 Pokemans 🦄</p>
          <p className="sub-text">Team up to beat team rocket!</p>
          <div className="connect-wallet-container">
            <img
              src="https://i.makeagif.com/media/1-24-2015/w03MFY.gif"
              alt="Monty Python Gif"
            />
            <button
              className="cta-button connect-wallet-button"
              onClick={connectWalletAction}
            >
              Connect Wallet To Play
            </button>
          </div>
        </div>
        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built with @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
