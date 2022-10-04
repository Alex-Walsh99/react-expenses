import Chart from "../Chart/Chart";

const ExpensesChart = props => {
    // hardcoded data points and init values for the chart.
    const chartDataPoints = [
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0}
    ];

    // for loop that increments over every expense and tallies the total value for each month.
    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth(); // starting at 0 => Jan
        chartDataPoints[expenseMonth].value += expense.amount;
    }

    // chart takes in data points as a prop to display the input data
    return <Chart dataPoints={chartDataPoints}/>
};

export default ExpensesChart;