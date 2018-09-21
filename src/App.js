import React,{Component} from 'react';
import Table from './Table';
class App extends Component {
    render () {
        const characters = [
            {
                'name':'charlie',
                'job':'Janitor'
            },{
                'name':'mac',
                'job':'Bouncer'
            },{
                'name':'Dee',
                'job':'aspring actress',
            },{
                'name':'Dennis',
                'job':'bartender'
            }
        ]
        return (
            <div className="container">
                <Table characterData={characters}/>
            </div>
        )
    }
}

export default App;