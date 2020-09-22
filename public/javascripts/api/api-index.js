const jobAPI = new JobApiHandler();

jobAPI
    .getSalaryHistory()
    .then(response => getSalaryBarChart(response.data.month, 'salaryBarChart'))
    .catch(err => console.log('Ha ocurrido un error cargando el gráfico de salarios ', err));