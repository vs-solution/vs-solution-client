import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from './components/Navbar/Navbar';
import Main from './pages/Main';
import BrawlStars from './pages/BrawlStars';
import Albion from './pages/Albion';
import LeagueOfLegends from './pages/LeagueOfLegends';
import Hearthstone from './pages/Hearthstone';
import WorldOfWarcraft from './pages/WorldOfWarcraft';
import Steam from './pages/Steam';
import Other from './pages/Other';
import Login from './pages/Login';
import Register from './pages/Register';


class App extends React.Component {
	render() {
		return(
			<Router>
				<div>
					<Navibar />
					<Switch>
						<Route path="/" exact component={Main} />
						<Route path="/login" component={Login}/>
						<Route path="/brawl-stars" component={BrawlStars} />
						<Route path="/albion-online" component={Albion} />
						<Route path="/league-of-legends" component={LeagueOfLegends} />
						<Route path="/hearthstone" component={Hearthstone} />
						<Route path="/world-of-warcraft" component={WorldOfWarcraft} />
						<Route path="/steam" component={Steam} />
						<Route path="/other" component={Other} />
						<Route path="/login" component={Login} />
						<Route path="/register" component={Register} />
					</Switch>

				</div>
			</Router>
		)
	}
};

export default App;