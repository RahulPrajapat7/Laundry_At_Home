import * as api from "../../api";
export const  fetchData= ()=>{
    return async (dispatch)=>{
        const {data} = await api.fetchData();
        console.log(data)
        dispatch({
            type:'getData',
            payload:data
        })
    }
}
export const  addToCart= (amount)=>{
    return async (dispatch)=>{
        const {data} = await api.addToCart(amount);
        dispatch({
            type:'deposit',
            payload:data
        })
    }
}
export const removeToCart=(id)=>{
    return async (dispatch)=>{
        const {data} = await api.removeToCart(id);
        dispatch({
            type:'withdraw',
            payload:data
        })
    }
}

export const updateCart=(amount)=>{
    return async (dispatch)=>{
        const {data} = await api.updateCart(amount);
        dispatch({
            type:'update',
            payload:data
        })
    }
}