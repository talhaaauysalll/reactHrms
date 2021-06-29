import axios from "axios";

export default class JobAdvertisementService{
    getJobAdvertisements(){
        return axios.get("http://localhost:8080/api/jobadvertisements/findByAllActiveJobPostings")
    }
    getJobAdvertisementsSortByDate(){
        return axios.get("http://localhost:8080/api/jobadvertisements/findByAllActiveJobPostingsSortByDate")
    }
    getJobAdvertisementsCompanyName(companyName){
        return axios.get("http://localhost:8080/api/jobadvertisements/findByAllActiveJobPostingsForACompany?companyName="+companyName)
    }
    getJobAdvertisementsDeActive(){
        return axios.get("http://localhost:8080/api/jobadvertisements/findByAllDeActiveJobPostings")
    }
}