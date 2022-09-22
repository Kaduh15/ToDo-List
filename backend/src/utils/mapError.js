const erros = {
  'ok': 200,
  'created': 201,
  'bad request': 400,
  'unauthorized': 403,
  'not found': 404,
  'internal error': 500,
}

const map = (erro) => erros[erro] || 500;

const throwError = ({ message, status }) => {
  console.log("🚀 ~ file: mapError.js ~ line 13 ~ throwError ~ status", status)
  const e = new Error(message);
    e.status = status;

    throw e;
}
module.exports = {
  erros,
  map,
  throwError,
}