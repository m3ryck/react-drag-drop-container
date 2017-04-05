var React = require('react');
var ReactDOM = require('react-dom');
import { DragDropContainer, DropTarget } from '../src/index';
import {Gorilla, Puppy} from './Gorilla';
import BasicDragDemo from './BasicDragDemo';
import DragFoodToAnimalsDemo from './DragFoodToAnimalsDemo';
import ExpandsOnDragEnter from './ExpandsOnDragEnter';

var App = React.createClass({

	getInitialState () {
		return {gorillaHighlighted: false, puppyHighlighted: false, compKey: 'gorilla'};
	},

	dropped (e) {
		this.setState({gorillaHighlighted: false, puppyHighlighted: false});
		e.sourceElem.style.visibility="hidden";
		alert(`Thanks for the ${e.dragData.label}! It tasted ${e.dragData.tastes}!`)
	},

	highlight(animal) {
		let newState = {};
		newState[animal + 'Highlighted'] = true;
		this.setState(newState);
	},

	unHighlight(animal) {
		let newState = {};
		newState[animal + 'Highlighted'] = false;
		this.setState(newState);
	},

	landedOn(e) {
		console.log('I was dropped on ' + e.dropData.name)
	},

	render () {
		return (
			<div>
				<BasicDragDemo />
				<hr />
				<DragFoodToAnimalsDemo/>
			</div>
		);

	// 	return (
	// 		<div>
	// 			<DragDropContainer xOnly={true}>
	// 				<DropTarget
	// 					onDrop={this.dropped}
	// 					onDragEnter={()=>{this.highlight('gorilla')}}
	// 					onDragLeave={()=>{this.unHighlight('gorilla')}}
	// 					targetKey="gorilla"
	// 					dropData={{name: 'Kong'}}
	// 				>
	// 					<Gorilla highlighted={this.state.gorillaHighlighted} />
	// 				</DropTarget>
	// 			</DragDropContainer>
	// 			<DragDropContainer yOnly={true}>
	// 				<DropTarget
	// 					onDrop={this.dropped}
	// 					onDragEnter={()=>{this.highlight('puppy')}}
	// 					onDragLeave={()=>{this.unHighlight('puppy')}}
	// 					targetKey="puppy"
	// 					dropData={{name: 'Sparky'}}
	// 				>
	// 					<Puppy highlighted={this.state.puppyHighlighted} />
	// 				</DropTarget>
	// 			</DragDropContainer>
  //
  //
	// 			<div style={{ float: 'left', marginTop: 100 }}>
	// 				<ExpandsOnDragEnter/>
	// 			</div>
	// 			<div style={{ float: 'left', marginLeft: 20, borderLeft: '1px dashed #999' }}>
	// 				<ExpandsOnDragEnter/>
	// 				<DragDropContainer
	// 					returnToBase={true}
	// 					targetKey="gorilla"
	// 					dragData={{'label': 'banana', 'tastes': 'yummy'}}
	// 					onDropped={this.landedOn}
	// 				>
	// 					<img src="https://s28.postimg.org/bocsgf43d/banana.png" height="45"/>
	// 				</DragDropContainer>
  //
		// 			<DragDropContainer
		// 				targetKey="puppy"
		// 				returnToBase={true}
		// 				dragData={{'label': 'cheeseburger', 'tastes': 'excellent'}}
		// 				dragGhost={<div style={{backgroundColor: '#ddd', padding: 6, borderRadius: 4, textAlign: 'center'}}>Cheeseburger<br/>Drag Ghost</div>}
		// 				onDropped={this.landedOn}
		// 			>
		// 				<img src="https://s28.postimg.org/3o335ocjd/surprise.png" height="45"/>
		// 			</DragDropContainer>
  //
	// 				<DragDropContainer
	// 					targetKey="gorilla"
	// 					returnToBase={true}
	// 					dragData={{'label': 'orange', 'tastes': 'yummy'}}
	// 					onDropped={this.landedOn}
	// 				>
	// 					<img src="https://s28.postimg.org/3yalp0r5l/orange.png" height="45"/>
	// 				</DragDropContainer>
	//
	// 				<DragDropContainer
	// 					targetKey="puppy"
	// 					returnToBase={true}
	// 					dragData={{'label': 'pickle', 'tastes': 'bad'}}
	// 					onDropped={this.landedOn}
	// 				>
	// 					<img src="https://s28.postimg.org/5em475u2h/pickle.png" height="45"/>
	// 				</DragDropContainer>
	// 			</div>
  //
	// 			<div style={{ float: 'left', marginLeft: 20 }}>
  //
	// 				<DragDropContainer
	// 					targetKey="puppy"
	// 					returnToBase={true}
	// 					dragData={{'label': 'dogfood', 'tastes': 'yummy'}}
	// 					dragHandleClassName="drag_handle"
	// 					onDropped={this.landedOn}
	// 				>
	// 					<div style={{width: 80, textAlign: "center"}}>
	// 						<div className="drag_handle" style={{backgroundColor:"#aaa"}}>drag handle</div>
	// 						<img draggable="false" src="https://www.dogfoodadvisor.com/wp-content/uploads/2009/01/dog-food-can-160.jpg" height="100" />
	// 						<div className="drag_handle" style={{backgroundColor:"#aaa"}}>drag handle</div>
	// 					</div>
	// 				</DragDropContainer>
	// 				<br/><br/><br/>
  //
	// 				<DragDropContainer
	// 					noDragging={true}
					{/*>*/}
						{/*<div style={{ padding: 10, border: '4px solid #ddd', width: 60, textAlign: 'center', borderRadius: 6}}>I am not draggable</div>*/}
	// 				</DragDropContainer>
	// 				<br/><br/><br/>
	// 			</div>
  //
	// 		</div>
	// 	);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
