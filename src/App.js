import React from 'react';
import ReactDOM from 'react-dom';

//css
import './App.css';

// const App = () => <h1>Hello Xep</h1>

/*class App extends React.Component {
	constructor(){
		super();
		this.state = {
			txt: "this is the state txt",
			cat: 0
		}
	}
	update(e){
		this.setState({
			txt: e.target.value
		})
	}*/
	// render(){
		// return (
		// 	<div>
		// 		<h1>Hello Pe Xep Lep</h1>
		// 		<b>Pe iu</b>
		// 	</div>
		// )

		// let txt = this.props.txt
		// return <h1>{txt}</h1>

// 		return (
// 			<div>
// 				// <input type="text"
// 				// onChange={this.update.bind(this)}
// 				// />
				
				/*<Widget update={this.update.bind(this)} />
				<h1>{this.state.txt}</h1>

			</div>
		)
	}
}*/

// App.propTypes = {
// 	txt: React.PropTypes.string,
// 	cat: React.PropTypes.number.isRequired
// }

// App.defaultProps = {
// 	txt: "this is the default txt"
// }

// const Widget = (props) => 
// <input type="text" onChange={props.update} />

//Access Nested Data with Reacts props.children
/*class App extends React.Component {
	render(){
		return <Button>I <Heart />React</Button>
	}
}

const Button = (props) => <button>{props.children}</button>

class Heart extends React.Component {
	render(){
		return <span>&hearts;</span>
	}
}*/

//Add Custom propType Validation to React Components
// class App extends React.Component {
// 	render(){
// 		return <Title text="aaaxsss" />
// 	}
// }

// const Title = (props) => <h1>Title: {props.text}</h1>

// Title.propTypes = {
// 	text(props, propName, component){
// 		if(!(propName in props)){
// 			return new Error(`missing ${propName}`)
// 		}
// 		if(props[propName].length < 6){
// 			return new Error(`${propName} was too short, > 6`)
// 		}
// 	}
// }


//Normalize Events with Reacts Synthetic Event System
/*class App extends React.Component {
	constructor(){
		super();
		this.state = {
			currentEvent: '---'
		};
		this.update = this.update.bind(this);
	}
	update(e){
		this.setState({
			currentEvent: e.type
		});
	}
	render(){
		return(
			<div>
				<textarea cols="20" rows="10"
					onKeyPress={this.update}
					onCut={this.update}
					onCopy={this.update}
					onPaste={this.update}
					onForcus={this.update}
					onBlur={this.update}
				/>
				<h1>{this.state.currentEvent}</h1>
			</div>
		)
	}
}*/


//Use React ref to Get a Reference to Specific Components
/*class App extends React.Component {
	constructor(){
		super();
		this.state = {
			x: '',
			a: '',
			b: '',
			c: ''
		};
	}
	update(e){
		this.setState({
			x: this.x.refs.input.value,
			a: ReactDOM.findDOMNode(this.a).value,
			b: this.b.value,
			c: this.refs.c.value
		});
	}
	render(){
		return (
			<div>
				X<Input
					ref={component => this.x = component}
					update={this.update.bind(this)}
				/> {this.state.x}
				<br/>
				A<Input2
					ref={component => this.a = component}
					update={this.update.bind(this)}
				/> {this.state.a}
				<br/>
				B<input
					ref={node => this.b = node}
					type="text"
					onChange={this.update.bind(this)}
				/> {this.state.b}
				<br/>
				C<input
					ref="c"
					type="text"
					onChange={this.update.bind(this)}
				/> {this.state.c}
			</div>
		)
	}
}

class Input extends React.Component {
	render(){
		return (
			<div>
				<input 
					ref="input" 
					type="text" 
					onChange={this.props.update} 
				/>
			</div>
		)
	}
}

class Input2 extends React.Component {
	render(){
		return <input type="text" onChange={this.props.update} />
	}
}*/

//Understand the React Component Lifecycle Methods
/*class App extends React.Component {
	constructor(){
		super();
		this.state = {
			val: 0
		};
		this.update = this.update.bind(this);
	}
	update(){
		this.setState({
			val: this.state.val + 1
		});
	}
	componentWillMount(){
		console.log('componentWillMount');
	}
	render(){
		console.log('render');
		return (
			<button onClick={this.update}>
				{this.state.val}
			</button>
		)
	}
	componentDidMount(){
		console.log('componentDidMount');
		this.inc = setInterval(this.update, 500);
	}
	componentWillUnmount(){
		console.log('componentWillUnmount');
		clearInterval(this.inc)
	}
}

class Wrapper extends React.Component {
	mount(){
		ReactDOM.render(<App />, document.getElementById('a'));
	}
	unmount(){
		ReactDOM.unmountComponentAtNode(document.getElementById('a'));
	}
	render(){
		return (
			<div>
				<button onClick={this.mount.bind(this)}>
					Mount
				</button>
				<button onClick={this.unmount.bind(this)}>
					Unmount
				</button>
				<div id="a"></div>
			</div>
		)
	}
}

export default Wrapper*/

//Control React Component Updates When New Props Are Received
/*class App extends React.Component {
	constructor(){
		super();
		this.state = {
			increasing: false
		};
	}
	update(){
		ReactDOM.render(
			<App val={this.props.val + 1} />,
			document.getElementById('root')
		)
	}
	componentWillReceiveProps(nextProps){
		this.setState({increasing: nextProps.val > this.props.val});
	}
	shouldComponentUpdate(nextProps, nextState){
		return nextProps.val % 5 === 0;
	}
	render(){
		console.log(this.state.increasing);
		return(
			 <button onClick={this.update.bind(this)} >
			 	{this.props.val}
			</button>
		)
	}
	componentDidUpdate(prevProps, prevState){
		console.log(`prevProps: ${prevProps.val}`);
	}
}

App.defaultProps = {
	val: 0
}*/

//Use map to Create React Components from Arrays of Data
/*class App extends React.Component {
	constructor(){
		super();
		this.state = {
			items: []
		};
	}
	componentWillMount(){
		fetch('https://swapi.co/api/people/?format=json')
			.then(response => response.json())
			.then( ({results: items}) => this.setState({items}) );
	}
	filter(e){
		this.setState({filter: e.target.value});
	}
	render(){
		let items = this.state.items;
		if(this.state.filter){
			items = items.filter(item => 
				item.name.toLowerCase()
				.includes(this.state.filter.toLowerCase()))
		}
		return(
			<div>
				<input type="text" onChange={this.filter.bind(this)} />
				{items.map(item => 
						<Person key={item.name} person={item} />)}
			</div>
		)
	}
}

const Person = (props) => <h4>{props.person.name} - {props.person.gender}</h4>*/

//Compose React Component Behavior with Higher Order Components
/*const HOC = (InnerComponent) => class extends React.Component{
	constructor(){
		super();
		this.state = {
			count: 0
		}
	}
	update(){
		this.setState({
			count: this.state.count + 1
		});
	}
	componentWillMount(){
		console.log('HOC will mount');
	}
	render(){
		return (
			<InnerComponent 
				{...this.props}
				{...this.state}
				update={this.update.bind(this)}
			/>
		)
	}
}

class App extends React.Component{
	componentWillMount(){
		console.log('app will mount');
	}
	render(){
		return(
			<div>
				<Button>button</Button>
				<hr/>
				<LabelHOC>label</LabelHOC>
			</div>
		)
	}
}

const Button = HOC((props) => 
	<button onClick={props.update}>{props.children} - {props.count}</button>
)

class Label extends React.Component{
	componentWillMount(){
		console.log('label will mount');
	}
	render(){
		return(
			<label onMouseMove={this.props.update}>
				{this.props.children} - {this.props.count}
			</label>
		)
	}
}

const LabelHOC = HOC(Label)*/

//Build a JSX Live Compiler as a React Component
class App extends React.Component{
	constructor(){
		super();
		this.state = {
			input: '/* Add your jsx here */',
			output: '',
			err: '',	
		};
	}
	update(e){
		let code = e.target.value;
		try {
			this.setState({
				output: window.Babel.transform(code, {
					presets: [
					'es2015', 'react'
				]}).code,
			});
		} 
		catch (err) {
			this.setState({
				err: err.message
			});
		}
	}
	render(){
		return(
			<div>
				<header>{this.state.err}</header>
				<div className="container">
					<textarea 
					onChange={this.update.bind(this)}
					defaultValue={this.state.input} />
					<pre>
						{this.state.output}
					</pre>
				</div>
			</div>
		)
	}
}

export default App




