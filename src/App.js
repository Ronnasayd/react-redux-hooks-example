import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
function App() {
  const courses = useSelector(store => store);
  const dispatch = useDispatch();
  function handleAddCourse() {
    const input = document.getElementById("addCourse");
    if (input.value.length) {
      dispatch({ type: "ADD_COURSE", course: input.value });
      input.value = "";
    }
  }
  return (
    <div className="app">
      {courses.map(course => (
        <div className="course" key={course}>
          {course}
        </div>
      ))}
      <input type="text" id="addCourse" placeholder="Add course Here" />
      <button type="button" onClick={handleAddCourse}>
        Add
      </button>
    </div>
  );
}

export default App;
