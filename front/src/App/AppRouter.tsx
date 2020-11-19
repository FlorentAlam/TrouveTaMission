import React, { FunctionComponent, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ConnexionInscription from './ConnexionInscription/ConnexionInscription';
import Header from './Header/Header';
import Compte from './Compte/Compte';
import Home from './Home/Home';
import SearchPage from './SearchPage/SearchPage';
import Footer from './Footer/Footer';
import AnnonceCreationPage from './AnnonceCreationPage/AnnonceCreatePage';

const AppRouter = () => {

    const [isAppInitialized, setInitialized] = useState(true);

    return (
        <>
        { 
            !isAppInitialized && <h1>load</h1>
        }
        {
            isAppInitialized && (
                <Router>
                    <Header/>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/recherche" exact component={SearchPage}/>
                        <Route path="/recherche/:intitule/:ville" component={SearchPage}/>
                        <Route path="/poster-une-annonce" component={AnnonceCreationPage}/>
                        <Route path="/messages" exact component={() => <div></div>}/>
                        <Route path="/compte" component={() => <Compte/>}/>
                        <Route path="/mes-emplois" exact component={() => <div></div>}/>
                        <Route path="/preferences" exact component={() => <div></div>}/>
                        <Route path="/reglages" exact component={() => <div></div>}/>
                        <Route path="/connexion" component={() => <ConnexionInscription type="connexion"/>}/>
                        <Route path="/inscription" component={() => <ConnexionInscription type="inscription"/>}/>
                    </Switch>
                    <Footer/>
                </Router>
            )
        }
        </>
    
)};

export default AppRouter;