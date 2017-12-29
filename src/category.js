import React from "react";
import axios from "axios";

export default class Category extends React.Component{
    constructor(props){
        super(props);
        this.state={
            apple :[],
            orange:[]
        }
    };
    clickedme= (e)=>{
            axios.get(`https://davids-restaurant.herokuapp.com/menu_items.json?category=${e}`)
            .then((res)=>{
              var s= res.data.menu_items
                  this.setState({
                    orange:s,
                })
                console.log(s);
                
                
                
       })
        };
    


    componentDidMount(){
        axios.get("https://davids-restaurant.herokuapp.com/categories.json")
        .then((response)=>{
            var p= response.data
            this.setState({
                apple:p,
            })
        });  
         
    };

    render(){
        return(
                <div>
                    
                        {
                             this.state.apple.map((info, i)=>
                                 <p onClick={this.clickedme.bind(this, info.short_name)} >
                                        {info.name} - {info.short_name}
                                        </p>
                                        )
                        }
               
                   
               <p>The slected short_name item:{ this.state.short_name= e.target.short_name}</p>
                <table>
                    <tbody>
                        {
                          this.state.orange.map(function(content, k){
                               return(
                                       
                                         <div>   
                                        <tr>
                                             <td>{content.name}</td>
                                             <td>{content.description}</td>
                                        </tr>
                                        <p>The slected short_name item:{content.short_name}</p>
                                        </div>
                                    ) 
                                            
                                })
                       }
                    </tbody>
                </table>
            </div>
                            
          
                );
        }; 
    }