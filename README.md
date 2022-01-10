# fetch api github
### fetch repository info from the github account with Github API

I use axios and react query for fetch data from the github api

### Feature:
- get repository list 
- get follower, stars and repositories of user account
- get stars and forks of repository
- I Designed the Ui and include the .xd file in this repo (fetch-api-github.xd)
- Responsive layout


## for use
you can fetch api from your github profile, then:

```

export const getUserInfo = () => APILink.get("/users/nafasebra")
                                .then(res => res.data);

export const getRepoInfo = () => APILink.get("/users/nafasebra/repos")
                                .then(res => res.data);

export const getStarsUser = () => APILink.get("/users/nafasebra/starred")
                                    .then(res => res.data);

```

in `api.js` file from `src/api` directory, and
put you name (username) instead of "nafasebra"


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
