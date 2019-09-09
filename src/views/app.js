import React from 'react';

import Header from './header';
import TodosView from './todosView';
import Footer from './footer';

export default function App (props) {
    return (
        <section>
            <Header {...props} />
            <TodosView {...props} />
            <Footer {...props} />
        </section>
    );    
};
