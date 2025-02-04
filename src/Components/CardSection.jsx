import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import "../Styles/CardSection.css";

Chart.register(ArcElement, Tooltip, Legend);

const FlipCard = ({ title, completed, pending, icon,learning_plan, courses}) => {
  const data = {
    labels: ["Completed", "Pending"],
    datasets: [
      {
        data: [completed, pending],
        backgroundColor: ["#27374d", "#526d82"],
        hoverBackgroundColor: ["#27374d", "#526d82"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div className="card-container">
      <div className="flip-card">
        {/* Front Side: Icon & Numbers */}
        <div className="flip-card-front">
          <div className="icon">{icon}</div>
          <h4>{title}</h4>
          <p>{completed} Completed</p>
          <p>{pending} Pending</p>
          <p>{learning_plan} Learning Plan</p>
          <p>{courses} Courses</p>
        </div>

        {/* Back Side: Pie Chart */}
        <div className="flip-card-back">
          <Pie data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

const CardSection = () => {
  return (
    <div className="charts-wrapper">
      <FlipCard title="Learning Progress" completed={1} pending={1} icon="📚" learning_plan={2} courses={2}/>
      <FlipCard title="Assignment" completed={3} pending={1} icon="📝" learning_plan={2} courses={4} />
      <FlipCard title="Credentials" completed={1} pending={3} icon="🎓" learning_plan={1} courses={2}/>
    </div>
  );
};

export default CardSection;
