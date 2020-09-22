const jobAPI = new JobApiHandler();

const category = ''

window.addEventListener('load', () => {

    jobAPI
        .getSalaryHistory()
        .then(response => setSalaryChart(response.data.month, 'salaryChart'))
        .catch(err => console.log('An error has ocurred ', err));

    jobAPI
        .getTopCompanies()
        .then(response => setCompaniesChart(response.data.leaderboard, 'companiesChart'))
        .catch(err => console.log('An error has ocurred ', err))
    
    jobAPI
        .getJobsByLocation()
        .then(response => setJobsByLocationChart(response.data.locations, 'jobsByLocationChart'))
        .catch(err => console.log('an error has ocurred ', err))

    jobAPI
        .getSalaryHistogram(category)
        .then(response => setSalaryHistogram(response.data.histogram, 'histogramSalaryChart'))
        .catch(err => console.log('An error has ocurred ', err))

})
