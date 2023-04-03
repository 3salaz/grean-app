import { IonTitle } from "@ionic/react";
import greanLogo from "../assets/grean-logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <IonTitle color="primary" size="large">
      <div className="flex">
        <img className="toolbar-logo" src={greanLogo} alt="Grean Logo"></img>
        <h3 color="primary">Grean Global</h3>
      </div>
    </IonTitle>
  );
}

export default Navbar;
