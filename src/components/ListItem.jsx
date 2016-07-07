import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class ListItem extends React.Component {

   render(){
      return (

         <tr><td>{this.props.data.id} {this.props.data.name} {this.props.data.age}</td></tr>

      );
   }
}

export default ListItem;
