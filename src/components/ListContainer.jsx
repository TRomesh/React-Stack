import React from 'react';
import ListItem from './ListItem.jsx';

var boxStyle ={
  height:200,
  width:700,
  backgroundColor: 'lightblue'
};

class ListContainer extends React.Component {

constructor() {
   super();

   this.state = {
      data:
      [
         {
            "id":1,
            "name":"Foo",
            "age":"20"
         },

         {
            "id":2,
            "name":"Bar",
            "age":"30"
         },

         {
            "id":3,
            "name":"Baz",
            "age":"40"
         }
      ]
   }
}

   render() {
      return (
         <div style={boxStyle}>
           <table>
             <tbody>      
                 {this.state.data.map((person, i) => <ListItem key = {i} data = {person} />)}
             </tbody>
           </table>
         </div>
      );
   }
}

export default ListContainer;
