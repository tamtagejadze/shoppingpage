function init(initialCount) { 
    return {
        count: initialCount = 0
    };
}

export default function productReducer (state,action){
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};  
        case 'reset': 
            return init(action.payload);   
        default: 
            throw new Error();
    }
}