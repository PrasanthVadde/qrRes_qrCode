import QRCode from "react-qr-code";
import "./App.css";
const App = () => {
  return (
    <>
      <section className="qrCode">
        <QRCode
          size={400}
          bgColor="white"
          fgColor="black"
          value="https://dynamic-brigadeiros-93c6d4.netlify.app/"
        />
      </section>
    </>
  );
};

export default App;
