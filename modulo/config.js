

const ERROR_INVALID_ID = {status: false, status_code: 400, message: 'O ID encaminhado na requisão não é válido!'}
const ERROR_REQUIRED_FIELDS = {status: false, status_code: 400, message: 'Existem campos obrigatórios que não foram preenchidos, ou ultrapassaram o limite de caracteres!'}
const ERROR_NOT_FOUND = {status: false, status_code: 404, message: 'Nenhum item encontrado na requisão!'}
const ERROR_INTERNAL_SERVER_DB = {status: false, status_code: 500, message: 'Ocorreram Erros no processamento do Banco de dados. Contate o administrador da API!'}
const ERROR_INTERNAL_SERVER = {status: false, status_code: 500, message: 'Ocorreram erros no servidor back-end na camada de serviços, portanto não foi possível processar a requisição. Contate o administrador da API!'}
const ERROR_CONTENT_TYPE= {status: false, status_code: 415, message: 'O content-type da requisição não é suportado na API. Deve-se encaminhar dados em formato application/json!'}                                                              
const ERROR_INVALID_NAME = {status: false, status_code: 400, message: 'Existem campos obrigatórios que não foram preenchidos, ou ultrapassaram o limite de caracteres!'}
                                                   



const SUCESS_CREATED_ITEM = {status: true, status_code: 201, message: 'Sucesso ao inserir dados'}
const SUCCESS_DELETED_ITEM = {status: true, status_code: 200, message: "Sucesso ao excluir dados"}
const SUCCESS_UPDATED_ITEM = {status: true, status_code: 200, message: "Sucesso ao atualizar dados"}
                                                              
                                
                                                              
module.exports = {
    ERROR_INVALID_ID,
    ERROR_NOT_FOUND,
    ERROR_INTERNAL_SERVER_DB,
    ERROR_INVALID_NAME,
    ERROR_REQUIRED_FIELDS,
    ERROR_CONTENT_TYPE,
    ERROR_INTERNAL_SERVER,
    SUCESS_CREATED_ITEM,
    SUCCESS_DELETED_ITEM,
    SUCCESS_UPDATED_ITEM
}