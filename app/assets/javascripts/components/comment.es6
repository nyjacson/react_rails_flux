import CommentForm from './comment_form';
import CommentList from './comment_list';

class Comment extends React.Component {
  static get contextTypes() {
    return {
      actions: React.PropTypes.object.isRequired
    }
  }

  static get propTypes() {
   return {
      id: React.PropTypes.number,
      author: React.PropTypes.string,
      body: React.PropTypes.string,
      rank: React.PropTypes.number
   }
  }

  constructor() {
    super();
    this.state = { isReplying : false }
  }

  onToggleReply() {
    this.setState({isReplying: !this.state.isReplying});
  }

  onUpvote(event) {
    this.context.actions.upvoteComment(this.props);
  }

  onCommentSubmitted(event) {
    this.setState({isReplying: false});
  }
  
  render() {
    const style  = {
      "display": "flex",
      "justifyContent": "space-between",
    }
    const replyText = this.state.isReplying ? 'Hide' : 'Reply';
    return (
      <li className='comment row collapse'>
        <div style={style}>
          <blockquote>
            {this.props.body}
            <div style={style}>
              <cite>
                by: {this.props.author}
              </cite>
              <span className="label secondary right">{this.props.rank}</span>
            </div>

          </blockquote>
        </div>
        <button className="button tiny secondary" onClick={this.onToggleReply.bind(this)}>{replyText}</button>
        <button className="button tiny" onClick={this.onUpvote.bind(this)}>+1</button>
        <CommentForm 
          parent_id={this.props.id} 
          isReplying={this.state.isReplying} 
          onCommentSubmitted={this.onCommentSubmitted.bind(this)} />
        <CommentList parent_id={this.props.id} />
      </li>
    );
  }
}

export default Comment;