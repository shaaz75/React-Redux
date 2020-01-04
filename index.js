const redux=require('redux');
const createStore=redux.createStore;
const combineReducers= redux.combineReducers;

const BUY_CAKE='BUY_CAKE';
const BUY_ICE_CREAM='BUY_ICE_CREAM'

//Action to buy cake
function buyCake(){
    return {
        type:BUY_CAKE
    }
}
//Action to buy ice cream
function buyIceCream(){
    return {
        type:BUY_ICE_CREAM
    }
}

const initialCakeState={
    noOfCakes:10
}
const initialIceCreamState={
    noOfIceCreams:20
}

//Define cake reducer
const cakeReducer=(state=initialCakeState,action)=>
{
    switch(action.type)
    {
        case BUY_CAKE: return  {
            ...state,
            noOfCakes:state.noOfCakes-1
        }

        default: return state
    }
}

//Define ice cream reducer
const iceCreamReducer=(state=initialIceCreamState,action)=>
{
    switch(action.type)
    {
        case BUY_ICE_CREAM: return  {
            ...state,
            noOfIceCreams:state.noOfIceCreams-1
        }

        default: return state
    }
}

//Combine cakeReducer and iceCreamReducer
const rootReducers=combineReducers({ cake:cakeReducer, iceCream:iceCreamReducer});

//Creae Store
const store=createStore(rootReducers)
console.log('Initial State', store.getState())
const unSubscribe=store.subscribe(()=>{ console.log('Updated State', store.getState())})

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unSubscribe()
