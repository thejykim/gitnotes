import { auth, db } from './firebase';

// password is an optional parameter
export function registerUser(username, emailOrProvider, password) {
  if (password) {
    return new Promise((resolve, reject) => {
      if (username.length < 3) {
        reject(new Error("Your username must be 3 or more characters."))
      } else {
        db.ref('users').orderByChild('username').equalTo(username).once('value', function (snapshot) {
          if (snapshot.hasChildren()) {
            reject(new Error("Username already taken, try another."));
          } else {
            auth().createUserWithEmailAndPassword(emailOrProvider, password)
              .then((result) => {
                const newID = result.user.uid;
                db.ref('users/' + newID).set({
                  username: username,
                  email: emailOrProvider
                })
                  .then((result) => {
                    resolve();
                  })
                  .catch((error) => {
                    reject(error);
                  });
              })
              .catch((error) => {
                reject(error);
              });
          }
        });
      }
    });
  } else {
    
    return new Promise((resolve, reject) => {
      if (username.length < 3) {
        reject(new Error("Your username must be 3 or more characters."))
      } else {
        db.ref('users').orderByChild('username').equalTo(username).once('value', function (snapshot) {
          if (snapshot.hasChildren()) {
            reject(new Error("Username already taken, try another."));
          } else {
            const provider = emailOrProvider == 'github' ? new auth.GithubAuthProvider() : new auth.GoogleAuthProvider();
    
            auth().signInWithPopup(provider)
              .then((result) => {
                const newID = result.user.uid;
                db.ref('users/' + newID).set({
                  username: username,
                  email: result.user.email
                })
                  .then((result) => {
                    resolve();
                  })
                  .catch((error) => {
                    reject(error);
                  });
              })
              .catch((error) => {
                reject(error);
              });
          }
        });
      }
    });
  }
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
            reject(error);
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