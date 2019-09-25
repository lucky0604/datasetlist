import request from '../utils/request'
import {baseUrl} from '../utils/constants'

export async function getIndexData() {
  return request(baseUrl + '/api/datasets')
}