import React, {Component} from "react";
import './styles/FilterStyles.css';

/*
	Calls the parent method handleSorting to update the parent component state.
*/
class Filter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentSortingBy: ""
		}

	}

	render() {
		return (
			<div>
				<select onChange={this.props.action}> 
					<option id="trending">Trending</option>
					<option id="reddit">Reddit</option>
					<option id="tumblr">Tumblr</option>
				</select>
			</div>

		);
	}
}

export default Filter;