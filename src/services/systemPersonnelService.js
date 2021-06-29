import axios from "axios";

export default class SystemPersonnelService{
    confirmJobAdvertisement(id,isConfirm){
        return axios.post(`http://localhost:8080/api/systempersonnel/confirmJobAdvertisement?id=${id}&isActive=${isConfirm}`)
    }
}