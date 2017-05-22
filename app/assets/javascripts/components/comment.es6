import CommentForm from './comment_form';
import CommentList from './comment_list';

class Comment extends React.Component {

  static get propTypes() {
   return {
      id: React.PropTypes.number,
      author: React.PropTypes.string,
      body: React.PropTypes.string,
      rank: React.PropTypes.number
   }
  }
  
  render() {
    const style  = {
      "display": "flex",
      "justifyContent": "space-between"
    }
    return (
      <div>
        <div style={style}>
          <p>{this.props.body}</p>
          <p>by: {this.props.author}</p>
        </div>
        <CommentForm parent_id={this.props.id} />
        <CommentList parent_id={this.props.id} />
      </div>
    );
  }
}

export default Comment;