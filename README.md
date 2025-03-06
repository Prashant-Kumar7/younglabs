# younglabs

## Getting Started:

### Setting up next-app locally

First clone the repository locally, by running the following command

```
  git clone https://github.com/Prashant-Kumar7/younglabs.git
```

cd to react-app and backend directories to install dependencies by running

```
npm install
```

The change the domain name in request URL in react-app to 
```
http://localhost:3000
```
Then in react-app from vite.config.ts remove. So that it can run locally

```
server: {
    host: true, // Allows external access
    allowedHosts: ['younglabs.tumsab.xyz'], // Add your domain here
  }
```











## Run Locally

### To Start backend

cd to backend directory, and run ```tsc -b``` to build the app first. make sure you have typescript complier installed.

if not installed, then run ```npm install -g typescript```

after building the app a dist folder will contain your complied backend.

to run app, run
```bash
  node dist/index.js
```

this will make your backend up and running Locally at port ```3000```


### To Start Frontend

cd to react-app directory, and run ```npm run dev``` to run the app in development mode.

if you want to build the app, run ```npm run build```. A dist folder will have all the files of complied frontend.

To run the complied frontend, run

```bash
  npm run start
```

this will make your frontend up and running Locally at port ```5173```. if started in dev mode. and at port ```4173``` if started in production mode  


## Appendix

Any additional information goes here

if you want you can setup a ```.env``` which will have the port number where the applications are running as a secret. 

```PORT=port no.```
