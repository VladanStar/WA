/* creating isnstance for shows */
const showInstance = new Shows();


/* handler for section where to store data */
let $main_section = $("#main-section");

/* Funcion for getting data for index.html and display data */
function loadTvShows() {
  $.ajax({
    url: `http://api.tvmaze.com/shows`,
    type: "GET",
    dataType: "json",
  }).done(function (response) {

    const $copyResponse = [...response];

    let $sort = $copyResponse.sort((a, b) => {
      return b.rating.average - a.rating.average;
    });

    let $slice = $sort.slice(0, 50);

    $slice.forEach(element => {
      let $create_shows = new Createshows(element.id, element.image.original, element.name, element.rating.average);
      showInstance.addShow($create_shows);
    });

    $main_section.append(showInstance.getShow());

    $(".article").click(function () {
      let $show_id = $(this).attr("data-id");
      let $show_rating = $(this).attr("data-rating");
      localStorage.setItem("id", $show_id);
      localStorage.setItem("rating", $show_rating);
      window.location.replace("info-page.html");
    });

  });

}

loadTvShows();