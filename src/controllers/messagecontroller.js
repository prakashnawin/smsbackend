const createmessage = async (req, res) => {
  
  const { messageMedium, sender, receiver, messagebody } = req.body;

  try {
    if (messageMedium && sender && receiver && messagebody) {
      if (messageMedium!== "SMS" && messageMedium!== "whatsapp")
        res.json({ message: "message Medium is invalid" });
      else {
        res.status(200).json({ message: `${messagebody}` });
      }
    } else {
      res.status(400).json({ message: "all fields are requird" });
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = { createmessage };
