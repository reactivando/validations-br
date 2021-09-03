/**
 * Valida a CNH. A entrada pode ser com ou sem máscaras.
 * O tamanho deve ser respeitado como em '000000000-00' ou '00000000000'.
 * @param value
 */
 export function validateCNH( value : any ) {
    // Campo sem máscara
    const clearValue = String(value).replace(/\D/g, '');

    // Valida se está vazio ou é valor repetido
    if (!clearValue || ( clearValue.replace(new RegExp(clearValue[0], 'g'), '').trim().length === 0 ) )
        return false;

    // Construindo calculo
    for (var i = 0, j = 9, v = 0; i < 9; ++i, --j)
        v += +(value.charAt(i) * j);

    var dsc = 0, vl1 = v % 11;

    if (vl1 >= 10) {
        vl1 = 0;
        dsc = 2;
    }
    for (i = 0, j = 1, v = 0; i < 9; ++i, ++j)
        v += +(value.charAt(i) * j);

    var x   = v % 11;
    var vl2 = (x >= 10) ? 0 : x - dsc;
    
    // Retorna a validação ( true | false )
    return ('' + vl1 + vl2) === value.substr(-2);
}