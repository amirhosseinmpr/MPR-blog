function handlers(req, res) {
  if (req.method == 'POST') {
    const { email, name, message } = req.body;
    if (
      !email ||
      email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'invalid input' });

      return;
    }
    //Store it in a database
    const newMessage = {
      email,
      name,
      message,
    };
    console.log(newMessage);
    res
      .status(201)
      .json({ message: 'Successfully stored message', message: NewMessage });
  }
}
export default handlers;
