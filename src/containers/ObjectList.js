import React, {Component} from 'react';
import ObjectCard from '../components/ObjectCard';
import SearchBox from '../components/SearchBox';
import Config from '../config/apiconfig';

class ObjectList extends Component {
    constructor() {
        super()
        console.log('init');
        this.state = {
            objects: [],
            searchfield: '',
            type: ''
        }
    }

    componentDidMount() {
        
        const type = this.props.match.path.replace(/[/]/g,'');
        fetch(Config.url+type)
        .then(response=> response.json())
        .then(data => {this.setState({ objects: data.results})});
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        
        const {objects, searchfield} = this.state;
        const type = this.props.match.path.replace(/[/]/g,'');

        const display = Config.card_display[type];
        console.log("display: ", display);
        const filteredObjects = objects.filter(object =>{
            return object[display[0]].toLowerCase().includes(searchfield.toLowerCase());
          });
        const objectComponent = filteredObjects.map((e, i) => {
            return <ObjectCard key={i} object={e} display={display}/>;
        });
        return !objects.length ? 
        <h1>Loading...</h1> :
        (
            <div>
                <h1 className="ttc">{type}</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                {objectComponent}
            </div>
        );
    }
}

export default ObjectList;