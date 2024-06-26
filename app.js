const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const categoriasController = require('./controller/categorias_controller.js')
const produtosController = require('./controller/produtos_controller.js')
const generosController = require('./controller/generos_controller.js')

const app = express()

app.use((request, response, next) => {

    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    app.use(cors())
    
    next()
})

const jsonBodyParser = bodyParser.json()

// DADOS CATEGORIA
app.get('/v1/loja/categorias', cors(), async function(request, response, next){

    let dadosCategoria = await categoriasController.getListarCategorias()

    if(dadosCategoria){
        response.json(dadosCategoria)
        response.status(200)
    } else{
        response.json({message: 'NADA ENCONTRADO'})
        response.status(404)
    }
})

app.get('/v1/loja/categoria/:id', cors(), async function(request, response, next){

    let idCategoria = request.params.id

    let dadosCategoria = await categoriasController.getBuscarCategoria(idCategoria)

    if(dadosCategoria){
        response.json(dadosCategoria)
        response.status(200)
    } else{
        response.json({message: 'NADA ENCONTRADO'})
        response.status(404)
    }
})

app.post('/v1/loja/categoria', cors(), jsonBodyParser, async function(request, response, next){

    let contentType = request.headers['content-type']
    let dadosBody = request.body
    let resultDados = await categoriasController.setInserirNovaCategoria(dadosBody, contentType)

    response.json(resultDados)
    response.status(resultDados.status_code)
})

app.delete('/v1/loja/categoria/:id', cors(), async function(request, response, next){

    let idCategoria = request.params.id
    let dadosCategoria = await categoriasController.setExcluirCategoria(idCategoria)

    response.json(dadosCategoria)
    response.status(200)
})

app.put('/v1/loja/atualizar/categoria/:id', cors(), jsonBodyParser, async function(request, response, next){

    let idCategoria = request.params.id
    let contentType = request.headers['content-type']
    let dadosBody = request.body
    let resultDados = await categoriasController.setAtualizarCategoria(idCategoria, contentType, dadosBody)

    response.json(resultDados)
    response.status(resultDados.status_code)

})

// DADOS PRODUTO

app.get('/v1/loja/produtos', cors(), async function(request, response, next){

    let dadosProduto = await produtosController.getListarProdutos()

    if(dadosProduto){
        response.json(dadosProduto)
        response.status(200)
    } else{
        response.json({message: 'NADA ENCONTRADO'})
        response.status(404)
    }
})

app.get('/v1/loja/produto/:id', cors(), async function(request, response, next){

    let idProduto = request.params.id

    let dadosProduto = await produtosController.getBuscarProduto(idProduto)

    if(dadosProduto){
        response.json(dadosProduto)
        response.status(200)
    } else{
        response.json({message: 'NADA ENCONTRADO'})
        response.status(404)
    }
})

app.post('/v1/loja/produto', cors(), jsonBodyParser, async function(request, response, next){

    let contentType = request.headers['content-type']
    let dadosBody = request.body
    let resultDados = await produtosController.setInserirNovoProduto(dadosBody, contentType)  
    
    response.json(resultDados)
    response.status(resultDados.status_code)
})

app.delete('/v1/loja/produto/:id', cors(), async function(request, response, next){

    let idProduto = request.params.id
    let dadosProduto = await produtosController.setExcluirProduto(idProduto)

    response.json(dadosProduto)
    response.status(200)
})

app.put('/v1/loja/atualizar/produto/:id', cors(), jsonBodyParser, async function(request, response, next){

    let idProduto = request.params.id
    let contentType = request.headers['content-type']
    let dadosBody = request.body
    let resultDados = await produtosController.setAtualizarProduto(idProduto, contentType, dadosBody)

    response.json(resultDados)
    response.status(resultDados.status_code)

})

// DADOS GENERO

app.get('/v1/loja/generos', cors(), async function(request, response, next){

    let dadosGenero = await generosController.getListarGeneros()

    if(dadosGenero){
        response.json(dadosGenero)
        response.status(200)
    } else{
        response.json({message: 'NADA ENCONTRADO'})
        response.status(404)
    }
})

app.get('/v1/loja/genero/:id', cors(), async function(request, response, next){

    let idGenero = request.params.id

    let dadosGenero = await generosController.getBuscarGenero(idGenero)

    if(dadosGenero){
        response.json(dadosGenero)
        response.status(200)
    } else{
        response.json({message: 'NADA ENCONTRADO'})
        response.status(404)
    }
})
app.post('/v1/loja/genero', cors(), jsonBodyParser, async function(request, response, next){

    let contentType = request.headers['content-type']
    let dadosBody = request.body
    let resultDados = await generosController.setInserirNovoGenero(dadosBody, contentType)

    response.json(resultDados)
    response.status(resultDados.status_code)
})

app.delete('/v1/loja/genero/:id', cors(), async function(request, response, next){

    let idGenero = request.params.id
    let dadosGenero = await generosController.setExcluirGenero(idGenero)

    response.json(dadosGenero)
    response.status(200)
})

app.put('/v1/loja/atualizar/genero/:id', cors(), jsonBodyParser, async function(request, response, next){

    let idGenero = request.params.id
    let contentType = request.headers['content-type']
    let dadosBody = request.body
    let resultDados = await generosController.setAtualizarGenero(idGenero, contentType, dadosBody)

    response.json(resultDados)
    response.status(resultDados.status_code)
})


app.listen(8080, function(){
    console.log('A API funcionando')
})