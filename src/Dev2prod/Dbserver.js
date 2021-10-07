import React,{useEffect,useState} from 'react'

const Dbserver=()=>{
const [task,setTask]=useState([''])
console.log(task)
useEffect(()=>{

         fetch("http://localhost:4000/comments")
        .then((res)=>{return res.json()})
        //.then((data)=>console.log(data))
        .then((data)=>setTask(data))

},[])

let ravi=(e)=>{
e.preventDefault();

}
return(

    <div>
    <form onSubmit={ravi}>
      id<input type="teaxt" name=""/><br/>
      body<input type="teaxt" name=""/><br/>
      post id<input type="teaxt" name=""/><br/> 
      <button>Add</button>
      </form>
                 <table boredr="4px">
                     <tr>
                        <td>id</td>
                        <td>body</td>
                        <td>postid</td>
                   </tr>
         {
                    task.map((k,i)=>{
                     return(
                       <tr>
                            <td> {k.id}</td>
                            <td> {k.body}</td>
                            <td>  {k.postId}</td>
                       </tr>
                       
                 )
                })
             } 


               </table>

    </div>
                                                                // <div>
                                                                //          {
                                                                //              task.map((k,i)=>{
                                                                //                  return(
                                                                //                      <div>
                                                                //                          {k.id}
                                                                //                          {k.body}
                                                                //                          {k.postId}
                                                                //                      </div>
                                                                //                  )
                                                                //              })
                                                                //          }
                                                                // </div>
)
         
}          
export default Dbserver