var slidesPrevia = [
            { src: 'http://www.urbaville.com.br/wp-content/uploads/2015/08/loteamento-lotes-a-venda-ouro-preto-cachoeira-do-campo-parque-da-lagoa-urbaville-urbanizacao2.jpg' },
            { src: 'http://www.urbaville.com.br/wp-content/uploads/2015/08/acesso-loteamento-lotes-a-venda-ouro-preto-cachoeira-do-campo-parque-da-lagoa-urbaville-urbanizacao.jpg' },
            { src: 'http://www.urbaville.com.br/wp-content/uploads/2015/08/ginastica-loteamento-lotes-a-venda-ouro-preto-cachoeira-do-campo-parque-da-lagoa-urbaville-urbanizacao.jpg' },
            { src: 'http://www.urbaville.com.br/wp-content/uploads/2015/08/lagoa-loteamento-lotes-a-venda-ouro-preto-cachoeira-do-campo-parque-da-lagoa-urbaville-urbanizacao.jpg' },
            { src: 'http://www.urbaville.com.br/wp-content/uploads/2015/08/loteamento-lotes-a-venda-ouro-preto-cachoeira-do-campo-parque-da-lagoa-urbaville-urbanizacao31.jpg' }
        ];
        var slidesImagens = [
            { src: 'http://www.urbaville.com.br/wp-content/uploads/2015/08/Untitled-6.jpg' },
            { src: 'http://www.urbaville.com.br/wp-content/uploads/2015/08/Untitled-5.jpg' },
            { src: 'http://www.urbaville.com.br/wp-content/uploads/2015/08/Untitled-4.jpg' },
            { src: 'http://www.urbaville.com.br/wp-content/uploads/2015/08/Untitled-1.jpg' },
            { src: 'http://www.urbaville.com.br/wp-content/uploads/2015/08/Untitled-3.jpg' },
            { src: 'http://www.urbaville.com.br/wp-content/uploads/2015/08/Untitled-2.jpg' }
        ]
        $('.carouselPrevia').jR3DCarousel({
            slides: slidesPrevia,
            animation: "slide3D",
            width: 400,
            heigth: 100,
            slideLayout: "cover"
        });
        $('.carouselImagens').jR3DCarousel({
            slides: slidesImagens,
            animation: "slide3D",
            width: 400,
            heigth: 100,
            slideLayout: "cover"
        });
        $("#containerAntesDepois").twentytwenty();
