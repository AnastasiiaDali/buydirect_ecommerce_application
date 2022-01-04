<div align="center">
  <img src="./public/logo192.png"></img>
</div>

<h1 align="center">BuyDirect - ecommerce web application </h1>

[![Website react-finder.netlify.app](https://img.shields.io/website-up-down-green-red/http/perso.crans.org.svg)](https://react-finder.netlify.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/AndreiZernov/react-finder/blob/master/LICENSE)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

This is BuyDirect Ecommerce Web Application, compatible with all devices.

<h3 align="center">Fully fubctional e-commerse website with the following functionality: </h3>

- Register, LogIn functionality - using Redux Tootkit
- Check Out - immitate check out using Redux Tootkit
- Cart - fully fucntional cart with counter, total and other functionalitites
- Products data fetch from free API https://fakestoreapi.com/docs using React Query for simplier code and faster performance
- Cart - fully fucntional cart with counter, remove, total and other functionalitites

---

<h2 align="center">Technologies</h2>

This project is using:

- [Create React App](https://create-react-app.dev/)
- [Material UI](https://material-ui.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Query](https://react-query.tanstack.com/)
- [React-hook-form](https://react-hook-form.com/)

This project is using data from https://fakestoreapi.com/docs

## Integration of the Create React App folder sctructure

- `src` contains all our application files
- `src/componets/` contains React components which are connected to the redux store and independent pages.
- `src/pages/` contains full React pages including components from `src/componets/`
- `src/store/` contains redux glabal state and reducers
- `src/images/` contains all static image files
- `src/helpers/` contains all help functions
- `src/data/` contains all mocks for our data in application
