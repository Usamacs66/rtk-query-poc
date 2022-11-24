import { createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl:"https://randomuser.me",//"https://api.netigate-dev.com",
    prepareHeaders:headers =>{
        const token = window.localStorage.getItem("token")
        if(token){
            headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    }
});

const baseQueryWithReAuth = async (args,api,extraOptions) =>{
    //check if token expire then re auth it (logic)
    let result = await baseQuery(args,api,extraOptions)
    return result;
}

export const api = createApi({
    reducerPath:'api',
    baseQuery:baseQueryWithReAuth,
    endpoints : ()=>({})
});