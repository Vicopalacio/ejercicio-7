import React, { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import EmpleadoRow from "./EmpleadoRow";

const EmpleadoList = () => {
  let empleados = [
    {
      id: 1,
      nombre: "Laya Dueñas",
      titulo: "CEO",
      profesion: "Business",
      pic: "https://media.istockphoto.com/photos/illustration-of-standing-african-american-woman-with-arms-crossed-of-picture-id1296857178?k=20&m=1296857178&s=612x612&w=0&h=EKAUCcAwzHvCziZt-EZpqfihCQxltJDEz4lBfF1qXUQ=",
    },
    {
      id: 2,
      nombre: "Astryd Vallés",
      titulo: "CMO",
      profesion: "Marketing",
      pic: "https://media.istockphoto.com/photos/young-woman-is-smiling-holding-a-cup-of-coffee-picture-id853133976?k=20&m=853133976&s=612x612&w=0&h=AnjWTYa1Dlyp8b8rskuoh97TBuZwK07YtSoQtmyGtp0=",
    },
    {
      id: 3,
      nombre: "Shantell Meza",
      titulo: "CFO",
      profesion: "Business",
      pic: "https://media.istockphoto.com/photos/male-cartoon-illustration-with-a-glass-of-water-picture-id1324623816?k=20&m=1324623816&s=612x612&w=0&h=rxnBPdoBddUcvLFhq4iqJQ6IWQaa0r-CUuS4MnqWtcs=",
    },
    {
      id: 4,
      nombre: "Sergio Ocampo",
      titulo: "CTO",
      profesion: "Engineering",
      pic: "https://media.istockphoto.com/vectors/cartoon-character-young-woman-standing-choosing-between-two-ways-at-vector-id1314418190?k=20&m=1314418190&s=612x612&w=0&h=uTXaHqIZCDsY-0RwIS00ZcRvZaqmJdKL_Dy_wj3g2Ws=",
    },
    {
      id: 5,
      nombre: "Ares Jiménez",
      titulo: "Art Director",
      profesion: "Marketing",
      pic: "https://media.istockphoto.com/photos/3d-businessman-in-white-shirt-showing-phone-screen-picture-id1427133576?k=20&m=1427133576&s=612x612&w=0&h=UgphVcgQ226v3MgEzRhU-FTDEyrzpNAZ09AcebtGDtU=",
    },
    {
      id: 6,
      nombre: "Marta Pérez",
      titulo: "Frontend Dev",
      profesion: "Engineering",
      pic: "https://media.istockphoto.com/photos/3d-cartoon-woman-arms-crossed-picture-id1299944176?k=20&m=1299944176&s=612x612&w=0&h=YIXMJyOKzaluMBXI4RGV_QlISAAZoq7zA8MubrlgrhI=",
    },
    {
      id: 7,
      nombre: "Ellen Balderas",
      titulo: "Digital Strategist",
      profesion: "Marketing",
      pic: "https://media.istockphoto.com/photos/illustration-of-smiling-woman-angela-in-headphones-make-video-call-or-picture-id1404630734?k=20&m=1404630734&s=612x612&w=0&h=4Bcp7EJ8GUwc1lMGBJ5taAo9Qo0T325M7cr0FDsMJkM=",
    },
    {
      id: 8,
      nombre: "Cynthia Valentín",
      titulo: "Backend Dev",
      profesion: "Engineering",
      pic: "https://media.istockphoto.com/photos/cute-girl-cartoon-design-with-a-smiling-face-picture-id1384157766?k=20&m=1384157766&s=612x612&w=0&h=dp8IGTEj5OFblnDCqaIqB6MA_jhxC__qlDGWsa3B1wU=",
    },
    {
      id: 9,
      nombre: "Bernard Jung",
      titulo: "DevOps Engineer",
      profesion: "Engineering",
      pic: "https://media.istockphoto.com/photos/cute-girl-cartoon-design-with-a-smiling-face-picture-id1384157766?k=20&m=1384157766&s=612x612&w=0&h=dp8IGTEj5OFblnDCqaIqB6MA_jhxC__qlDGWsa3B1wU=",
    },
  ];

  const [empleado] = useState(empleados);

  useEffect(() => {
    localStorage.setItem("empleados", JSON.stringify(empleado));
  }, [empleado]);
  
  return (
    <ListGroup>
      {
        empleado.map((empleado, posicion)=>
           <EmpleadoRow empleado={empleado} key={posicion}>
           </EmpleadoRow>)
      }
    </ListGroup>
  );
};

export default EmpleadoList;
