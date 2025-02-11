import { useState } from "react";
import { ethers } from "ethers";
import MyToken from "./MyToken.json";

const MyTokenABI = MyToken.abi;
console.log("ABI:", MyTokenABI);

const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
function App() {
  const [walletAddress, setWalletAddress] = useState("");
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const _provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await _provider.send("eth_requestAccounts", []);
        const _signer = await _provider.getSigner();

        setWalletAddress(accounts[0]);
        setProvider(_provider);
        setSigner(_signer);

        console.log("Connected wallet:", accounts[0]);
        console.log("Signer:", _signer);
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    } else {
      alert("Metamask is not installed. Please install it to connect your wallet!");
    }
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100vw",
      textAlign: "center",
      backgroundColor: "#121212",
      color: "#fff",
    }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>Dimsum Project</h1>

      <button 
        onClick={connectWallet} 
        style={{
          padding: "12px 24px",
          fontSize: "1rem",
          cursor: "pointer",
          backgroundColor: "#6200ea",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          marginBottom: "10px"
        }}
      >
        Connect Wallet
      </button>

      {walletAddress && <p>Connected: {walletAddress}</p>}
    </div>
  );
}

export default App;

