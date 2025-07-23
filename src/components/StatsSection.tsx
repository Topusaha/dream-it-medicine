import "./StatsSection.css"; // path depends on your project structure

const StatsSection = () => {
  const stats = [
    {
      percentage: "20.6%",
      description: "of all active physicians are Asian",
      color: "text-primary"
    },
    {
      percentage: "6.9%",
      description: "identify as Hispanic",
      color: "text-medical-red"
    },
    {
      percentage: "5.7%",
      description: "identify as Black or African American",
      color: "text-primary"
    }
  ];

  return (
    <div className="stats-section">
    
    <h1 className="stats-heading">Did You Know?</h1>

    <div className="stats-container">
    {stats.map((stat, index) => (
      <div
        key={index}
        className={`stats-card ${stat.color}`}
      >
        <div className="stats-percentage">
          {stat.percentage}
        </div>
        <p className="stats-description">
          {stat.description}
        </p>
      </div>
    ))}
  </div>
  </div>
  )
};

export default StatsSection;
