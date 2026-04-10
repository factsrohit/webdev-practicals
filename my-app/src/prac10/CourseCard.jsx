

function CourseCard({ title, instructor, price }) {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <p>Instructor: {instructor}</p>
      <p>Price: ₹{price}</p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "15px",
    margin: "10px",
    borderRadius: "8px",
    width: "200px",
    textAlign: "center",
    boxShadow: "2px 2px 5px rgba(0,0,0,0.1)"
  }
};

export default CourseCard;