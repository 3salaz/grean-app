import React from "react";
import { IonFab, IonFabButton, IonIcon } from "@ionic/react";
import { menu } from "ionicons/icons";

function FloatingActionMenu() {
  return (
    <IonFab slot="fixed" vertical="bottom" horizontal="end">
      <IonFabButton>
        <IonIcon icon={menu}></IonIcon>
      </IonFabButton>
    </IonFab>
  );
}

export default FloatingActionMenu;
