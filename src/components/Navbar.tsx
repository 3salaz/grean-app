import { IonTitle } from '@ionic/react'
import greanLogo from '../assets/grean-logo.png';

function Navbar() {
  return (
    <IonTitle color="primary" size="large">
      <img src={greanLogo} alt="Grean Logo"></img>
    </IonTitle>
  )
}

export default Navbar