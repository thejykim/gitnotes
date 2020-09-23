# NextLogin

A fully functional login system with a variety of flexible features.

## Dependencies

### Frameworks
- ReactJS
- Next.js

### Backend
- Firebase Authentication
- Realtime Database

### Theming
- React-Bootstrap
- Bootswatch
- Font Awesome

## Features

- **Auth Guard:** Block users from accessing certain routes based on their authentication. PrivateGuard blocks unauthenticated users from accessing private routes (/profile), while PublicGuard redirects signed-in users from public routes (/login, /index).

- **Usernames:** Normally, Firebase Authentication does not include saving user-chosen usernames. Regardless of the signup provider, users are tied to a unique username saved in a Firebase Realtime Database when they first register.

- **Abstraction:** Login information is passed as a prop via the ShellNav component, which consists of the navbar and bottom footer, which allows the logic in each Page component to focus on manipulating it (and fetching other data if needed).