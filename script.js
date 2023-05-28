$(document).ready(function(){
    $('.LinkedIn').hover(function(){
        $(this).css("font-size", "100px");
    }, function(){
        $(this).css("font-size", "20px");
    });
});

function getRepositories() {
    $("#repos").empty();
    let url = "https://api.github.com/users/TaylorCoppedge/repos";
    $.ajax({
        url,
        success: displayRepos,
        error: displayError
    });
    function displayRepos(respos) {
        for (let repo of respos) {
            let link = $('<a>').text(repo.full_name);
            link.attr('href', repo.html_url);
            $("#load").append($('<li>').append(link));
        }
    }

    function displayError(err) {
        $("#load").append($("<li>Error</li>"));
    }
}