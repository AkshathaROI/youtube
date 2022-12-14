import React, { Component } from 'react';
const  API= 'AIzaSyCIGiKfdeSyWuw_Ervzp9N8IvlnfEWUs0k'
const channelID = 'UCg0ccVHNwx_pwnLhStwscVA'
const result=10;

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`

class Youtube extends Component {

    constructor(props){
        super(props);
            this.state={
                resultyt:[]  // all json data stored here in this array
            };
            this.clicked=this.clicked.bind(this);
        
    }

    clicked(){
        fetch(finalURL)
        
        
    .then((response) => response.json())
    .then((responseJson) => {
      
      
        const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/" + obj.id.videoId);
        
        this.setState({resultyt});
        console.log(this.state.resultyt);
    })
    .catch((error) => {
      console.error(error);
    });
}

    render(){
       //sconsole.log(finalURL);
            return(
             
             
              <div>
              <button onClick={this.clicked}>Get youtube videos</button>
              {
                this.state.resultyt.map((link, i)=>{
                    console.log(link);
                    var frame =  <div key={i} className="youtube"> <iframe width="560" height="315"  src={link} title="youtube" frameBorder="0" allowFullScreen></iframe></div> 
                    return frame;
                })
              }
              {this.frame}
              </div> 
           
      );
            }
    
  }

  export default Youtube;
  