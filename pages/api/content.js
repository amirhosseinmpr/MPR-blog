function handlers(req, res) {
  if (req.method == 'POST') {
    const { email, name, message } = req.body;
    if (
      !email ||
      !email.includes('@') ||
      !name ||
      !name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'invalid input' });

      return;
    }
    //Store it in a database
    const NewMessage = {
      email,
      name,
      message,
    };
    console.log(NewMessage);
    res
      .status(201)
      .json({ message: 'Succesfully stored message', message: NewMessage });
  }
}
export default handlers;
