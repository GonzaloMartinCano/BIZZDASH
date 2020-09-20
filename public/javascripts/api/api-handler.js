
class JobApiHandler {

    constructor() {
        
        this.app = axios.create({

            baseURL: 'https://api.adzuna.com/v1/api/jobs/'

        })
    }

    getJobCategories() {
        return this.app.get(`gb/categories?app_id=<ID>&app_key=<KEY>&&content-type=application/json`)
    }

    getSalaryHistory() {
        return this.app.get('gb/history?app_id=<ID>&app_key=<KEY>&location0=uk&category=it-jobs&content-type=application/json')
    }

    getJobs(category) {

        const page = 1
        const resultPerPage = 10

        return this.app.get(`gb/search/${page}?app_id=<ID>&app_key=<KEY>&results_per_page=${resultPerPage}&title_only=${category}&&content-type=application/json`)
    }
}

// Todos los datos son de UK
