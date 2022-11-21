import React, {Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.png';

class App extends Component{
    constructor(){
        super();
        this.state={displayBio: true};
        this.toggleDisplay= this.toggleDisplay.bind(this);

    }
    toggleDisplay = () => {
        this.setState({displayBio: this.state.displayBio });
    }
    
    render(){
        return(
            <div>
                <img src={profile} alt='profile' className='profile'/>
                <h1>Ola</h1>
                <p>My name is janhavi.</p>
                <p>Gonna do great in life.</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I have motivation of doin nice things</p>
                            <p>get it done are my things</p>
                            <p>so I am achieving everyday a little</p>
                            <button onClick={this.toggleDisplay}>Show less</button>
                        </div>       
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplay}>Read more</button>
                        </div>
                    )
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}

export default App;