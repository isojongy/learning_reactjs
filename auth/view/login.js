
class Login extends React.Component {
    constructor(props) {
      super(props);
      this.login = this.login.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.state = {
        email:'',
        password:''
      };
    }
    handleEmailChange(e){
      this.setState({email:e.target.value})
    }
    handlePasswordChange(e){
      this.setState({password:e.target.value})
    }
    login(){
        alert('Email address is ' + this.state.email + ' Password is ' + this.state.password);     
        axios.post('/login', {
            email: this.state.email,
            password: this.state.password
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });       
    }
    render() {
        return (
            <form className="form-login">
                <h2 className="form-login-heading">Đăng nhập</h2>
                <label for="inputEmail" className="sr-only">Nhập địa chỉ email
                </label>
                <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control" placeholder="Email" required autofocus />
                <label for="inputPassword" className="sr-only">Mật khẩu</label>
                <input type="password" onChange={this.handlePaswordChange} id="inputPassword" className="form-control" placeholder="Mật khẩu" required />
                <button className="btn btn-lg btn-primary btn-block" type="button" onClick={this.login}>Đăng nhập
                </button>
            </form>
        );
    }
}

class Register extends React.Component{
    render() {
        return (
          <div>
            <form className="form-register">
              <h2 className="form-register-heading">Please register</h2>
              <label for="inputName" className="sr-only">Name</label>
              <input type="name" onChange={this.handleNameChange} id="inputName" className="form-control" placeholder="Name" required autofocus />
              <label for="inputEmail" className="sr-only">Email address</label>
              <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
              <label for="inputPassword" className="sr-only">Password</label>
              <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required />
              
              <button className="btn btn-lg btn-primary btn-block" onClick={this.register} type="button">Register</button>
            </form>
            <div>
              <Link to="/">{'Register'}</Link>
            </div>
          </div>    
        )
      }
  }

var Router = window.ReactRouter.Router;
var Route = window.ReactRouter.Route;
var hashHistory = window.ReactRouter.hashHistory;
var Link = window.ReactRouter.Link;

ReactDOM.render(
    <Router history={hashHistory}>
        <Route component={Login} path="/"></Route>
        <Route component={Register} path="/register"></Route>
    </Router>,
    document.getElementById('app')
);