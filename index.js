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
            let templateH2 = `
                <hr>
                <h2>[==${titulo}==]</h2>
                <hr>
            `
            htmlString += templateH2

            for (let j = 0; j < sessao.listaLinks.length; j++) {
                let link = sessao.listaLinks[j]
                let linkUrl = link.url
                let linkDescricao = link.descricao

                let templateA = `<a class="badge badge-primary"  target="_blank" href="${linkUrl}" >${linkDescricao} - [${linkUrl}]</a><br>`
                htmlString += templateA

            }

            elementoPrincipal.appendChild(htmlToElement(htmlString))
        }

    }
    montarPagina(assuntos);
})