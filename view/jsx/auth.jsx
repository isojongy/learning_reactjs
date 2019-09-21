class Login extends React.Component {
    constructor(props) {
      super(props);
      this.login = this.login.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.state = {
        name: '',
        email: '',
        password: ''
      };
    }
    handleEmailChange(e){
      this.setState({email:e.target.value})
    }
    handlePasswordChange(e){
      this.setState({password:e.target.value})
    }
  login() {
    axios.post('/login', {
      email: this.state.email,
      password: this.state.password
    })
      .then(function (response) {
        console.log(response);
      if(response.data == 'success'){
        window.location.assign('http://localhost:3000/home')
      }
    })
    .catch(function (error) {
      console.log(error);
    }); 
  }
  
    render() {
        return (
          <div>
            <form className="form-login">
              <h2 className="form-login-heading">Đăng nhập</h2>
              <label for="inputEmail" className="sr-only">Nhập email</label>
                  <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control" placeholder="Email*" required autofocus />
                  <label for="inputPassword" className="sr-only">Mật khẩu</label>
                  <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Mật khẩu*" required />
                  <button className="btn btn-lg btn-primary btn-block" type="button" onClick={this.login}>Đăng nhập
                  </button>
            </form>
            <div>
                <Link to="/register">{'Đăng ký'}</Link>
              </div>
            </div>
        );
    }
}

class Register  extends React.Component {
  constructor(props) {
    super(props);
    this.register = this.register.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
  }
  handleNameChange(e){
    this.setState({name:e.target.value})
}
  handleEmailChange(e){
    this.setState({email:e.target.value})
  }
  handlePasswordChange(e) {
    console.log(e);
    this.setState({password:e.target.value})
  }
  register() {
    // console.log('this.state', this.state);
    axios.post('/register', {
      name: this.state.name,
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
          <div>
            <form className="form-register">
              <h2 className="form-register-heading">Đăng ký</h2>
              <label for="inputName" className="sr-only">Name</label>
              <input type="name" onChange={this.handleNameChange} id="inputName" className="form-control" placeholder="Tên*" required autofocus />
              <label for="inputEmail" className="sr-only">Email address</label>
              <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control" placeholder="Địa chỉ email*" required autofocus />
              <label for="inputPassword" className="sr-only">Password</label>
              <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Mật khẩu*" required />
              
              <button className="btn btn-lg btn-primary btn-block" onClick={this.register} type="button">Đăng ký</button>
            </form>
            <div>
              <Link to="/">{'Đăng nhập'}</Link>
            </div>
          </div>    
        )
      }
}

//define router
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