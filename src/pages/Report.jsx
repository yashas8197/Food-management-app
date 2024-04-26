const Report = () => {
  return (
    <div className="container my-4" style={{ height: "70vh" }}>
      <h1>Health Report</h1>
      <hr />
      <div className="row">
        <div className="col-md-4 my-2">
          <h2>Weight Loss Progress</h2>
          <p>Currect Weight: 180lbs</p>
          <p>Starting Weight: 200lbs</p>
          <p>Weight Loss: 20lbs</p>
        </div>
        <div className="col-md-4 my-2">
          <h2>Exercise Goals</h2>
          <p>Weekly Exercise Hours Goals: 5 hours</p>
          <p>Exercise Hours this week: 7 hours</p>
          <p>Remaining Hours to Goal: 0 hours</p>
        </div>
        <div className="col-md-4 my-2">
          <h2>Healthy Eating Habits</h2>
          <p>Vegetables Consumed: 5 servings/day</p>
          <p>Fruits Consumed: 3 servings/day</p>
          <p>Water Intake: 8 glasses/day</p>
        </div>
      </div>
    </div>
  );
};

export default Report;
