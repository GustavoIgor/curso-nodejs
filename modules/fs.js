const fs = require("fs");
const path = require("path");

// Criar uma pasta

// fs.mkdir(path.join(__dirname, "/test"), (error) => {
//   if (error) {
//     return console.log("Error: ", error);
//   }

//   console.log("Pasta criada com sucesso.");
// });

fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "Hello node!",
  (error) => {
    if (error) {
      return console.log("error: ", error);
    }

    console.log("Arquivo criado com sucesso!");
    // Adicionar a um arquivo
    fs.appendFile(
      path.join(__dirname, "/test", "test.txt"),
      "Hello World",
      (error) => {
        if (error) {
          return console.log("Error: ", error);
        }

        console.log("Arquivo modificado com sucesso!");
      }
    );

    // Ler arquivos
    fs.readFile(
      path.join(__dirname, "/test", "test.txt"),
      "utf8",
      (error, data) => {
        if (error) {
          return console.log("Error: ", error);
        }

        console.log(data);
      }
    );
  }
);
