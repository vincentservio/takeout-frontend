export const getTakeouts = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_TAKEOUTS"})
         fetch('http://localhost:3001/takeouts')
        .then(res => res.json())
        .then(takeouts => dispatch({type: "TAKEOUTS_LOADED", payload: takeouts}))
        
    }
}


export const addTakeout = (takeout) => {
 
    return (dispatch) => {
        dispatch({type: "ADDING_TAKEOUT"})
        fetch('http://localhost:3001/takeouts', {
        method: "POST",
        body: JSON.stringify(takeout), 
        headers: {
            'Content-Type': 'application/json'
         }                                                                          
    })                  
    .then(res  => res.json()) 
    // debugger
    .then(takeout => dispatch({type: "TAKEOUT_ADDED", payload: takeout  }))
}
}