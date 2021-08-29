
/* handlers for info-page */
let $show_id = localStorage.getItem("id");
let $show_rating = localStorage.getItem("rating");
let $span_rating = $("#show-rating");
let $show_title = $("#show-title");
let $show_info = $("#show-info");
let $show_img = $("#show-img");
let $show_list = $("#show-list");
let $season_number = $("#season-number");
let $show_cast = $("#show-cast");

/* function for display tvshow image and summary */
function displayTvShow() {
  $.ajax({
    url: `http://api.tvmaze.com/shows/${$show_id}`,
    type: "GET",
    dataType: "json",
  }).done(function (response) {

    $show_title.append(`<p>${response.name} &#11088; ${$show_rating}</p>`);
    $show_img.append(`<img src='${response.image.original}' class='img-fluid' alt='tvShow'>`);
    $show_info.append(response.summary);

  });

}

/* function for display tvshow seasons */
function displayTvList() {
  $.ajax({
    url: `http://api.tvmaze.com/shows/${$show_id}/seasons`,
    type: "GET",
    dataType: "json",
  }).done(function (response) {

    $season_number.text(`Seassons (${response.length})`);
    response.forEach(element => {
      if (element.premiereDate !== null && element.endDate !== null) {
        $show_list.append(`<li>${element.premiereDate} - ${element.endDate}</li>`);
      } else {
        $show_list.append(`<li>TBD</li>`);
      }

    });

  });

}

/* function for display tvshow cast */
function displayTvCast() {
  $.ajax({
    url: `http://api.tvmaze.com/shows/${$show_id}/cast`,
    type: "GET",
    dataType: "json",
  }).done(function (response) {

    let counter = 0;
    response.forEach(element => {
      if (counter < 12) {
        $show_cast.append(`<li>${element.person.name}</li>`);
      }
      counter++;
    });

  });

}

/* calling functions to execute */
displayTvShow();
displayTvList();
displayTvCast();