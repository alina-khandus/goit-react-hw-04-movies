import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import React, { Suspense, lazy } from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom';
import NotFound from '../views/NotFound';
import routes from 'routes';
import Layout from './Layout';

const Home = lazy(() => import('../views/Home.js' /* webpackChunkName: "home-page" */));
const Movies = lazy(() => import('../views/Movies.js' /* webpackChunkName: "movies-page" */));
const MovieDetails = lazy(() => import('../views/MovieDetails.js'/* webpackChunkName: "movie-details-page" */));


const App = () => (
  <>
    <Layout>  
      <Suspense fallback={<Loader
                type="Circles"
                color="#00BFFF"
                height={100}
                width={100}
                />}>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route path={routes.movieDetails} component={MovieDetails}/>
        <Route path={routes.movies} component={Movies} />
        <Route component={NotFound} />
        </Switch> 
        </Suspense>
     </Layout>
    </>
)

export default App;