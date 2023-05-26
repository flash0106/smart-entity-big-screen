import dao from "../BaseDao";
const baseURL = "/student_employ";
export default {
  getSatisfactionData(data) {
    return dao.post(baseURL + "/get_satisfaction", data)
  },
  getKeyUnitData(data) {
    return dao.post(baseURL + '/get_key_unit', data)
  },
  getSalaryRankData(data) {
    return dao.post(baseURL + '/get_salary_rank', data)
  }
}