import { useGetLoggedInUserQuery } from "../../api/account/user"

export const AccountInfo = ()=>{
    const {data,isLoading,isSuccess} = useGetLoggedInUserQuery();
    debugger;
    if(isLoading){
        return <>loading...</>
    }
    if(!isSuccess){
        return <>error occoured...</>
    }
    console.log(data)
    return (
        <div className="account-info-container">
          <div className="row">
           <div className="column">Name</div>
           <div className="column">{data.results[0].name.title} {data.results[0].name.first} {data.results[0].name.last}</div>
          </div>

          <div className="row">
           <div className="column">Email</div>
           <div className="column">{data.results[0].email}</div>
          </div>

          <div className="row">
           <div className="column">Age</div>
           <div className="column">{data.results[0].dob.age}</div>
          </div>

          <div className="row">
           <div className="column">Phone</div>
           <div className="column">{data.results[0].phone}</div>
          </div>

          <div className="row">
           <div className="column">Gender</div>
           <div className="column">{data.results[0].gender}</div>
          </div>

        </div>
    )
}