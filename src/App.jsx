import { Component } from 'react';
import Profile from './components/Profile';
import {UserContext, ColorContext} from './components/MyContext'

class App extends Component {

  state = {
    user: {
      name: "Broli",
      age: 24
    }
  }

  render () {
    return (
      <UserContext.Provider value={this.state.user}>
        <ColorContext.Provider value={"red"}>
          <Profile />
        </ColorContext.Provider>
      </UserContext.Provider>
    )
  }

}

export default App
