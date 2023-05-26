import dao from "../BaseDao";
const baseURL = "/student_employ";
export default {
  getEmploymentRateData(data) {
    return dao.post(baseURL + "/employ_rate", data)
  },
  getTrendAnalysisData(data) {
    return dao.post(baseURL + "/trend_analysis", data)
  },
  getYearOnYearAnalysisData(data) {
    return dao.post(baseURL + '/year_on_year_analysis', data)
  }
}