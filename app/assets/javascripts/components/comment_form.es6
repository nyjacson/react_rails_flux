class CommentForm extends React.Component {
  constructor() {
    super();
    this.defaultState = {id: 1, body: '', author: ''};
    this.state = this.defaultState;
  }

  submitComment(event) {
    event.preventDefault();
    Actions.addComment(this.state);
  }

  onFieldChange(event) {
    let prop = {};
    prop[event.target.name] = event.target.value;
    this.setState(prop);
  }

  render() {
    return <form>
        <label>Author</label>
        <input type="text" name="author" onChange={this.onFieldChange.bind(this)} value={this.state.author} />
        <textarea name='body' value={this.state.body} onChange={this.onFieldChange.bind(this)} />
        <button onClick={this.submitComment.bind(this)} type="submit" className="button"> Submit</button>
      </form>
  }

}
export default CommentForm