import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Landing from './components/Landing';
import Footer from './components/Footer';

const App = () => {
    return (
        <Router>
            <div className="wrapper">
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Landing />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

export default App;