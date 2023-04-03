import React, { useState } from "react";
import {
  IonButton,
  IonFab,
  IonFabButton, 
  IonIcon,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuToggle,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { menu } from "ionicons/icons";

function MenuToggle() {
  const [menuType, setMenuType] = useState("overlay");

  return (
    <>
      <IonMenu type={menuType} contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonMenuToggle>
            <IonButton>Click to close the menu</IonButton>
          </IonMenuToggle>
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonMenuToggle>
            <IonFab slot="fixed" vertical="bottom" horizontal="end">
              <IonButton>
                <IonIcon icon={menu}></IonIcon>
              </IonButton>
            </IonFab>
          </IonMenuToggle>
        </IonContent>
      </IonPage>
    </>
  );
}
export default MenuToggle;
