# fetch api github
## fetch repository and user info from the github account with Github API

I use axios and react query for fetch data from the github api

<br />

![fetch-api-github](https://user-images.githubusercontent.com/74317517/151714154-5a7e5f49-3f2b-4fce-bdc5-028110972633.PNG)

<br />


### Feature:
- get repository list 
- get follower, stars and repositories of user account
- get stars and forks of repository
- Responsive layout
- Pagination repositories


### what technology did i use?
- create react app
- axios 
- react query


## for use
- install npm 
- next install yarn 
- clone the repo 
- run `yarn install`

```
// you can type your github username instead of 'nafasebra'
const username = "nafasebra"; 

```

- in `api.js` file from `src/api` directory, put you github username instead of "nafasebra" 
- enjoy :)


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
