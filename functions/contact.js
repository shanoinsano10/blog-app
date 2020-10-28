const client = require('@sendgrid/mail')

function sendEmail(client, body, senderEmail, senderName) {
  // eslint-disable-next-line promise/param-names
  return new Promise((fulfill, reject) => {
    const data = {
      from: {
        email: senderEmail,
        name: senderName,
      },
      subject: `Hello from ${senderName}: New message available!`,
      to: senderEmail,
      html: `Hey Shane, you have a new message from <b>${body.name}</b> at <b>${body.email}</b><br/><b>Message</b>: ${body.msg}<br>Thanks,<br>${senderName}`,
    }

    client
      .send(data)
      .then(([response]) => {
        fulfill(response)
      })
      .catch((error) => reject(error))
  })
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
exports.handler = function (event, context, callback) {
  const {
    SENDGRID_API_KEY,
    SENDGRID_SENDER_EMAIL,
    SENDGRID_SENDER_NAME,
  } = process.env

  const body = JSON.parse(event.body)

  client.setApiKey(SENDGRID_API_KEY)

  sendEmail(client, body, SENDGRID_SENDER_EMAIL, SENDGRID_SENDER_NAME)
    .then((response) => callback(null, { statusCode: response.statusCode }))
    .catch((err) => callback(err, null))
}
