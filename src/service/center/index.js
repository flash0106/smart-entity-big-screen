import dao from "../BaseDao";
const baseURL = "/student_employ";
export default {
  getProvinceRate(data) {
    return dao.post(baseURL + "/province_rate", data)
  },
  getCityData(data) {
    return dao.post(baseURL + "/city_employ", data)
  }
}