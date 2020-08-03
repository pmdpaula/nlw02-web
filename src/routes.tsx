import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import TeacherList from './pages/TeacherList/TeacherList';
import TeacherForm from './pages/TeacherForm/TeacherForm';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
    </BrowserRouter>
  );
};

export default Routes;
