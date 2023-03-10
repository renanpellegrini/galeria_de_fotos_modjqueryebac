$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#cancelar-button').click(function() {
        $('form').slideUp();
    });

    $('form').on('submit', function(e) {
        console.log('submit');
        e.preventDefault();
        const enderecoNovaImagem = $("#endereço-imagem-nova").val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoNovaImagem}"/>`).appendTo(novoItem);
        $(`
        <div class="overlay-imagem-link">
            <a href="${enderecoNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
            Ver imagem em tamanho real
            </a>
        </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(500);
        $('#endereço-imagem-nova').val('');
        })
})
