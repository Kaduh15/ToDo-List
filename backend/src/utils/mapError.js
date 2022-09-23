const erros = {
  'ok': 200,
  'created': 201,
  'bad request': 400,
  'unauthorized': 403,
  'not found': 404,
  'internal error': 500,
  'any.required': 400,
  'object.unknown': 400,
}

const map = (erro) => erros[erro.toLowerCase()] || 500;

const throwError = ({ message, status }) => {
  const e = new Error(message);
    e.status = status;

    throw e;
}
module.exports = {
  erros,
  map,
  throwError,
}