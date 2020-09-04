import { auth, db } from './firebase';

export function registerUser(username, email, password) {
  return new Promise((resolve, reject) => {
    auth().createUserWithEmailAndPassword(email, password)
      .then((result) => {
        const newID = result.user.uid;
        db.ref('users/' + newID).set({
          username: username,
          email: email
        })
          .then((result) => {
            resolve();
          })
          .catch((error) => {
            reject(new Error(error));
          });
      })
      .catch((error) => {
        reject(new Error(error));
      })
  });
}

export function usernamePasswordSignin(username, password) {
  return new Promise((resolve, reject) => {
    db.ref('users').orderByChild('username').equalTo(username).once('value', function (snapshot) {
      if (snapshot.hasChildren()) {
        const json = snapshot.toJSON();
        const key = Object.keys(json)[0];

        auth().signInWithEmailAndPassword(json[key].email, password)
          .then((user) => {
            resolve(user);
          })
          .catch((error) => {
            reject(new Error(error));
          });
      } else {
        reject(new Error("We don't recognize that username."));
      }
    })
  });
}

export function getUsername(uid) {
  return new Promise((resolve, reject) => {
    db.ref('users/' + uid).once('value')
      .then(function (snapshot) {
        resolve(snapshot.val().username);
      })
      .catch((error) => {
        reject(error);
      })
  })
}