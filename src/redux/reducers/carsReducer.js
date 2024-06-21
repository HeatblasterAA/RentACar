const initialData = {
    cars : []
};

const carsReducer = (state=initialData , action)=>{

    switch(action.type)
    {
        //Define your cases here
        case 'GET_ALL_CARS' : {
            return{
                ...state,
                cars : action.payload
            }
        }
        default:
            return state
    }
};

export { carsReducer };