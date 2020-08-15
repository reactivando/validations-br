export function whichCountryBarcode(value: String): String {

    if (value === '') return "Invalid Barcode";

    const code = parseInt(value.substr(0, 3));

    if ((code >= 789) && (code <= 790)) {
        return "Brasil";
    };
    if ((code >= 2) && (code <= 19)) {
        return "E.U.A.";
    };
    if ((code >= 20) && (code <= 29)) {
        return "Distribuição restringida definido pela organização membro GS1";
    };
    if ((code >= 30) && (code <= 39)) {
        return "E.U.A (reservado para medicamentos)";
    };
    if ((code >= 40) && (code <= 49)) {
        return "Distribuição restringida definido pela organização membro GS1";
    };
    if ((code >= 50) && (code <= 59)) {
        return "Coupons";
    };
    if ((code >= 60) && (code <= 139)) {
        return "E.U.A.";
    };
    if ((code >= 200) && (code <= 299)) {
        return "Distribuição restringida definido pela organização membro GS1";
    };
    if ((code >= 300) && (code <= 379)) {
        return "França";
    };
    if ((code >= 380) && (code <= 380)) {
        return "Bulgária";
    };
    if ((code >= 383) && (code <= 383)) {
        return "Eslovénia";
    };
    if ((code >= 385) && (code <= 385)) {
        return "Croácia";
    };
    if ((code >= 387) && (code <= 387)) {
        return "Bósnia e Herzegovina";
    };
    if ((code >= 400) && (code <= 440)) {
        return "Alemanha";
    };
    if ((code >= 450) && (code <= 459)) {
        return "Japão";
    };
    if ((code >= 490) && (code <= 499)) {
        return "Japão";
    };
    if ((code >= 460) && (code <= 469)) {
        return "Rússia";
    };
    if ((code >= 470) && (code <= 470)) {
        return "Quirguistão";
    };
    if ((code >= 471) && (code <= 471)) {
        return "Ilha de Taiwan";
    };
    if ((code >= 474) && (code <= 474)) {
        return "Estônia";
    };
    if ((code >= 475) && (code <= 475)) {
        return "Letônia";
    };
    if ((code >= 476) && (code <= 476)) {
        return "Azerbaijão";
    };
    if ((code >= 477) && (code <= 477)) {
        return "Lituânia";
    };
    if ((code >= 478) && (code <= 478)) {
        return "Usbequistão";
    };
    if ((code >= 479) && (code <= 479)) {
        return "Sri Lanka";
    };
    if ((code >= 480) && (code <= 480)) {
        return "Filipinas";
    };
    if ((code >= 481) && (code <= 481)) {
        return "Bielorrússia";
    };
    if ((code >= 482) && (code <= 482)) {
        return "Ucrânia";
    };
    if ((code >= 484) && (code <= 484)) {
        return "Moldávia";
    };
    if ((code >= 485) && (code <= 485)) {
        return "Armênia";
    };
    if ((code >= 486) && (code <= 486)) {
        return "Geórgia";
    };
    if ((code >= 487) && (code <= 487)) {
        return "Cazaquistão";
    };
    if ((code >= 489) && (code <= 489)) {
        return "Hong Kong";
    };
    if ((code >= 500) && (code <= 509)) {
        return "Reino Unido";
    };
    if ((code >= 520) && (code <= 521)) {
        return "Grécia";
    };
    if ((code >= 528) && (code <= 528)) {
        return "Líbano";
    };
    if ((code >= 529) && (code <= 529)) {
        return "Chipre";
    };
    if ((code >= 530) && (code <= 530)) {
        return "Albânia";
    };
    if ((code >= 531) && (code <= 531)) {
        return "República da Macedônia";
    };
    if ((code >= 535) && (code <= 535)) {
        return "Malta";
    };
    if ((code >= 539) && (code <= 539)) {
        return "República da Irlanda";
    };
    if ((code >= 540) && (code <= 549)) {
        return "Bélgica & Luxemburgo";
    };
    if ((code >= 560) && (code <= 560)) {
        return "Portugal";
    };
    if ((code >= 569) && (code <= 569)) {
        return "Islândia";
    };
    if ((code >= 570) && (code <= 579)) {
        return "Dinamarca";
    };
    if ((code >= 590) && (code <= 590)) {
        return "Polónia";
    };
    if ((code >= 594) && (code <= 594)) {
        return "Romênia";
    };
    if ((code >= 599) && (code <= 599)) {
        return "Hungria";
    };
    if ((code >= 600) && (code <= 601)) {
        return "África do Sul";
    };
    if ((code >= 603) && (code <= 603)) {
        return "Gana";
    };
    if ((code >= 608) && (code <= 608)) {
        return "Bahrein";
    };
    if ((code >= 609) && (code <= 609)) {
        return "lhas Maurício";
    };
    if ((code >= 611) && (code <= 611)) {
        return "Marrocos";
    };
    if ((code >= 613) && (code <= 613)) {
        return "Argélia";
    };
    if ((code >= 616) && (code <= 616)) {
        return "Quênia";
    };
    if ((code >= 618) && (code <= 618)) {
        return "Costa do Marfim";
    };
    if ((code >= 619) && (code <= 619)) {
        return "Tunísia";
    };
    if ((code >= 621) && (code <= 621)) {
        return "Síria";
    };
    if ((code >= 622) && (code <= 622)) {
        return "Egito";
    };
    if ((code >= 624) && (code <= 624)) {
        return "Líbia";
    };
    if ((code >= 625) && (code <= 625)) {
        return "Jordânia";
    };
    if ((code >= 626) && (code <= 626)) {
        return "Irã";
    };
    if ((code >= 627) && (code <= 627)) {
        return "Kuwait";
    };
    if ((code >= 628) && (code <= 628)) {
        return "Arábia Saudita";
    };
    if ((code >= 629) && (code <= 629)) {
        return "Emirados Árabes Unidos";
    };
    if ((code >= 640) && (code <= 649)) {
        return "Finlândia";
    };
    if ((code >= 690) && (code <= 699)) {
        return "República Popular da China";
    };
    if ((code >= 700) && (code <= 709)) {
        return "Noruega";
    };
    if ((code >= 729) && (code <= 729)) {
        return "Israel";
    };
    if ((code >= 730) && (code <= 739)) {
        return "Suécia";
    };
    if ((code >= 740) && (code <= 740)) {
        return "Guatemala";
    };
    if ((code >= 741) && (code <= 741)) {
        return "El Salvador";
    };
    if ((code >= 742) && (code <= 742)) {
        return "Honduras";
    };
    if ((code >= 743) && (code <= 743)) {
        return "Nicarágua";
    };
    if ((code >= 744) && (code <= 744)) {
        return "Costa Rica";
    };
    if ((code >= 745) && (code <= 745)) {
        return "Panamá";
    };
    if ((code >= 746) && (code <= 746)) {
        return "República Dominicana";
    };
    if ((code >= 750) && (code <= 750)) {
        return "México";
    };
    if ((code >= 754) && (code <= 755)) {
        return "Canadá";
    };
    if ((code >= 759) && (code <= 759)) {
        return "Venezuela";
    };
    if ((code >= 760) && (code <= 769)) {
        return "Suíça";
    };
    if ((code >= 770) && (code <= 770)) {
        return "Colômbia";
    };
    if ((code >= 773) && (code <= 773)) {
        return "Uruguai";
    };
    if ((code >= 775) && (code <= 775)) {
        return "Peru";
    };
    if ((code >= 777) && (code <= 777)) {
        return "Bolívia";
    };
    if ((code >= 779) && (code <= 779)) {
        return "Argentina";
    };
    if ((code >= 780) && (code <= 780)) {
        return "Chile";
    };
    if ((code >= 784) && (code <= 784)) {
        return "Paraguai";
    };
    if ((code >= 786) && (code <= 786)) {
        return "Equador";
    };
    if ((code >= 800) && (code <= 839)) {
        return "Itália";
    };
    if ((code >= 840) && (code <= 849)) {
        return "Espanha";
    };
    if ((code >= 850) && (code <= 850)) {
        return "Cuba";
    };
    if ((code >= 858) && (code <= 858)) {
        return "Eslováquia";
    };
    if ((code >= 859) && (code <= 859)) {
        return "República Checa";
    };
    if ((code >= 860) && (code <= 860)) {
        return "Sérvia e Montenegro";
    };
    if ((code >= 865) && (code <= 865)) {
        return "Mongólia";
    };
    if ((code >= 867) && (code <= 867)) {
        return "Coreia do Norte";
    };
    if ((code >= 868) && (code <= 869)) {
        return "Turquia";
    };
    if ((code >= 870) && (code <= 879)) {
        return "Holanda";
    };
    if ((code >= 880) && (code <= 880)) {
        return "Coreia do Sul";
    };
    if ((code >= 884) && (code <= 884)) {
        return "Cambodja";
    };
    if ((code >= 885) && (code <= 885)) {
        return "Tailândia";
    };
    if ((code >= 888) && (code <= 888)) {
        return "Singapura";
    };
    if ((code >= 890) && (code <= 890)) {
        return "Índia";
    };
    if ((code >= 893) && (code <= 893)) {
        return "Vietnam";
    };
    if ((code >= 899) && (code <= 899)) {
        return "Indonésia";
    };
    if ((code >= 900) && (code <= 919)) {
        return "Áustria";
    };
    if ((code >= 930) && (code <= 939)) {
        return "Austrália";
    };
    if ((code >= 940) && (code <= 949)) {
        return "Nova Zelândia";
    };
    if ((code >= 950) && (code <= 950)) {
        return "GS1 Global Office";
    };
    if ((code >= 955) && (code <= 955)) {
        return "Malásia";
    };
    if ((code >= 958) && (code <= 958)) {
        return "Macau";
    };
    if ((code >= 977) && (code <= 977)) {
        return "Publicações periódicas seriadas (ISSN)";
    };
    if ((code >= 978) && (code <= 979)) {
        return "International ISBN Agency";
    };
    if ((code >= 980) && (code <= 980)) {
        return "Refund receipts";
    };
    if ((code >= 981) && (code <= 982)) {
        return "Coupons e meios de pagamento";
    };
    if ((code >= 990) && (code <= 999)) {
        return "Coupons";
    };

    return 'Country Not Found';
}