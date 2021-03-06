/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING';
export const FETCHED_SMURFS = 'FETCHED';
export const ERROR = 'ERROR';
export const ADD_SMURF = 'ADD_SMURF';
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => dispatch => {
   dispatch({ type: FETCHING_SMURFS });
    axios
      .get('http://localhost:3333/smurfs')
      .then(result => dispatch({ type: FETCHED_SMURFS, smurfs: result.data }))
      .catch(err =>
        dispatch({ type: ERROR, errorMessage: 'Error occured while fetching' }))
  }

  export const addSmurf = smurf => dispatch => {
    dispatch({type: ADD_SMURF });
    axios
      .post('http://localhost:3333/smurfs', { ...smurf })
      .then(response => { dispatch({ type: ADD_SMURF }) })
      .catch(err => { dispatch({ type: ERROR, errorMessage: 'Error occured while adding smurf' }) })
  };