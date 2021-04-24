var dados = [
    {
        titulo: 'Google Uteis',
        listaLinks:[
            {linkUrl:'#', linkDescricao:'a'},
            {linkUrl:'#', linkDescricao:'b'},
            {linkUrl:'#', linkDescricao:'c'},
        ]
    },
    {
        titulo: '==REDE==',
        listaLinks:[
            {linkUrl:'https://www.charlesproxy.com/', linkDescricao:'monitoramento rede charles proxy 4.2.8'},
            {linkUrl:'#', linkDescricao:'b'},
            {linkUrl:'#', linkDescricao:'c'},
        ]
    },
    {
        titulo: '==Metadata==',
        listaLinks:[
            {linkUrl:'https://www.elevenpaths.com/labstools/foca/index.html', linkDescricao:'foca pesquisa e baixa arquivos de um site para explorar os metadados'},
            {linkUrl:'https://exiftool.org/', linkDescricao:'ler metadata do arquivo'},
            {linkUrl:'https://www.google.com.br/maps/@-29.9886319,-51.1062833,15z', linkDescricao:'cordenadas google'},
        ]
    }
]




$(document).ready(function () {
    console.log('documento carregadoo')

    function htmlToElement(htmlStr) {
        var template = document.createElement('template');
        htmlStr = htmlStr.trim(); // Never return a text node of whitespace as the result
        template.innerHTML = htmlStr;
        return template.content;
    }

    var html="<li>text and html</li><br>";
    var e=htmlToElement(html);
    console.log(e)

    function montarPagina(parametros) {
        let elementoPrincipal = document.querySelector('.principal')

        for (let i = 0; i < parametros.length; i++) {
            let htmlString = ''
            let sessao = parametros[i]
            let titulo = sessao.titulo
            let templateH2 = `<h2>${titulo}</h2>`
            htmlString += templateH2

            for (let j = 0; j < sessao.listaLinks.length; j++) {
                let link = sessao.listaLinks[j]
                let linkUrl = link.linkUrl
                let linkDescricao = link.linkDescricao

                let templateA = `<a class="badge badge-primary" href="${linkUrl}" >${linkDescricao}</a>`
                htmlString += templateA

            }

            elementoPrincipal.appendChild(htmlToElement(htmlString))
        }

    }
    montarPagina(dados)
})