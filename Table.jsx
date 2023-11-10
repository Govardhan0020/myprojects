import React from 'react'

export default function Table(props) {
    let data = props.formdata;
    // console.log(props.delete)
    console.log(data, "propsdata ")
  return (
    <div>
        { data && data.length > 0 ? 
         <table>
            <tbody>  
         <tr>
             <th> s.no </th>
             <th> first Name  </th>
             <th> Last Name  </th>
             <th>  Email ID </th>
             <th>  Delete Item </th>
             <th>  Edit Item </th>
             <th>  Show Info </th>
         </tr>
 {
     data.map((item, index) => <tr key={item.id}>
         <td> {index + 1}  </td>
         <td> {item.Fname}  </td>
         <td> {item.Lname}  </td>
         <td> {item.Email}  </td>
         <td>  <button className='delete' onClick={ () => props.delete(item.id) }> Delete </button>   </td>
         <td>  <button className='edit' onClick={ () => props.edit(item.id) }> Edit </button>   </td>
         <td>  <button className='infobtn' onClick={ () => props.info(item) }> Info </button>   </td>
     </tr>)
 }
 
       </tbody>
     </table>  : 
     <h4 className='errortxt'> Data not found!  </h4>
    }
 

    </div>
  )
}
