import {createStore} from 'redux';
import { createReadStream } from 'fs';
import rootReducer from '../reducers/rootReducer'


const configureStore=()=>{
    return createStore(rootReducer)
}


export default configureStore;