import React from "react";
import { useGetLoggedInUserQuery } from "../../api/account/user";
import { AccountInfo } from "./AccountInfo";
export const MyAccount = () =>{
 return (
    <>
    <div className="account-container">
     <AccountInfo/>
     </div>
     <hr/>
    </>
 )
}