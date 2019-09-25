import 'whatwg-fetch'
import Alert from 'react-s-alert'

/**
 * parse the json data
 * @param {response} http response
 */
const parseJSON = response => {
  return response.json()
}

/**
 * 
 * @param {code} response status code
 * @param {msg} response message
 */
const handleData = data => {
  const {code, msg} = data
  if (code === 200 && msg) {
    Alert.success(msg, {timeout: 2000, effect: 'slide', position: 'top-right'})
  }
  if (code === -200 && msg) {
    Alert.error(msg, {timeout: 2000, effect: 'jelly', position: 'top-right'})
  }
  return data
}

export default (url, options) => {
  let config = {
    credentials: 'same-origin'
  }
  if (options && options.method === 'post' || 'put')  {
    config.header = {
      'ContentType-Type': 'application/x-www-format-utlencoded;charset=utf8'
    }
  }
  return fetch(url, Object.assign(config, options))
    .then(parseJSON)
    .then(handleData)
    .catch((e) => ({e}))
}