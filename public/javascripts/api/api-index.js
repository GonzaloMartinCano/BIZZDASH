
const jobAPI = new JobApiHandler();

// Categorias
// jobAPI
//     .getJobCategories()
//     .then(response => console.log('Categorias: ', response.data.results))
//     .catch(err => console.log('Error', err))


// Historial de los datos de salario de 1 año hacia atras
jobAPI
    .getSalaryHistory()
    .then(response => {
        
        const apiHTML = document.querySelector('#api')

        const responseValues = Object.values(response.data.month)
        const responseKeys = Object.keys(response.data.month)


        for (let i = 0; i < responseValues.length; i++) {
            console.log(responseValues[i], responseKeys[i])

            apiHTML.innerHTML += `<br>${responseKeys[i]} --- ${responseValues[i]}<br>`
        }

        console.log(responseKeys, responseValues)

        //response.forEach(elm => console.log())

       // console.log('Salary history: ', Object.values(response.data.month), Object.keys(response.data.month))


    })
    .catch(err => console.log('Error', err))


// Historial de los datos de salario de 1 año hacia atras
// jobAPI
//     .getJobs('php')
//     .then(response => console.log('Trabajos con la categoría: ', response))
//     .catch(err => console.log('Error', err))