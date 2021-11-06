import React from "react";
import { useEffect, useState } from "react";
import APIService from "../APIServie";
function Test() {
  // Default options are marked with *
  const [students, setStudents] = useState([]);
  useEffect(() => {
    APIService.GetStudents("d776b01a532c198e255c5245fec8b298b0952fa5")
      .then((resp) => setStudents(resp))

      .catch((error) => console.log(error));
      APIService.GetStudentFeeDetail("d776b01a532c198e255c5245fec8b298b0952fa5")
      .then((resp) => setStudents(resp))

      .catch((error) => console.log(error));
    // Both delete functions must be called simultaneously
      // APIService.DeleteStudentDetail(44,"d776b01a532c198e255c5245fec8b298b0952fa5")
      // .then((resp)=>console.log(resp))
      // .catch((error) => console.log(error));

      // APIService.DeleteStudentFeesDetail(39,"d776b01a532c198e255c5245fec8b298b0952fa5")
      // .then((resp)=>console.log(resp))
      // .catch((error) => console.log(error));

      // APIService.InsertStudentFeeDetail(
      //     {
      //       Name: "Raju Chouhan",
      //       Unique_Id:44,
      //       Date_of_Payment:"2021-11-06"
      
      //     },
      //     "d776b01a532c198e255c5245fec8b298b0952fa5"
      //   )
      //     .then((resp) => console.log(resp))
    
      //     .catch((error) => console.log(error));


    // APIService.InsertStudent(
    //   {
    //     Name: "Raju Chouhan",
    //     Class: 12,
    //     Mobile_No: "34445454",
    //     Date_of_Joining: "2021-11-05",
    //     Fee_Type: "Monthly",
    //     Installment_month_difference: 1,
    //     Fee_Amount: 500,
    //     Last_Paid: "2021-11-05",
  
    //   },
    //   "d776b01a532c198e255c5245fec8b298b0952fa5"
    // )
    //   .then((resp) => console.log(resp))

    //   .catch((error) => console.log(error));

      // APIService.UpdateStudentDetail(39,
      //   {
      //     Name: "Raju",
      //     Class: 11,
      //     Mobile_No: 34445454,
      //     Date_of_Joining: "2021-11-06",
      //     Fee_Type: "Monthly",
      //     Installment_month_difference: 1,
      //     Fee_Amount: 500,
      //     Last_Paid: "2021-11-05",
    
      //   },
      //   "d776b01a532c198e255c5245fec8b298b0952fa5"
      // )
      //   .then((resp) => console.log(resp))
  
      //   .catch((error) => console.log(error));
  }, []);

  return (
    <div>
    
      {console.log(students)}
      {students.map((student) => {
        return <li key={student.id}>{alert(student.Name)}</li>;
      })}
    </div>
  );
}

export default Test;
