import React, { FunctionComponent, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ConnexionInscription from './ConnexionInscription/ConnexionInscription';
import Header from './Header/Header';
import firebase from 'firebase/app';
import { connect } from 'react-redux';
import { signInUser } from '../state/user/userActions';
import Compte from './Compte/Compte';
import { getUser } from '../utils/firebase';
import Home from './Home/Home';
import SearchPage from './SearchPage/SearchPage';
import Footer from './Footer/Footer';

type AppRouterProps = {
    logUser: (user: firebase.User) => {},
    user: any
}

const AppRouter: FunctionComponent<AppRouterProps> = ({logUser, user}) => {

    const [isAppInitialized, setInitialized] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function(user) {
            setInitialized(true);
            if (user) {
                log(user);
            }
        });
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    const log = async(user:any) => {
        logUser(await(getUser(user)));
    };

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
                        <Route path="/salaires" component={() => <div></div>}/>
                        <Route path="/entreprises" component={() => <div></div>}/>
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

const mapDispatchToProps = (dispatch:any) => {
    return {
        logUser: (user:any) => dispatch(signInUser(user))
    }
}

const mapStateToProps = (state: any) => ({
    user: state.user
});

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);