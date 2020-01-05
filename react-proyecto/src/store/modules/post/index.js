import { combineReducers } from 'redux';
import postsReducer from './reducer.posts';
import postByIdReducer from './reducer.post-by-id';
import postSaveReducer from './reducer.post-save';

const postReducer = combineReducers({
    posts: postsReducer,
    postById: postByIdReducer, 
    postSave: postSaveReducer, 

});

export default postReducer;

