import * as client from "@sendgrid/mail"

const sendEmail = (client, body, senderEmail, senderName) => {
  return new Promise((fulfill, reject) => {
    const data = {
      from: {
        email: senderEmail,
        name: senderName
      },
      subject: `New website message from ${body.name}`,
      to: 'shaneearley.dev@gmail.com',
      html: `Hey, you\'ve a new message from ${body.name} at ${body.email}<br/>Message: ${body.message}`
    }

    client
      .send(data)
      .then(([response, body]) => {
        fulfill(response)
      })
      .catch(error => reject(error))
  })
}

exports.handler = (event, context, callback) => {
  const {
    SENDGRID_API_KEY,
    SENDGRID_SENDER_EMAIL,
    SENDGRID_SENDER_NAME
  } = process.env

  const body = JSON.parse(event.body)

  client.setApiKey(SENDGRID_API_KEY)

  sendEmail(
    client,
    body,
    SENDGRID_SENDER_EMAIL,
    SENDGRID_SENDER_NAME
  )
  .then(response => callback(null, { statusCode: response.statusCode }))
  .catch(err => callback(err, null))
}