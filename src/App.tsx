import React from "react";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import Category from "./page/Category";
import { PiStudentLight } from "react-icons/pi";
import { FiSettings } from "react-icons/fi";
import { BiCategory } from "react-icons/bi";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { LiaAddressCardSolid } from "react-icons/lia";
import Student from "./page/Student";
import Course from "./page/Course";
import Register from "./page/Register";
function App() {
  const menu = [
    { id: 0, name: "Dashboard", link: "/", icon: PiStudentLight },
    { id: 1, name: "Student", link: "/student", icon: PiStudentLight },
    { id: 2, name: "Category", link: "/category", icon: BiCategory },
    { id: 3, name: "Courses", link: "/course", icon: MdOutlineLibraryBooks },
    {
      id: 4,
      name: "Registrations",
      link: "/register",
      icon: LiaAddressCardSolid,
    },
    { id: 5, name: "Settings", link: "/setting", icon: FiSettings },
  ];
  return (
    <Routes>
      <Route path="/" element={<Layout menu={menu} />}>
        <Route path="/category" element={<Category />} />
        <Route path="/student" element={<Student />} />
        <Route path="/course" element={<Course />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
