
const app_id = '88d2f761'
const app_key = 'c149834145edb3c600358ac8705b465d'

class JobApiHandler {

    constructor() {
        
        this.app = axios.create({

            baseURL: 'https://api.adzuna.com/v1/api/jobs/'

        })
    }

    getJobCategories = () => this.app.get(`gb/categories?app_id=${app_id}&app_key=${app_key}&content-type=application/json`)

    getSalaryHistory = () => this.app.get(`gb/history?app_id=${app_id}&app_key=${app_key}&location0=uk&category=it-jobs&content-type=application/json`)

    getJobsByLocation = (category) => this.app.get(`gb/geodata?app_id=${app_id}&app_key=${app_key}&what=${category}&content-type=application/json`)

    getTopCompanies = (category) => this.app.get(`gb/top_companies?app_id=${app_id}&app_key=${app_key}&what=${category}&content-type=application/json`)

    getSalaryHistogram = (category) => this.app.get(`gb/histogram?app_id=${app_id}&app_key=${app_key}&what=${category}&content-type=application/json`)

    getJobs(category) {

        const page = 1
        const resultPerPage = 3

        return this.app.get(`gb/search/${page}?app_id=${app_id}&app_key=${app_key}&results_per_page=${resultPerPage}&title_only=${category}&sort_by=date&content-type=application/json`)
    }

}


