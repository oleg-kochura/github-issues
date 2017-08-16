import React, { Component } from 'react';
import Form from './containers/Form';
import IssuesListContainer from './containers/IssuesListContainer';
import PaginationContainer from './containers/PaginationContainer';

class App extends Component {

  render() {
    return (
     <div>
       <Form />
       <IssuesListContainer />
       <PaginationContainer />
     </div>
    );
  }
}

export default App;
