import { db } from './firebase';
import { Octokit } from '@octokit/core';

const octokit = new Octokit();

export function getProjects(username) {
  return new Promise((resolve, reject) => {
    db.ref('users/' + username).once('value', function (snapshot) {
      if (snapshot.hasChildren() && snapshot.hasChild('proj')) {
        resolve(snapshot.val().proj)
      } else {
        reject(new Error("No repositories found."));
      }
    })
      .catch((error) => {
        reject(error);
      })
  })
}

export function createProject(username, projectName, projectDesc, gitUser, gitRepo) {
  return new Promise((resolve, reject) => {
    octokit.request('GET /repos/{owner}/{repo}', {
      owner: gitUser,
      repo: gitRepo
    }).then((result) => {
      db.ref('users/' + username + '/proj/').orderByChild('name').equalTo(projectName).once('value', function (snapshot) {
        if (snapshot.hasChildren()) {
          reject(new Error("You've already used this project name."));
        } else {
          db.ref('users/' + username + '/proj/' + projectName).set({
            name: projectName,
            desc: projectDesc,
            gitUser: gitUser,
            gitRepo: gitRepo
          }).then((result) => {
            resolve(result);
          })
        }
      }).catch((error) => {
        reject(error);
      });
    }).catch((error) => {
      if (error.status == 404) {
        reject(new Error("That repository doesn't exist, or is set to private."));
      } else {
        reject(error);
      }
    });
  });
}