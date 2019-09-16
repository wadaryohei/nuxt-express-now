exports.hello = (req, res, next) => {
  res.send({
    title: 'HELLO',
    message: 'hello world'
  })
}
