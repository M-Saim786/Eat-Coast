import { Bar } from "react-chartjs-2";
export const BarChart = ({ chartData }) => {
    return (
        <div className="chart-container">
            {/* <h2 style={{ textAlign: "center" }}>Bar Chart</h2> */}
            <Bar
                
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Users Gained between 2016-2020"
                        },
                        legend: {
                            display: false,
                            // borderRadius: '20px',
                            // border: '1px solid blue  '
                        },

                        scales: {
                            y: {
                                beginAtZero: true,
                            },
                            x: {
                                grid: {
                                  offset: true
                                }
                            }
                        },
                        barPercentage: 0.1, // Adjust the width of individual bars
                        categoryPercentage: 1,
                    }
                }}
            />
        </div>
    );
};