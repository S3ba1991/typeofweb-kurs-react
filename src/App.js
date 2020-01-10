import React from 'react';
import logo from './logo.svg';
import './App.css';

	var allUsers = ["Michał","Ania","Kasia","Tomek"]
	const UsersList = ({ users }) => {
	  if (users.length > 0) {
		return (
		  <ul>
			{users.map(user => <li key={user}>{user}</li>)}
		  </ul>
		);
	  }

	  return (
		<p>No results!</p>
	  );
	};

	class App extends React.Component {
		constructor() {
			super();

			this.state = {
			  filteredUsers: allUsers
			};
		}
	  
		filterUsers(e) {
		  const text = e.currentTarget.value;
		  const filteredUsers = this.getFilteredUsersForText(text)
		  this.setState({
			filteredUsers
		  });
		}
	
		getFilteredUsersForText(text) {
		  return allUsers.filter(user => user.toLowerCase().includes(text.toLowerCase()))
		}

		render() {
			return (
			  <div>
				<input onInput={this.filterUsers.bind(this)} />
				<UsersList users={this.state.filteredUsers} />
			  </div>
			);
		  }
	};

export default App;
