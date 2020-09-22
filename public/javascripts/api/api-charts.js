// Styles

const styles = {
    color: {
        solids: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)', 'rgba(156, 153, 204, 1)', 'rgba(225, 78, 202, 1)'],
        alphas: ['rgba(116, 72, 194, .2)', 'rgba(33, 192, 215, .2)', 'rgba(217, 158, 43, .2)', 'rgba(205, 58, 129, .2)', 'rgba(156, 153, 204, .2)', 'rgba(225, 78, 202, .2)']
    }
};


// Salary Chart

function getSalaryBarChart(salaryHistory, id) {

    const salaryHisoryKeys = Object.keys(salaryHistory)
    const salaryHistoryValues = Object.values(salaryHistory)

    //console.log(salaryHisoryKeys, salaryHistoryValues, salaryHistory)

    const data = {
        labels: salaryHisoryKeys,
        datasets: [{
            data: salaryHistoryValues,
            backgroundColor: styles.color.alphas,
            borderColor: styles.color.alphas
        }]
    }

    const options = {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                gridLines: {
                    display: false
                },
                ticks: {
                    display: true
                }
            }]
        }
    }

    new Chart(id, { type: 'bar', data, options })

}