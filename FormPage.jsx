import React, { useEffect, useState } from 'react'
import Table from './Table';
import {  useNavigate } from 'react-router-dom';
export default function FormPage() {
  let navagate = useNavigate();
  const [list, setList] = useState([])
  const [searchData, setSearchData] = useState("")
  const [toggleBtn, setToggleBtn] = useState(false)
  const [editid, setEditId] = useState(null)
  const [hideForm, setHideForm] = useState(true)
  const [inputData, setInputDAta] = useState({
    fname: "",
    lname: "",
    email: "",
    designation: "",
    officelocaton: "",
    address: ""
  })


  useEffect(() => {
    
    let localdata = JSON.parse(localStorage.getItem("clientdata"))
    console.log(localdata, "localdata")
    if(localdata){
      setList(localdata)
  
    }
 

  
  }, [])

  const { fname, lname, email, designation, officelocaton, address } = inputData;

  const changeHandler = (e) => {
    if (e.currentTarget.value.charAt(0) === ' ') {
      e.target.value = e.target.value.replace(/\s/g, '');
    } else {
      let name = e.target.name;
      let value = e.target.value;
      setInputDAta({ ...inputData, [name]: value })

    }
  }

  // mongodb+srv://govardhanjpg6940:<password>@cluster0.xvhfran.mongodb.net/
// mongodb+srv://govardhanjpg6940:<password>@cluster0.xvhfran.mongodb.net/

  const submitHandler = e => {
    e.preventDefault()
    if (!fname || !lname || !email || !designation || !officelocaton || !address) {
      alert("please fill the inputs .... ")
    } else if (toggleBtn && inputData) {
      console.log(editid, "editid edit")

      let afterEdit = list.map((item) => {
        if (item.id === editid) {
          return {
            ...item,
            Fname: fname,
            Lname: lname,
            Email: email,
            Design: designation,
            Location: officelocaton,
            Address: address

          };
        }
        return item;
      })

      setList(afterEdit)
      setToggleBtn(false)
      setEditId(null)
      setHideForm(!hideForm)

    } else {
      let isNew = true;
      let newuser = {
        id: new Date().getTime().toString(),
        Fname: fname,
        Lname: lname,
        Email: email,
        Design: designation,
        Location: officelocaton,
        Address: address
      }

      list.forEach((item) => {
        if(item.Email === email) {
          isNew = false
        }
      })
      // console.log(isNew, "isnes")
      if (isNew) {
        let userArr = [...list]
        userArr.push(newuser)

        setList([...list, newuser])
        localStorage.setItem("clientdata", JSON.stringify(userArr))
        setHideForm(!hideForm)

      } else {
        alert(" user already exist ... ")
      }

      // console.log(newuser, "new ")
      //  console.log( inputData, "inputdata ")

    }
    console.log(list, "lidt")

    setInputDAta({
      fname: "",
      lname: "",
      email: "",
      designation: "",
      officelocaton: "",
      address: ""
    })

  }

  const searchHandler = e => {
    // console.log(e.target.value, "search")
    if (e.currentTarget.value.charAt(0) === ' ') {
      e.target.value = e.target.value.replace(/\s/g, '');
    } else {
      let searchString = e.target.value;
      setSearchData(searchString)
    }
  }

  const DeleteItem = (getid) => {
    // console.log(getid, "delete id ")
    let afterdelete = list.filter((item) => item.id !== getid)
    //  console.log(afterdelete, "afterdelet")
    setList(afterdelete)
    localStorage.setItem("clientdata", JSON.stringify(afterdelete))

    setHideForm(!hideForm)

  }

  const EditItem = (getid) => {
    //   console.log(getid, "editid ")
    let editeditem = list.find((item) => item.id === getid)
    // console.log(editeditem, "edititem")
    setInputDAta({
      fname: editeditem.Fname,
      lname: editeditem.Lname,
      email: editeditem.Email,
      designation: editeditem.Design,
      officelocaton: editeditem.Location,
      address: editeditem.Address
    })
    setToggleBtn(true)
    setEditId(getid)
    setHideForm(!hideForm)

  }

  const showData = (item) => {
    // console.log(item, "item")
    navagate("/details", { state: item })

  }



  let finalData = list.filter((item) => item.Lname.toLowerCase().includes(searchData.toLowerCase()))
  // console.log(finalData, "finaldata")


  return (
    <div className='formpage'>
      {hideForm && <div className='form'>
        <form onSubmit={submitHandler}>
          <h2 className='heading'> CRUD APP </h2>
          <div className='firstname'>
            <label> first name : </label>
            <input type='text'
              data-testid="firstname"
              placeholder='enter your first name ' name="fname" value={fname} onChange={changeHandler} />
          </div>
          <div className='lastname'>
            <label> Last name : </label>
            <input type='text' data-testid="lastname" placeholder='enter your last name ' name="lname" value={lname} onChange={changeHandler} />
          </div>
          <div className='emailid'>
            <label> Email ID  : </label>
            <input type='email' data-testid="email" placeholder='enter your email id ' name="email" value={email} onChange={changeHandler} />
          </div>
          <div className='designation'>
            <label> Designation=  : </label>
            <input type='text' data-testid="design" placeholder='enter your phone number ' name="designation" value={designation} onChange={changeHandler}
            />
          </div>
          <div className='location'>
            <label> Location : </label>
            <input type='text' data-testid="location" placeholder='enter your office location ' name="officelocaton" value={officelocaton} onChange={changeHandler} />
          </div>
          <div className='address'>
            <label> Address : </label>
            <input type='text' data-testid="address" placeholder='enter your address ' name="address" value={address} onChange={changeHandler} />
          </div>

          <div className='submitbutton'>
            <button type='submit' className="submit" data-testid="submit"
              disabled={fname && lname && email && designation && officelocaton && address ? false : true}
            > {toggleBtn ? " Updata " : " Submit "} </button>
          </div>
          <div className='showuserbutton'>
            <button disabled={list.length > 0 ? false : true} className='showuser' data-testid="showuser"
              onClick={() => {
              setHideForm(!hideForm)

              } } > show user Data </button>
          </div>

        </form>
      </div>}
      <div>
        {list && list.length > 0 && !hideForm &&
          <div className='tableandsearchinput'>
            <div className='searchinput'>
              <div>
                <label> Search : </label>
                <input type='text' placeholder='enter the name to search' onChange={searchHandler} />
              </div>
              <button className='adduser' onClick={() => {setHideForm(!hideForm) 

              }}>  Add user   </button>
            </div>
            <Table formdata={finalData} delete={DeleteItem} edit={EditItem}
              info={showData}

            />
          </div>
        }
      </div>

    </div>
  )
}





