import {Component} from'react'

export class Comment extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let comment=this.props.comment;
        return(
            <div>
                <p><b>Comment: </b>{comment.text}</p>
                <Profile user={comment.profile}/>
                <Likes likes={comment.likes}/>
            </div>
        )
    }
}
export class Profile extends Component{
    constructor(props){
        super(props)
    }
    render(){
        let profile=this.props.user;
        return(
            <div>
                <img src={profile.imgUrl} height='50' weidth='50'/>
                <p><b>Name: </b><i>{profile.name}</i></p>
            </div>
        )
    }
}
export class Likes extends Component{
    constructor(props){
        super(props)
    }
    render(){
        let like=this.props.likes;
        return(
            <div>
                <p><b>Likes: </b>{like}</p>
            </div>
        )
    }
}