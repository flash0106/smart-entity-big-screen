import dao from "./BaseDao";

const baseURL = "/api";

export const login = (data) => {
  return dao.post1(baseURL + '/login', data)
}

export const addNewUser = (data) => {
  return dao.post(baseURL + '/new_user', data)
}

export const logout = (data) => {
  return dao.post(baseURL + '/logout', data)
}