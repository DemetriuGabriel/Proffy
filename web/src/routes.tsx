import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import LandingPage from "./Pages/Landing";
import TeacherFormPage from "./Pages/TeacherForm";
import TeacherListPage from "./Pages/TeacherList";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={LandingPage} />
      <Route path="/study" component={TeacherListPage} />
      <Route path="/give-classes" component={TeacherFormPage} />
    </BrowserRouter>
  )
}
