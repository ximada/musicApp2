import React, { Component } from 'react';
//Importamos el creador de acciones 
import saveNewListAction from '../actions/saveNewListAction'
import {connect} from 'react-redux'; 
import {Playlist} from './Playlists'


 class CreatePlaylist extends Component {
  constructor(){
    super();
    this.onClickSave = this.onClickSave.bind(this);
    this.onListNameChange = this.onListNameChange.bind(this);
    this.onListUrlChange = this.onListUrlChange.bind(this);
    this.makeBundle = this.makeBundle.bind(this);
    this.state={
    name: "", 
    urlimg: ""
    }
  }


    //Cada vez que el input cambie, el valor se va a almacenar en el estado. 
  onListNameChange(event){
        //Sacamos una copia del estado. 
        const nameStateCopy = event.target.value
        //Enviamos de vuelta el estado 
        this.setState({ name: nameStateCopy });
  }


    //Cada vez que el input cambie, el valor se va a almacenar en el estado. 
  onListUrlChange(event){
        //Sacamos una copia del estado. 
        const urlStateCopy  = event.target.value
        //Enviamos de vuelta el estado 
        this.setState({ urlimg: urlStateCopy });
  }

    makeBundle(string1, string2){
      const newString = string1 + "_" + string2
      return newString 
    }


    //Cuando se le da el botón de click, se manda la action y ésta se envía al reducer con el dispatch
  onClickSave(event){
    event.preventDefault();
    //Se envía la acción por medio del creador de acciones envíandole el curso(contenido en el estado)
    this.props.saveNewListAction( this.makeBundle(this.state.name, this.state.urlimg));
  }
  render() {
    return (
      <div className="col-lg-3 playlist p-3 ml-5 mt-5 ">
        <form className = "playlist-form">
          <div className="form-group">
            <input type="text" className="form-control"   onChange={this.onListNameChange} placeholder="Name"/>
            </div>
            <div className="form-group">
              <input type="text" className="form-control"   onChange={this.onListUrlChange} placeholder="URL Image"/>
            </div>
              <button type="submit" id="btnsub"  onClick={this.onClickSave}>add new playlist</button>
        </form>
      </div>
    )
  }
};


//Función para recibir propiedades del estado de la tienda
//coursesReducer viene del nombre que se le dio en el rootreductor
function   mapStateToProps(state, ownProps){
  return {
      playlistsFromReducer: state.mainReducer
  } 
}



//Función para recibir acciones de la tienda. 
//se crea el nombre de la acción (createCourse), el parámetro que recibe 
//Y se coloca dispatch para ejecutar la acción y se llama al crrador de acciones
function mapDispatchToProps(dispatch){
  return {
    saveNewListAction: newListBundle => dispatch(saveNewListAction(newListBundle))
  }
  }
  
  //Se hace la conección entre el componente y redux
  //Si se le psa mapDispatchToProps ya no existe la función dispatch en el componente
  export default connect(mapStateToProps, mapDispatchToProps)(CreatePlaylist);