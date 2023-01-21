async function integra_api_lahar(
  token_api_lahar = 'agilegroyXu1xq8F1fswjfrqALK0nvyL8BQf2k15hG2lZNvTgLkBwUA1y8Vkq0zT',
  endpoint,
  nome_formulario,
  campos
) {
  const endpoint_full_url = `https://app.lahar.com.br/api/${endpoint}`
  let method
  if (endpoint == 'conversions') {
    method = 'POST'
  }
  if (endpoint == 'leads') {
    method = 'PUT'
  }
  try {
    if (!campos.Object.prototype.hasOwnProperty.call('token_api_lahar')) {
      campos['token_api_lahar'] = token_api_lahar
    } else if (campos['token_api_lahar'] == null) {
      campos['token_api_lahar'] = token_api_lahar
    }
    if (!campos.Object.prototype.hasOwnProperty.call('nome_formulario')) {
      campos['nome_formulario'] = nome_formulario
    } else if (campos['nome_formulario'] == null) {
      campos['nome_formulario'] = nome_formulario
    }
    if (!campos.Object.prototype.hasOwnProperty.call('url_origem')) {
      campos['url_origem'] = 'integracao-javascript'
    } else if (campos['url_origem'] == null) {
      campos['url_origem'] = 'integracao-javascript'
    }

    const post_fields = new URLSearchParams(campos).toString()
    if (method == 'POST') {
      const options = {
        method: 'POST',
        body: post_fields,
        followRedirect: true,
        rejectUnauthorized: false
      }
      const response = await fetch(endpoint_full_url, options)
      const json = await response.json()
      return json
    } else if (method == 'PUT') {
      const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(campos)
      }
      const response = await fetch(endpoint_full_url, options)
      const json = await response.json()
      return json
    }
  } catch (error) {
    return {
      status: 'erro',
      data: {
        error: {
          code: 404,
          message: 'Erro imprevisto.'
        }
      }
    }
  }
}
