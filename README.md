# Vue.js architecture sample: features

This is a sample architecture for Vue.js projects based on features, one folder per feature. 

Packages used:

- `vuex` -  data store
- `vue-router` - routing
- `vue-axios` - backend calls
- `axios-mock-adapter` - mocking api calls

The `features` folder:
- `feature` - one folder per feature
- `shared` - will contain shared functionalities
    - `components` - shared components used by multiple features
    - `services` - shared services used by multiple efatures

The `feature` folder structure:

- `*.vue` - files to hold the vue pages and components
- `services.js` - file to contain all the api calls and any logic functions needed by the feature
- `store.js` - file to contain the vuex store of the feature and only for that feature

Global folders:

- `router` - contains all the routes of the application
- `store` - contains the global store where the features stores are imported and global state 
- `mock-server` - contains mocks for the apis used in the application. The mocks are disabled automaticaly when ENV != development

For api mocking the following axios package was used: [axios-mock-adapter](https://www.npmjs.com/package/axios-mock-adapter)

## Project setup
```
npm install
```

or 

```
yarn
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
