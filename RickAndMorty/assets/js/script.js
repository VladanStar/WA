var characterCache = [];

$(document).ready(function() {
    $(document).on('click', '#main-pagination a.page-link', function(e) {
        e.preventDefault();
        let page = $(this).attr('data-page');
        get_characters(page);
    });

    $(document).on('click', '#btn-go-back', function(e) {
        e.preventDefault();
        back_to_list();
    });
    $(document).on('click', '#character-list .character', function(e) {
        e.preventDefault();
        show_character(parseInt($(this).attr('data-id')));
    });

    //load first API page on page load
    get_characters(1);
});

function get_characters(page) {
    let url = 'https://rickandmortyapi.com/api/character';

    page = parseInt(page);
    if(isFinite(page) && page > 0)
        url += `?page=${page}`;
    else {
        alert(`Page ${page} not found.`);
        return;
    }

    fetch(url)
        .then((res) => res.json())
        .then((res) => {
            //store characters from current page to cache variable for later use
            characterCache = res.results;

            //render character list
            render_character_list();

            //render pagination
            render_pagination(page, res.info.pages)
        })
        .catch((reason) => {
            characterCache = [];
            console.error(reason);
        });
}
function render_pagination(currentPage, totalPages) {
    let $ul = $('#main-pagination > .pagination');
    $ul.html('');

    let pagesPerSide = 2;

    if(currentPage > pagesPerSide + 1) {
        let $first = $(`<li class="page-item"><a data-page="1" class="page-link" href="#">First</a></li>`);
        $ul.append($first);
    }

    //add "Previous" button
    let $prev = $('<li class="page-item"></li>');
    if(currentPage <= 1) {
        $prev
            .addClass('disabled')
            .html('<span class="page-link">Previous</span>');
    }
    else {
        let prevPage = currentPage - 1;
        $prev.html(`<a data-page="${prevPage}" class="page-link" href="#">Previous</a>`);
    }
    $ul.append($prev);

    let counter = currentPage - pagesPerSide;
    let $page;

    while(counter < currentPage) {
        if(counter <= 0) {
            counter++;
            continue;
        }
        $page = $(`<li class="page-item"><a data-page="${counter}" class="page-link" href="#">${counter}</a></li>`);
        $ul.append($page);
        counter++;
    }

    let $current = $(`<li class="page-item active"><span class="page-link">${currentPage}</span></li>`);
    $ul.append($current);

    counter = currentPage + 1;
    while(counter <= totalPages && counter - currentPage <= pagesPerSide) {
        $page = $(`<li class="page-item"><a data-page="${counter}" class="page-link" href="#">${counter}</a></li>`);
        $ul.append($page);
        counter++;
    }

    let $next = $('<li class="page-item"></li>');
    if(currentPage >= totalPages) {
        $next
            .addClass('disabled')
            .html('<span class="page-link">Next</span>');
    }
    else {
        let nextPage = currentPage + 1;
        $next.html(`<a data-page="${nextPage}" class="page-link" href="#">Next</a>`);
    }
    $ul.append($next);

    if(currentPage < totalPages - pagesPerSide) {
        let $last = $(`<li class="page-item"><a data-page="${totalPages}" class="page-link" href="#">Last</a></li>`);
        $ul.append($last);
    }

}
function render_character_list() {
    let $list = $('#character-list');
    $list.html('');

    for(let i = 0; i < characterCache.length; i++) {
        let char = characterCache[i];
        let $card = $('#character-template').clone();
        $card.removeClass('visually-hidden').removeAttr('id').attr('data-id', char.id);


        $card.find('img').attr('src', char.image);
        $card.find('.card-title').html(char.name);
        $list.append($card);
    }
}
function show_character(id) {
    let char = false;
    for(let i = 0; i < characterCache.length; i++) {
        if(characterCache[i].id === id) {
            char = characterCache[i];
            break;
        }
    }

    if(!char) {
        //show error.
        alert(`Character with ID ${id} not found in cache.`);
        return;
    }

    $('#character-list, #main-pagination').addClass('visually-hidden');
    $('#character-info').removeClass('visually-hidden');

    $('#char-info-image').attr('src', char.image);
    $('#char-info-name').html(char.name);
    $('#char-info-gender > span').html(char.gender);
    $('#char-info-species > span').html(char.species);
    $('#char-info-status > span').html(char.status);
    $('#char-info-origin > span').html(char.origin);
    $('#char-info-created > span').html(char.created);
    $('#char-info-episode > span').html(char.episode);
}

function back_to_list() {
    $('#character-list, #main-pagination').removeClass('visually-hidden');
    $('#character-info').addClass('visually-hidden');
}