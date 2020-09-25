// Styles

const styles = {
    color: {
        solids: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)', 'rgba(156, 153, 204, 1)', 'rgba(225, 78, 202, 1)', 'rgba(42, 157, 143', 'rgba(38, 70, 83)', 'rgba(231, 29, 54)', 'rgba(251, 139, 36)'],
        alphas: ['rgba(116, 72, 194, .2)', 'rgba(33, 192, 215, .2)', 'rgba(217, 158, 43, .2)', 'rgba(205, 58, 129, .2)', 'rgba(156, 153, 204, .2)', 'rgba(225, 78, 202, .2)', 'rgba(42, 157, 143, .2', 'rgba(38, 70, 83, .2)', 'rgba(231, 29, 54, .2)', 'rgba(251, 139, 36, .2)']
    }
};


// Salary Chart
function setSalaryChart(salaryHistory, id) {

    const salaryHistoryEntries = Object.entries(salaryHistory).sort()

    const salaryHistoryKeys = []
    const salaryHistoryValues = []

    salaryHistoryEntries.forEach(([key, value]) => {
        salaryHistoryKeys.push(key)
        salaryHistoryValues.push(value)
    })

    const data = {
        labels: salaryHistoryKeys,
        datasets: [{
            data: salaryHistoryValues,
            borderColor: styles.color.solids[8],
            backgroundColor: styles.color.alphas[8],
            borderWidth: 1
        }]
    }

    const options = {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    display: true
                }
            }]
        }
    }

    new Chart(id, { type: 'line', data, options })

}

// Companies Chart
function setCompaniesChart(companies, id) {

    const data = {
        labels: companies.map(element => element.canonical_name),
        datasets: [{
            data: companies.map(element => element.count),
            borderColor: styles.color.solids,
            backgroundColor: styles.color.alphas,
            borderWidth: 1
        }]
    }

    const options = {
        legend: {
            display: false
        }
    }

    
    new Chart(id, { type: 'horizontalBar', data, options })

}

// Jobs by location chart
function setJobsByLocationChart(jobs, id) {

    const data = {
        labels: jobs.map(element => element.location.display_name),
        datasets: [{
            data: jobs.map(element => element.count),
            borderColor: styles.color.solids,
            backgroundColor: styles.color.alphas,
            borderWidth: 1
        }]
    }

    const options = {
        legend: {
            display: false
        }
    }


    new Chart(id, { type: 'doughnut', data, options})

}

// Salary histogram chart 
function setSalaryHistogram(salaryHistogram, id) {

    const salaryHistogramEntries = Object.entries(salaryHistogram).sort()

    const salaryHistogramKeys = []
    const salaryHistogramValues = []

    salaryHistogramEntries.forEach(([key, value]) => {
        salaryHistogramKeys.push(key)
        salaryHistogramValues.push(value)
    })

    const data = {
        labels: salaryHistogramKeys,
        datasets: [{
            data: salaryHistogramValues,
            borderColor: styles.color.solids[1],
            backgroundColor: styles.color.alphas[1],
            borderWidth: 1
        }]
    }

    options = {
        legend: {
            display: false
        }
    }
    
    new Chart(id, { type: 'bar', data, options })

}