const routes = [
  {
    method: "GET",
    path: "/",
    handler: (req, l) => {
      return "Hello word!";
    },
  },
  {
    method: "*",
    path: "/",
    handler: (req, l) => {
      return "Halaman root tidak dapat diakses dengan method tersebut";
    },
  },
  {
    method: "GET",
    path: "/about",
    handler: (req, l) => {
      return "halaman about";
    },
  },
  {
    method: "POST",
    path: "/about",
    handler: (req, l) => {
      const { username, password } = req.payload;
      return `Anda login menggunakan us : ${username} pss: ${password}`;
    },
  },
  {
    method: "GET",
    path: "/hello/{name?}",
    handler: (req, l) => {
      const { name = "dunia" } = req.params;
      const { lang } = req.query;

      if (lang === "id") {
        return `Halo ${name}, selmat beraktifitas`;
      } else if (lang === "en") {
        return `Hello ${name}, have a great activity`;
      } else {
        return `Kabrigas ${name}, querto lomelo`;
      }
    },
  },
  {
    method: "GET",
    path: "/query",
    handler: (req, l) => {
      const { judul, pengarang } = req.query;
      return `Buku ${judul}, pengarang ${pengarang}`;
    },
  },
  {
    method: "*",
    path: "/about",
    handler: (req, l) => {
      return "Halaman about tidak dapat diakses dengan method tersebut";
    },
  },
  {
    method: "*",
    path: "/{any*}",
    handler: (req, l) => {
      return "404, halaman tidak ditemukan";
    },
  },
];

module.exports = routes;
