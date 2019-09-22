class ShowPost extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        postlist: []
      };
    }
    componentWillMount(){
      fetch('/get-post-list')
        .then(response => response.json())
        .then(({results: postlist}) => this.setState(postlist));
      console.log(this.state);
    }
    updatePost(id){
      hashHistory.push('/addPost/' + id);
    }
    deletePost(id){
      if(confirm('Are you sure ?')){
        var self = this;
        axios.post('/deletePost', {
          id: id
        })
        .then(function (response) {
          self.getPost();
        })
        .catch(function (error) {
          console.log('Error is ',error);
        });
      }
    }
  render() {
    // const postlist = this.state.postlist.map(post =>
    //   <div className="list-group">
    //     <td>
    //       <span className="glyphicon glyphicon-pencil"></span>
    //     </td>
    //     <td>
    //     <span onClick={this.deletePost.bind(this,post._id)} className="glyphicon glyphicon-remove"></span>
    //     </td>
    //     <a href="#" className="list-group-item active">
    //       <h4 className="list-group-item-heading">{post.title}</h4>
    //       <p className="list-group-item-text">{post.subject}</p>
    //     </a>
    //   </div>
    //   <br />
    // );
    
      // return (
      //  {postlist}
        
      // )
    }
}

class AddPost extends React.Component {
    constructor() {
        super();
    this.addPost = this.addPost.bind(this);
      this.handleTitleChange = this.handleTitleChange.bind(this);
      this.handleSubjectChange = this.handleSubjectChange.bind(this);
      this.state = {
        title: '',
        subject: '',
      };
    }
    handleTitleChange(e){
      this.setState({title:e.target.value})
    }
    handleSubjectChange(e){
      this.setState({subject:e.target.value})
    }
    addPost(){
        axios.post('/add-post', {
          title: this.state.title,
          subject: this.state.subject
        })
        .then(function (response) {
          console.log('response from add post is ',response);
          hashHistory.push('/')
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    getPostWithId(){
      var id = this.props.params.id;
      var self = this;
      axios.post('/getPostWithId', {
        id: id
      })
      .then(function (response) {
        if(response){
          self.setState({title:response.data.title});
          self.setState({subject:response.data.subject});  
        }
      })
      .catch(function (error) {
        console.log('error is ',error);
      });
    }
    render() {
      return (
        <div className="col-md-5">
          <div className="form-area">  
              <form role="form">
              <br styles="clear:both" />
                <div className="form-group">
    <input value={this.state.title} type="text" onChange={this.handleTitleChange} className="form-control" id="title" name="title" placeholder="Title" required />
</div>
                
<div className="form-group">
    <textarea value={this.state.subject} className="form-control" onChange={this.handleSubjectChange} type="textarea" id="subject" placeholder="Subject" maxlength="140" rows="7"></textarea>
</div>
                   
              <button type="button"  onClick={this.addPost} id="submit" name="submit" className="btn btn-primary pull-right">Add Post</button>
              </form>
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
        <Route component={ShowPost} path="/"></Route>
    <Route component={AddPost} path="/add"></Route>
    <Route component={AddPost} path="/addPost(/:id)"></Route>
    </Router>,
    document.getElementById('app')
);