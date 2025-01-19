import { createContext, useState } from "react";


const DataContext = createContext({});

export const DataProvider = ({ children }) => {

  const [theme, setTheme] = useState({
    text: '#9CA1A0',
    fontFamily: "Times New Roman",
    buttonBg: '#2A9B63',
    backBg: '#1e293b',
    bgColor: '#0f172a',


    // 2
    // text: '#000',
    // fontFamily: 'Arial',
    // buttonBg: '#ddd',
    // backBg: '#ddd122',
    // bgColor: '#ccc'


  });
  const [popup, setPopup] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [editData, setEditData] = useState({})

  const [usersData, setUsersData] = useState([
    {
      Id: "1",
      organization: "ABC Engineering College",
      group: "Delhi",
      department: "Admin",
      role: "Staff",
      name: "Dinesh Bhargava",
      gender: "Male",
      profilePic: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      status: "Active",
      idCardNo: "ADM123450",
      address: "G-22, Manesar Road, Haryana",
      phone: "8590025360",
      email: "dinesh@abcengineering.com"
    },
  ])
  const [studentsData, setStudentsData] = useState([
    {
      Id: "1",
      organization: "ABC Engineering College",
      group: "Delhi",
      department: "Science",
      role: "student",
      name: "Amit Kumar",
      gender: "Male",
      BatchId: "A01",
      profilePic: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      status: "Active",
      idCardNo: "SCI012345",
      address: "K - 12, AIIMS Road, New Delhi",
      phone: "8596748596",
      email: "amit@abcengineering.com"
    },
    {
      Id: "2",
      organization: "ABC Engineering College",
      group: "Delhi",
      department: "Admin",
      role: "student",
      name: "Dinesh Bhargava",
      gender: "Male",
      BatchId: "A01",
      profilePic: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      status: "Active",
      idCardNo: "ADM123450",
      address: "G-22, Manesar Road, Haryana",
      phone: "8590025360",
      email: "dinesh@abcengineering.com"
    }
  ])

  const [orgData, setOrgData] = useState([
    {
      Id: "1",
      name: "ABC Engineering College",
      address: "Sec-2 , India House, Delhi",
      status: "Active",
      phone: "120635241",
      email: "admin@abcengineering.com"
    }
  ]);

  const [groupData, setGroupData] = useState([
    {
      Id: "1",
      organization: "ABC Engineering College",
      group: "Delhi",
      status: "Active"
    }
  ])

  const [departmentData, setDepartmentData] = useState([
    {
      Id: "1",
      organization: "ABC Engineering College",
      group: "Delhi",
      department: "Science",
      status: "Active"
    }
  ])

  const [roleData, setRoleData] = useState([
    {
      Id: "1",
      role: "Admin",
      status: "Active"
    }
  ])

  // const baseUrl = "http://localhost:8000";



  return (
    <DataContext.Provider
      value={{
        theme, setTheme,
        usersData, setUsersData,
        studentsData, setStudentsData,
        orgData, setOrgData,
        groupData, setGroupData,
        departmentData, setDepartmentData,
        roleData, setRoleData,
        popup, setPopup, openSidebar, setOpenSidebar,
        editData, setEditData
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
