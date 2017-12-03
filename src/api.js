import { message } from 'antd'

let apiRoot = process.env.DEFAULT_HOST || 'http://www.jojoyoung.cn'

function removeDoubleQuotations (language) {
  return language ? language.split('"').join('') : 'en-US'
}

export const fullAddressApi =  (apiFullAddress, body = null, method = null, redirectWhen401 = true, credentials = 'include', isFile = false) => {
  const config = {
    method: method || 'GET',
    headers: {
      'Accept': 'application/json',
      'Accept-Language': removeDoubleQuotations(window.localStorage.locale)
    },
    credentials
  }
  if (body) {
    config.method = method || 'POST'
    if (!isFile) {
      config.headers['Content-Type'] = 'application/json'
    }
    if (typeof body === 'string' || isFile) {
      config.body = body
    } else {
      config.body = JSON.stringify(body)
    }
  }

  return fetch(apiFullAddress, config).then((res) => {
    if (res.status === 401 && redirectWhen401) {
    }
    if (res.status === 204) return Promise.resolve(null)
    if (res.status < 400) {
      return res.json().catch((err) => {
        if (err instanceof Error && err.message && err.message.indexOf('JSON')) {
          return Promise.resolve(null) // skip empty json error
        }
        throw err
      })
    }
    if (res.status === 404) {
      return Promise.reject(res)
    }
    return res.json().then((json) => Promise.reject(json))
  }).then((json) => {
    if (json && json.Error) {
      message.error(json.Error, 5)
      return Promise.reject(json)
    }
    return json
  }).catch((json) => {
    return Promise.reject(json)
  })
}

export const api = (api, body = null, method = null, redirectWhen401 = true, isFile = false) => {
  return fullAddressApi(`${apiRoot}/${api}`, body, method, redirectWhen401, 'include', isFile)
}

export const apiWithFullHost = (api, body = null, method = null, redirectWhen401 = true, isFile = false) => {
  return fullAddressApi(`${api}`, body, method, redirectWhen401, 'include', isFile)
}
