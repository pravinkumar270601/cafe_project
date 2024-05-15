import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import styled from "@emotion/styled/macro";
import { Paper } from "@mui/material";
import * as MASTER from "./Tableentries";
import "./CusTable.css";
// import SearchIcon from '@mui/icons-material/Search';
import { IoSearch, IoPencil, IoTrash } from "react-icons/io5";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";
import { Height } from "@mui/icons-material";
import { FaAngleDoubleRight } from "react-icons/fa";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
// import actions from "../../ReduxStore/actions/index";
// import { useDispatch, useSelector } from "react-redux";

const CusTable = ({ TableHeading, Tabledata, TableTittle,showEmpDetails ,showToatalHours}) => {
  // console.log(MASTER.TableVaues.map((datas)=>{datas.Sno})
  // console.log(TableHeading, "tableHeading...............");
  // console.log(Tabledata, "Tabledatsss...............");
  const recordperpage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  function prepage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function changeCPage(id) {
    setCurrentPage(id);
  }
  function Nextpage() {
    const totalPages = Math.ceil(filteredRecords.length / recordperpage);
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to the first page when search query changes
  };
  // console.log(searchQuery,"searchQuery_-----____---___-__-_-_--_")

  const filteredRecords = Tabledata.filter((record) => {
    // console.log(record,"record?????????????????????")
    return Object.values(record).some((value) => {
      if (typeof value === "string") {
        return value.toLowerCase().includes(searchQuery.toLowerCase());
      }
      return false;
    });
  });

  //   this code is to get object keys

  for (const item of Tabledata) {
    const keys = Object.keys(item);
    // console.log("Keys:", keys);
  }

  const lastindex = currentPage * recordperpage;
  const fisrtindex = lastindex - recordperpage;
  const records = filteredRecords.slice(fisrtindex, lastindex);
  const npage = Math.ceil(filteredRecords.length / recordperpage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  // console.log(records,"records-----------------")

  // const dispatch = useDispatch();

  // // const[MovieDeleteId,setMovieDeleteId] = useState('')
  // const {MovieDelete}=useSelector(
  //   (state)=>state?.MovieDelete
  // );
  // console.log(MovieDelete,'delete api')

  return (
    <Grid container xs={12} sx={{ width: "100%" }}>
      <Grid
        item
        xs={12}
        style={{
          backgroundColor: "white",
          // height: "232px",
          width: "100%",
          padding: "15px",
          borderRadius: "15px",
        }}
      >
        <Grid container className="table_search_grid">
          <Grid item xs={12}>
            <h3
              className="Table_heading"
              style={{
                fontSize: "19px",
                color: "var(--primary-color)",
                marginBottom: "20px",
              }}
            >
              {TableTittle}
            </h3>
          </Grid>
          {/* <Grid item xs={6}></Grid>
          <Grid
            item
            xs={2}
            mb={1}
            sx={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <div className="search-container">
              <RiSearchLine className="search-icon" />
              <input
                type="text"
                placeholder="Search"
                className="Table_search_input"
                onChange={handleSearchChange}
              />
            </div>

          </Grid> */}
        </Grid>
        {showEmpDetails &&
        <Grid xs={12} style={{ display: "flex",color:"var(--primary-color)" }} >
          <Grid xs={6} style={{ display: "flex" }}>
            <Grid xs={2.5}>
              <p>Employee Id</p>
            </Grid>
            <Grid xs={3.5}>
              <p>001</p>
            </Grid>
          </Grid>
          <Grid xs={6} style={{ display: "flex" }}>
            <Grid xs={3}>
              <p>Employee Name:</p>
            </Grid>
            <Grid xs={3}>
              <p>Biddu</p>
            </Grid>
          </Grid>
        </Grid>}
        <Grid item xs={12}>
          <Box mt={2} mb={2} sx={{ marginBottom: "0", marginTop: "0" ,height:"198px"}}>
            {" "}
            {/* Margin top and bottom */}
            <table
              className="table table-borderless custom-table"
              style={{ width: "100%", borderCollapse: "collapse" }}
              // sx={{ borderBottom: "2px solid blue" }}
            >
              <thead>
                <tr>
                  {/*in this value is change in click so will pass through via props */}
                  {TableHeading.map((data) => (
                    <th
                      scope="col"
                      className="thead_data"
                      style={{
                        color: "white",
                        backgroundColor: "var(--primary-color)",
                        fontWeight: 700,
                        fontSize: "13.8px",
                        borderBottom: "2px solid rgba(88, 68, 53, 0.23)",
                        // borderBottom: "1px solid rgb(217 226 231 / 77%)",
                      }}
                    >
                      {data}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {records.map((datas, i) => (
                  <tr key={i}>
                    {Object.keys(datas).map(
                      (key) =>
                        key !== "id" && (
                          <td
                            key={key}
                            style={{
                              fontWeight: "600",
                              borderBottom: "2px solid rgba(88, 68, 53, 0.23)",
                             color:"#262323d9",
                             fontSize:"13px"
                            }}
                          >
                            {datas[key]}
                          </td>
                        )
                    )}
                    {/* <td>
                      <IoPencil
                      // onClick={()=>setmyDefaultFieldValues(datas.id)}
                        style={{
                          marginRight: "10px",
                          color: "#4318FF",
                          cursor: "pointer",
                          backgroundColor: "#F4F7FE",
                          padding: "3px",
                          fontSize: "20px",
                          borderRadius: "7px",
                          border: "none",
                        }}
                      />
                      
                      <IoTrash
                        // onClick={()=>{handleDelete(datas.id)}}
                        style={{
                          color: "#4318FF",
                          cursor: "pointer",
                          backgroundColor: "#F4F7FE",
                          padding: "3px",
                          fontSize: "20px",
                          borderRadius: "7px",
                        }}
                      />
                      
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </Box>
        </Grid>
      </Grid>
      {showToatalHours && (
        <Grid
          xs={12}
          style={{ display: "flex" ,justifyContent:"end", marginLeft:"10%",color: "var(--primary-color)" }}
        >
          
          <Grid xs={4}>
            <p style={{fontWeight:"700", fontSize:"23px"}}>Total Hours</p>
          </Grid>
          <Grid xs={4}>
            <p  style={{fontWeight:"700", fontSize:"23px"}}>62:00</p>
          </Grid>
        </Grid>
      )}
      <Grid item xs={12}>
        <Box style={{ marginTop: "10px" }}>
          <nav
            className="nav_pagination"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p
              style={{
                // color: "rgb(178 183 191 / 92%)",
                color:"#242020",
                fontSize: "13px",
                marginLeft: "3%",
                fontWeight: "600",
              }}
            >
              Showing {fisrtindex + 1}-
              {Math.min(lastindex, filteredRecords.length)} of{" "}
              {filteredRecords.length}
            </p>
            <ul className="pagination"  >
              <li className="page-item">
                <button
                  className="page-link"
                  href="#"
                  aria-label="Previous"
                  onClick={prepage}
                  style={{marginTop:"-9px"}}
                >
                  <GrFormPrevious/>
                </button>
              </li>
              {numbers.map((n, i) => (
                <li
                  className={`page-item ${currentPage === n ? "active" : ""}`}
                  
                 
                 
                  // style={{ backgroundColor: currentPage === n ? "#6F4E37" : "" , color: currentPage === n ? "white" : "" }}

                  key={i}
                >
                  <button
                    className="page-link"
                    href="#"
                    onClick={() => changeCPage(n)}
                    style={{
                      backgroundColor: currentPage === n ? "var(--primary-color)" : "",
                      color: currentPage === n ? "white" : "",
                      padding:"2px  10px",
                      borderRadius:"12px",
                      fontSize:"10px"
                     
                    }}
                  >
                    {n}
                  </button>
                </li>
              ))}
              <li class="page-item">
                <button
                  className="page-link"
                  href="#"
                  aria-label="Previous"
                  onClick={Nextpage}
                  style={{marginTop:"-9px"}}
                >
                  <GrFormNext style={{ fontSize: "17px"}} />
                </button>
              </li>
            </ul>
          </nav>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CusTable;
