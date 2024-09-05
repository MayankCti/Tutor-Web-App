// import React, { useEffect, useState } from "react";
// import SideBar from "../../layout/studentLayout/SideBar";
// import Header from "../../layout/studentLayout/Header";
// import { fetchTeacherClasses, getTeacherList } from "../../redux/actions/studentAction";
// import { useDispatch, useSelector } from "react-redux";
// import SelectDropdown from "../../components/formInput/SelectDropdown";

// const CreateStudentClass = () => {
//   const [selectedTeacher, setSelectedTeacher] = useState("");
//   const teacherList = useSelector(
//     (state) => state?.studentReducer?.teacherList
//   );

//   const [active, setActive] = useState(true);
//   const dispatch = useDispatch();

//   const sidebarActive = () => {
//     setActive(!active);
//   };
//   useEffect(() => {
//     dispatch(getTeacherList());
//     dispatch(fetchTeacherClasses());
//   }, []);

//   return (
//     <main className={active ? "" : "ct_collapsed_sidebar"}>
//       <SideBar onToggleSidebar={sidebarActive} />
//       <div className="ct_right_content">
//         <Header onToggleSidebar={sidebarActive} />

//         <div className="ct_inner_dashbaord_main">
//           <div className="ct_white_bg ct_mt_28">
//             <div className="row">
//               <SelectDropdown
//                 id="floatingInputValue"
//                 options={teacherList}
//                 defaultOptions={"-- Select Teacher --"}
//                 selectedValue={selectedTeacher}
//                 onChange={setSelectedTeacher}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default CreateStudentClass;


import React, { useEffect, useState } from "react";
import SideBar from "../../layout/studentLayout/SideBar";
import Header from "../../layout/studentLayout/Header";
import { fetchTeacherClasses, getTeacherList } from "../../redux/actions/studentAction";
import { useDispatch, useSelector } from "react-redux";
import SelectDropdown from "../../components/formInput/SelectDropdown";

const CreateStudentClass = () => {
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const teacherList = useSelector((state) => state?.studentReducer?.teacherList);
  const teacherClasses = useSelector((state) => state?.studentReducer?.teacherClasses);
  const isLoading = useSelector((state) => state?.studentReducer?.loading);
  const error = useSelector((state) => state?.studentReducer?.error);
  const dispatch = useDispatch();

  const [active, setActive] = useState(true);

  const sidebarActive = () => {
    setActive(!active);
  };

  useEffect(() => {
    dispatch(getTeacherList());
  }, [dispatch]);

  const handleTeacherChange = (value) => {
    setSelectedTeacher(Number(value));
  };

  useEffect(() => {
    if (selectedTeacher) {
      dispatch(fetchTeacherClasses({ payload: { teacher_id: selectedTeacher } }));
    }
  }, [selectedTeacher, dispatch]);
  

  return (
    <main className={active ? "" : "ct_collapsed_sidebar"}>
      <SideBar onToggleSidebar={sidebarActive} />
      <div className="ct_right_content">
        <Header onToggleSidebar={sidebarActive} />

        <div className="ct_inner_dashbaord_main">
          <div className="ct_white_bg ct_mt_28">
            <div className="row">
              <SelectDropdown
                id="floatingInputValue"
                options={teacherList}
                defaultOptions={"-- Select Teacher --"}
                selectedValue={selectedTeacher}
                onChange={handleTeacherChange}
              />
            </div>

            {isLoading && <p>Loading classes...</p>}
            {error && <p style={{ color: 'red' }}>Failed to load classes: {error}</p>}
            {!isLoading && teacherClasses && (
              <div className="class-list">
                {/* Render classes for the selected teacher */}
                {teacherClasses.map((classItem) => (
                  <div key={classItem.id}>
                    <p>{classItem.className}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreateStudentClass;
