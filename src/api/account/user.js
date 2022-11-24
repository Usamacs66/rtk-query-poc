import { api } from "../api";

export const user = api.injectEndpoints({
    endpoints:build =>({
        getLoggedInUser : build.query({
            query :()=>({
                url:"api", // any api end point 
                methode:"Get"
            })
            //can transform response here by wrinting wrapper
        })
    })
})

export const { useGetLoggedInUserQuery} = user