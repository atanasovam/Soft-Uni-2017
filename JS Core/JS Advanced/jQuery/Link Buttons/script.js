function attachEvents() {
    $('a.button').on('click', btnCliked);

    function btnCliked(){
        $('a.selected').removeClass('selected');
        $(this).addClass('selected');
    }
}