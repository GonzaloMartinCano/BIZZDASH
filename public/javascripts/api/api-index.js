const jobAPI = new JobApiHandler();

const category = 'javascript'

// Event for job offers
document.querySelector('#searchJob').onkeyup = e => {

    let searchInput = document.querySelector('#searchJob').value

    searchInput === '' ? searchInput = 'Javascript' : null

    job(searchInput)
}

// Event for select tag
document.querySelector('#categoriesSelect').onchange = e => {

    let searchSelect = document.querySelector('#categoriesSelect').value

    // Companies container
    const companiesContainer = document.querySelector('#companiesContainer')
    companiesContainer.innerHTML = ''
    companiesContainer.innerHTML = '<canvas canvas id="companiesChart"></canvas><hr><small class="text-muted"> Number of jobs advertised</small>'

    // Histogram container
    const histogramSalaryContainer = document.querySelector(('#histogramSalaryContainer'))
    histogramSalaryContainer.innerHTML = ''
    histogramSalaryContainer.innerHTML = '<canvas id="histogramSalaryChart"></canvas> <hr><small class="text-muted">Number of vacancies with a salary in that range.</small>'

    // Jobs by location container
    const jobsByLocationContainer = document.querySelector(('#jobsByLocationContainer'))
    jobsByLocationContainer.innerHTML = ''
    jobsByLocationContainer.innerHTML = '<canvas id="jobsByLocationChart"></canvas><hr><small class="text-muted" > Number of jobs advertised</small >'

    topCompanies(searchSelect)
    histogramSalary(searchSelect)
    jobsByLocation(searchSelect)
}

window.addEventListener('load', e => {

    salaryHistory()
    job(category)
    topCompanies(category)
    histogramSalary(category)
    jobsByLocation(category)

})

function salaryHistory() {
    jobAPI
        .getSalaryHistory()
        .then(response => setSalaryChart(response.data.month, 'salaryChart'))
        .catch(err => console.log('An error has ocurred ', err));
}

function jobsByLocation(category) {

    jobAPI
        .getJobsByLocation(category)
        .then(response => setJobsByLocationChart(response.data.locations, 'jobsByLocationChart'))
        .then(() => document.body.classList.add('running'))
        .catch(err => console.log('an error has ocurred ', err))
    
}


function histogramSalary(category) {

    jobAPI
        .getSalaryHistogram(category)
        .then(response => setSalaryHistogram(response.data.histogram, 'histogramSalaryChart'))
        .catch(err => console.log('An error has ocurred ', err))  
    
}

function topCompanies(category) {

    jobAPI
        .getTopCompanies(category)
        .then(response => setCompaniesChart(response.data.leaderboard, 'companiesChart'))
        .catch(err => console.log('An error has ocurred ', err))
    
}

function job(searchInput) {
    jobAPI
        .getJobs(searchInput)
        .then(response => {

            const data = response.data.results

            const jobsListContainer = document.querySelector('#jobs-list-container')
            jobsListContainer.innerHTML = ''

            data.forEach(job => {

                jobsListContainer.innerHTML += `
                <div class="card shadow mb-3" >
                    <div class="card-header"><small class="text-dark">${job.title}</small></div>
                    <div class="card-body text-secondary">
                        <ul>
                            <li>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M15 4H1v8h14V4zM1 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H1z"/>
                                    <path d="M13 4a2 2 0 0 0 2 2V4h-2zM3 4a2 2 0 0 1-2 2V4h2zm10 8a2 2 0 0 1 2-2v2h-2zM3 12a2 2 0 0 0-2-2v2h2zm7-4a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
                                </svg>    
                                <small>${job.salary_min} - ${job.salary_max}</small>
                            </li>
                            <li>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-geo-alt" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M12.166 8.94C12.696 7.867 13 6.862 13 6A5 5 0 0 0 3 6c0 .862.305 1.867.834 2.94.524 1.062 1.234 2.12 1.96 3.07A31.481 31.481 0 0 0 8 14.58l.208-.22a31.493 31.493 0 0 0 1.998-2.35c.726-.95 1.436-2.008 1.96-3.07zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                    <path fill-rule="evenodd" d="M8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                </svg>
                                <small>${job.location.display_name}</small>
                            </li>
                            <li>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-building" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694L1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
                                    <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
                                </svg>
                                <small>${job.company.display_name}</small>
                            </li>
                        </ul>
                        <a href="${job.redirect_url}" target="_blank" class="btn btn-sm btn-dark">See more</a>
                    </div>
                </div>`

            })

        })
        .catch(err => console.log('An error has ocurred ', err))
}
