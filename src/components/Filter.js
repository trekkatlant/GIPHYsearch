import React, {Component} from "react";
import './styles/FilterStyles.css';

class Filter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentSortingBy: ""
		}

	}

	updateSortingBy = (event) => {
		this.setState({
			currentSortingBy: event.target.value
		})
		//console.log(this.state.currentSortingBy);
	};

	render() {
		return (
			<div>
				<select onChange={this.updateSortingBy}>
					<option id="trending">Trending</option>
					<option id="reddit">Reddit</option>
					<option id="tumblr">Tumblr</option>
				</select>
			</div>
		);
	}
}

export default Filter;