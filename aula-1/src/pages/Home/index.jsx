import React from 'react';

class Home extends React.Component {

    constructor() {
        super();
        this.search = this.search.bind(this);
    }

    search(event){
        console.log(event.currentTarget);
    }

    

    render(){
        return (
            <div class="buscar">
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input className="mdl-textfield__input" type="text" id="search" />
                <label className="mdl-textfield__label" htmlFor="search">Digite para buscar...</label>
            </div>
          </div>
        );
    }
}

export default Home;