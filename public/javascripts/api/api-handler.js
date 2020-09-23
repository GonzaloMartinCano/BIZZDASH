
const app_id = '88d2f761'
const app_key = 'c149834145edb3c600358ac8705b465d'

class JobApiHandler {

    constructor() {
        
        this.app = axios.create({

            baseURL: 'https://api.adzuna.com/v1/api/jobs/'

        })
    }

    getJobCategories() {
<<<<<<< HEAD
        return this.app.get(`gb/categories?app_id=${app_id}&app_key=${app_key}&&content-type=application/json`)
    }

    getSalaryHistory() {
        return this.app.get(`gb/history?app_id=${app_id}&app_key=${app_key}&location0=uk&category=it-jobs&content-type=application/json`)
    }

    getSalaryHistogram(category) {

        category = 'javascript'

        return this.app.get(`gb/histogram?app_id=${app_id}&app_key=${app_key}&what=${category}&content-type=application/json`)
=======
        return this.app.get(`gb/categories?app_id=<ID>&app_key=<KEY>&&content-type=application/json`)
    }

    getSalaryHistory() {
        return this.app.get('gb/history?app_id=<ID>&app_key=<KEY>&location0=uk&category=it-jobs&content-type=application/json')
>>>>>>> 9a38c33e0d255d71d38012d5de2c418d20f626fd
    }

    getJobs(category) {

        const page = 1
        const resultPerPage = 10

<<<<<<< HEAD
        return this.app.get(`gb/search/${page}?app_id=${app_id}&app_key=${app_key}&results_per_page=${resultPerPage}&title_only=${category}&&content-type=application/json`)
    }

    getJobsByLocation() {
        
        return this.app.get(`gb/geodata?app_id=${app_id}&app_key=${app_key}&category=it-jobs&content-type=application/json`)

=======
        return this.app.get(`gb/search/${page}?app_id=<ID>&app_key=<KEY>&results_per_page=${resultPerPage}&title_only=${category}&&content-type=application/json`)
>>>>>>> 9a38c33e0d255d71d38012d5de2c418d20f626fd
    }

    getTopCompanies() {
        return this.app.get(`gb/top_companies?app_id=${app_id}&app_key=${app_key}&what=developer&category=it-jobs&content-type=application/json`)
    }

}


