import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import EditPerson from './components/EditPerson';
import PersonViewer from './components/PeopleViewer';
import PersonDetails from './components/PersonDetails';
import NewPerson from './components/NewPerson';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<PersonViewer/>} />
          <Route path='/person-details/:id' element={<PersonDetails/>} />
          <Route path='/new-person' element={<NewPerson/>} />
          <Route path='/edit-person' element={<EditPerson/>} />
          
        {/* 
          <Route path='/create-person' element={CreateBook} />
          <Route path='/edit-person/:id' element={UpdateBookInfo} />
        */}
      </Routes>
    </Router>
  );
}

export default App;
