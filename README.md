# Playground for react course

```
npm install -g create-react-app
npm install create-react-app
npx create-react-app playground
```

## Start test server
```
npm start
```

## Deploy
```
npm run build
```

## Support for ES6
See http://kangax.github.io/compat-table/es6/

## Install immutability-helper for 'update()'
```
npm install immutability-helper --save
```

## React dev tools:
https://github.com/facebook/react-devtools

## Strict styling:
https://prettier.io/

## Router
```
npm install --save react-router
```

## With typescript
```
npx create-react-app todolist --scripts-version=react-scripts-ts
```

## Local storage
localStorage.getItem("key");
localStorage.setItem("key", "value");
localStorage.setItem("key", JSON.stringify(objectOrArray));

## Alternative for react:
npm install --save react-simple-storage


# Redux

```
npm install --save redux react-redux
```

## Redux dev tools
https://github.com/zalmoxisus/redux-devtools-extension

```js
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
```

## For testing

see https://jestjs.io/docs/en/snapshot-testing

```
npm install --save-dev react-test-renderer
```
