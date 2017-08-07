function loadRepos() {
    let username = $('#username').val();
    let mainUrl = `https://api.github.com/users/${username}/repos`;
    let req = {
        url: mainUrl,
        success: displayRepos,
        error: diplayErrMsg
    };

    $.ajax(req);

    function displayRepos(repos) {
        for (let repo of repos) {
            let link = $('<a>').text(repo.full_name);
            link.attr('href', repo.html_url);
            $('#repos').append($('<li>').append(link));
        }
    }

    function diplayErrMsg() {
        // console.log(`ooops errorche`);
        $('#repos').append($('<li>').text(`Error, invalid user!`))
    }
}