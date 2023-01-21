async function integra_api_lahar(req, res) {
  //console.log(req.body.nome_formulario)

  try {
    await fetch('https://app.lahar.com.br/api/conversions', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        token_api_lahar:
          'agilegroyXu1xq8F1fswjfrqALK0nvyL8BQf2k15hG2lZNvTgLkBwUA1y8Vkq0zT',
        nome_formulario: req.body.nome_formulario,
        nome_contato: req.body.nome_contato,
        email_contato: req.body.email_contato,
        nome_empresa: req.body.nome_empresa,
        cargo: req.body.cargo,
        anotacoes: req.body.anotacoes,
        url_origem: req.body.url_origem,
        estagio_lead: 'Lead'
      })
    })

    return res
      .status(200)
      .json({ successfully: 'Email enviado com seucesso!!!' })
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

export default integra_api_lahar
