//funcionalidade seccao - top author 

// script para slider automatico de 4 em 4 segundos
document.addEventListener('DOMContentLoaded', function () {
  
    var myCarousel = new bootstrap.Carousel(document.getElementById('carouselExampleIndicators'), {
        interval: 4000,  
         wrap: true  
    });

    myCarousel.cycle();
});

//script que atualiza a informacao do autor quando clicado
function AuthorInfo(author) {
    let authorInfo = document.getElementById('author-info');

    authorInfo.innerHTML = '';

    switch (author) {
        case 'author1':
            authorInfo.innerHTML = `
                <h3 class="top-author-name">Bill Gates</h3>
                <p>Livros mais vendidos</p>
                <ul>
                    <li><span>"A Estrada do Futuro"</span> - Explora o impacto da tecnologia na sociedade</li>
                    <li><span>"Negócios do Futuro"</span> - Aborda as tendências tecnológicas emergentes</li>
                    <li><span>"A Empresa na Velocidade do Pensamento"</span> - Sobre como a tecnologia transforma os negócios</li>
                </ul>
                <p>Área profissional</p>
                <p class="top-author-funcao">Co-fundador da Microsoft</p>
            `;
            break;
        case 'author2':
            authorInfo.innerHTML = `
                <h3 class="top-author-name">Elon Musk</h3>
                <p>Livros mais vendidos</p>
                <ul>
                    <li><span>"Elon Musk: Tesla, SpaceX e a Busca por um Futuro Fantástico"</span> - Biografia autorizada</li>
                    <li><span>"Como Conversar com um Extraterrestre"</span> - Explorações sobre o futuro da humanidade</li>
                    <li><span>"Zero to One" (co-autor)</span> - Sobre inovação e construção do futuro</li>
                </ul>
                <p>Área profissional</p>
                <p class="top-author-funcao">Empreendedor, CEO da Tesla e SpaceX</p>
            `;
            break;
        case 'author3':
                authorInfo.innerHTML = `
                    <h3 class="top-author-name">Tim Berners-Lee</h3>
                    <p>Livros mais vendidos</p>
                    <ul>
                        <li><span>"Weaving the Web"</span> - Sua autobiografia, descrevendo a criação da WWW</li>
                        <li><span>"Contrato com o Futuro"</span> - Reflexões sobre a evolução da internet</li>
                        <li><span>"Web Science"</span> - Exploração da ciência da web</li>
                    </ul>
                    <p>Área profissional</p>
                    <p class="top-author-funcao">Inventor da World Wide Web</p>
                `;
                break;
        case 'author4':
            authorInfo.innerHTML = `
                <h3 class="top-author-name">Mark Zuckerberg</h3>
                <p>Livros mais vendidos</p>
                <ul>
                    <li><span>"O Efeito Facebook"</span> - Sobre o impacto da rede social na sociedade</li>
                    <li><span>"A Era do Capitalismo de Vigilância"</span> - Reflexões sobre a economia de dados</li>
                    <li><span>"Inovação: A Arte de Começar sem Começar"</span> - Exploração de princípios empresariais</li>
                </ul>
                <p>Área profissional</p>
                <p class="top-author-funcao">Co-fundador e CEO do Facebook</p>
            `;
            break;
        case 'author5':
            authorInfo.innerHTML = `
                <h3 class="top-author-name">Satya Nadella</h3>
                <p>Livros mais vendidos</p>
                    <ul>
                        <li><span>"Hit Refresh"</span> - Sua jornada na Microsoft e a transformação da empresa</li>
                        <li><span>"Leadership in War"</span> - Reflexões sobre liderança com base em eventos históricos</li>
                        <li><span>"Cloud Computing for Dummies"</span> - Introdução ao cloud computing</li>
                    </ul>
                <p>Área profissional</p>
                <p class="top-author-funcao">CEO da Microsoft</p>
             `;
            break;
        case 'author6':
            authorInfo.innerHTML = `
                <h3 class="top-author-name">Sheryl Sandberg</h3>
                <p>Livros mais vendidos</p>
                <ul>
                    <li><span>"Lean In"</span> - Sobre mulheres, trabalho e o desejo de liderar</li>
                    <li><span>"Option B"</span> - Co-autoria com Adam Grant, aborda resiliência e superação</li>
                    <li><span>"Finding Your Voice"</span> - Inspiração para encontrar sua voz no ambiente de trabalho</li>
                </ul>
                <p>Área profissional</p>
                <p class="top-author-funcao">COO do Facebook</p>
            `;
            break;
        case 'author7':
            authorInfo.innerHTML = `
                <h3 class="top-author-name">Sundar Pichai</h3>
                <p>Livros mais vendidos</p>
                <ul>
                    <li><span>"The Age of AI"</span> - Exploração da inteligência artificial</li>
                    <li><span>"Trillion Dollar Coach"</span> - Sobre o lendário treinador Bill Campbell</li>
                    <li><span>"Life 3.0"</span> - Reflexões sobre o futuro da inteligência artificia</li>
                </ul>
                <p>Área profissional</p>
                <p class="top-author-funcao">CEO da Alphabet e Google</p>
            `;
            break;
    }
}
