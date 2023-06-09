import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Navbar from '../components/Navbar';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <Navbar />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Services</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Services page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
