import { Button } from '@mui/base';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Viewbooks = () => {
  var[books,setBooks] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3007/viewbooks")
    .then((response)=>{
      console.log(response.data)
      setBooks(response.data);
    })
  })
  var deleteValues =(id)=>{
    console.log(id);
    axios.delete("http//localhost:3007/deletebooks/"+id)
    .then((response)=>){
      alert("deleted")
      window.location.reload(false)
    }
    .catch(err=>console.log(err))
  }
  cons Update

  return (
    <div style={{paddingTop:'100px'}}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Book name</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Language</TableCell>
              <TableCell>Genre</TableCell>
              <TableCell>Book No</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((val,i)=>{
              return(
                <TableRow key={i}>
                  <TableCell{val.Bookname}></TableCell>
                  <TableCell{val.Author}></TableCell>
                  <TableCell{val.Language}></TableCell>
                  <TableCell{val.Genre}></TableCell>
                  <TableCell{val.Bookno}></TableCell>
                  <TableCell>
                    <Button onClick={()=>deleteValues(val._id)}>
                      Delete
                    </Button>
                  </TableCell>
                  <TableCell>
                  <Button onClick={()=>deleteValues(val._id)}>
                    Update
                  </Button>
                </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Viewbooks