import React from 'react';


class ListItem extends React.Component {

   render() {
      return (
         <tr><td>{this.props.data.id} {this.props.data.name} {this.props.data.age}</td></tr>
      );
   }
}

export default ListItem;
