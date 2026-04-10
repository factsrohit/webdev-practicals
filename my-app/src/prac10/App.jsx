
import CourseCard from "./prac10/CourseCard.jsx";

function App() {
  const courses = [
    { id: 1, title: "Web Development", instructor: "Yash", price: 999 },
    { id: 2, title: "React Basics", instructor: "Rohit", price: 799 },
    { id: 3, title: "Data Structures", instructor: "Shreshtha", price: 1199 },
    { id: 4, title: "Machine Learning", instructor: "Omkar", price: 1499 }
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Course Catalog</h1>

      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {courses.map(course => (
          <CourseCard
            key={course.id}
            title={course.title}
            instructor={course.instructor}
            price={course.price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;