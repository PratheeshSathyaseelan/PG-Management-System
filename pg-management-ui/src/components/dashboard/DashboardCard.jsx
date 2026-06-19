function DashboardCard({ title, value }) {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "12px",
        width: "220px",
        boxShadow: "0 4px 10px rgba(0,0,0,.08)",
      }}
    >
      <h4>{title}</h4>

      <h2>{value}</h2>
    </div>
  );
}

export default DashboardCard;