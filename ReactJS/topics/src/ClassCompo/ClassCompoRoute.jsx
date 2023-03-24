import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import ClassCompoMenu from './ClassCompoMenu';
import WelcomeToClassCompo from './01WelcomeToClassCompo.jsx';
import ClassCompoConstructor from './02ClassCompoConstructor.jsx';
import ClassCompoState from './03ClassCompoState.jsx';
import ClassCompojsx from './04ClassCompojsx.jsx';
import ProspExample from './05Props';
import StateLifeCycle from './07statelifecycle';

class ClassCompoRoute extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<ClassCompoMenu />} >
                        <Route path="classcompointro" element={<WelcomeToClassCompo />} />
                        <Route path="classcompoconstructor" element={<ClassCompoConstructor />} />
                        <Route path="classcompostate" element={<ClassCompoState />} />
                        <Route path="classcompojsx" element={<ClassCompojsx />} />
                        <Route path="classcompoporps" element={<ProspExample />} />
                        <Route path="classcompostatelifecycle" element={<StateLifeCycle />} />
                    </Route>
                </Routes>
            </>
        );
    }
}

export default ClassCompoRoute;