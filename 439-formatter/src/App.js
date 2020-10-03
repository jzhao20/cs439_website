import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'tachyons';
import file_input from './components/file_input.js';
import axios from 'axios';
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      selectedFile: null,
    }
  }
  onFileChange = event => { 
     
      // Update the state 

      this.setState({ selectedFile: event.target.files[0] });
      this.setState({ target: event.target});
    }; 
    onFileUpload = () =>{
      const formData = new FormData(); 
      formData.append( 
        'file',this.selectedFile
      ); 
      axios.post("http://localhost:8000", formData, {})
      .then(res=>{
      console.log(res.statusText)
      }) 
  }
  fileData (){
    if(this.state.selectedFile){
      return(
        <div>
        <h2>file details</h2>
        <p>File Name: {this.state.selectedFile.name}</p> 
        <p>File Type: {this.state.selectedFile.type}</p> 
        </div>
    )
    }
    else{
      return(
        <div>
          <br />
          <h4>Choose a file before pressing upload</h4>
        </div>
      )
    }
  };
  render(){
    return(
      <div>
        <h1>
          Format files
        </h1>
        <h3>
          Upload file
        </h3>
        <div>
        <input type="file" onChange={this.onFileChange} /> 
          <button onClick={this.onFileUpload}> 
          Upload! 
          </button> 
        </div> 
      {this.fileData()}
    </div>   
    );
  }
}

export default App