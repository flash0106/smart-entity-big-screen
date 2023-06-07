import dao from "../BaseDao";
const baseURL = "/center";
export default {
  getProvinceRate(data) {
    return dao.post(baseURL + "/province_rate", data)
  },
  getCityData(data) {
    return dao.post(baseURL + "/city_employ", data)
  }
}