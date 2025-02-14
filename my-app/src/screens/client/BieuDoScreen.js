import { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

const BieuDoScreen = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const [loanAmount, setLoanAmount] = useState(1000000); // Số tiền vay mặc định
  const [loanTerm, setLoanTerm] = useState(12); // Thời hạn vay mặc định

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      // Hủy biểu đồ cũ nếu có
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      // Tính toán khoản trả hàng tháng
      const monthlyPayment = loanAmount / loanTerm;
      const remainingAmount = loanAmount - monthlyPayment;

      chartInstance.current = new Chart(ctx, {
        type: "pie",
        data: {
          labels: ["Khoản trả tháng này", "Số tiền còn lại"],
          datasets: [
            {
              data: [monthlyPayment, remainingAmount],
              backgroundColor: [
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 99, 132, 0.6)",
              ],
              borderWidth: 1,
              borderColor: "#777",
              hoverBorderWidth: 3,
              hoverBorderColor: "#000",
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Tỷ lệ khoản vay hàng tháng",
              font: { size: 20 },
            },
          },
        },
      });
    }
  }, [loanAmount, loanTerm]);

  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <div className="" style={{ fontSize: "20px" }}>
        <div className="form-group">
          <label>Số tiền vay: </label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
          />
        </div>
        <div className="form-group">
          <label>Thời hạn vay (tháng): </label>
          <input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(Number(e.target.value))}
          />
        </div>
      </div>

      <div
        className="chart-container mt-5"
        style={{ width: "350px", height: "350px" }}
      >
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default BieuDoScreen;
