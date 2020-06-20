import React, { Component } from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class DishDetail extends Component {

constructor(props){
    super(props);

    
}

renderComments(comments){
    if(comments!=null){
        
        const cmt = comments.map(comment =>{
            return(
                <li key = {comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}</p>
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US',{
                        year:'numeric',
                        month:'long',
                        day:'2-digit'
                        }).format(new Date(comment.date))}
                </li>
            )
        })

        return(
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className = "list-unstyled">
                    {cmt}
                </ul>
            </div>
        )
    }
    else{
        return (
            <div></div>
        )
    }
}

render(type){
    if(type!= null){
        return(
              <div className="col-12 col-md-5 m-1">
                  <Card>
                      <CardImg width = "100" src = {type.image} alt = {type.name}/>

                      <CardBody>
                        <CardTitle>{type.name}</CardTitle>
                        <CardText>{type.description}</CardText>  
                      </CardBody>
                  </Card>
              </div>           
        )
    }
    else{
        return(
            <div></div>
        )
    }
}

render(){

    const type = this.props.type;
    if(type == null)
        return(<div></div>);
    
    const typeItem = this.render(type);
    const commentItem = this.renderComments(type.comments)
    return(

        <div className="row">
            {typeItem}
            {commentItem}
        </div>
        
    );
}

}

export default DishDetail;