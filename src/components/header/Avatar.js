import React, { useContext } from "react";
import { UserStoreContext } from "../../stores/Provider";
import { observer } from "mobx-react-lite";

import styles from "./Avatar.module.css";
import GoogleLogin from "react-google-login";

function AvatarBorder() {
  return (
    <svg
      height="40px"
      viewBox="0 0 40 40"
      width="40px"
      className={styles.border}
    >
      <path
        d="M4.02,28.27C2.73,25.8,2,22.98,2,20c0-2.87,0.68-5.59,1.88-8l-1.72-1.04C0.78,13.67,0,16.75,0,20c0,3.31,0.8,6.43,2.23,9.18L4.02,28.27z"
        fill="#F6AD01"
      />
      <path
        d="M32.15,33.27C28.95,36.21,24.68,38,20,38c-6.95,0-12.98-3.95-15.99-9.73l-1.79,0.91C5.55,35.61,12.26,40,20,40c5.2,0,9.93-1.98,13.48-5.23L32.15,33.27z"
        fill="#249A41"
      />
      <path
        d="M33.49,34.77C37.49,31.12,40,25.85,40,20c0-5.86-2.52-11.13-6.54-14.79l-1.37,1.46C35.72,9.97,38,14.72,38,20c0,5.25-2.26,9.98-5.85,13.27L33.49,34.77z"
        fill="#3174F1"
      />
      <path
        d="M20,2c4.65,0,8.89,1.77,12.09,4.67l1.37-1.46C29.91,1.97,25.19,0,20,0l0,0C12.21,0,5.46,4.46,2.16,10.96L3.88,12C6.83,6.08,12.95,2,20,2"
        fill="#E92D18"
      />
    </svg>
  );
}

export default observer(function Avatar() {
  const userStore = useContext(UserStoreContext);

  if (!userStore.imageUrl) {
    return (
      <GoogleLogin
        clientId="723459482470-sgv8javd5coshgcdjaboc0k5ff0rk13r.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={resp => userStore.setAvatar(resp)}
        onFailure={resp => console.log(resp)}
      />
    );
  }

  return (
    <div className={styles.container}>
      <AvatarBorder />
      <img src={userStore.imageUrl} className={styles.image} alt="Avatar" />
    </div>
  );
});
