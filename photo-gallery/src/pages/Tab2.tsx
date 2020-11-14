import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonActionSheet,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import { camera, trash, close } from "ionicons/icons";
import { usePhotoGallery } from "../hooks/usePhotoGallery";

import "./Tab2.css";

/*
  • Colocamos os conteúdos visuais dentro do <IonContent>

*/

const Tab2: React.FC = () => {
  const { photos, takePhoto } = usePhotoGallery();

  // snip - rest of code
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Galeria de Fotos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonContent>
        <IonGrid>
          <IonRow>
            {photos.map((photo, index) => (
            <IonCol size="6" key={index}>
              <IonImg src={photo.webviewPath} />
            </IonCol>
            ))}
          </IonRow>
        </IonGrid>
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => takePhoto()}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
        
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
