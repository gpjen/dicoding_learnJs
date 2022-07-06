exports.notes = {
  creteNote: (req, h) => {
    const { name, address } = req.payload;
    return name + " " + address;
  },
  getNotes: (req, h) => {
    return "datanya notes";
  },
};
