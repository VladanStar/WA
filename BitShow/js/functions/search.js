let $search_list = $("#search-list");

$(".search").keyup(function () {

  let $search = $(this).val();
  if ($search !== "") {
    $.ajax({
      url: `http://api.tvmaze.com/search/shows?q=${$search}`,
      type: "GET",
      dataType: "json",
    }).done(function (response) {

      let $html = "";

      console.log(response);
      $search_list.empty();
      $search_list.fadeIn();
      response.forEach(function (element) {

        $html = `<li class='list' data-id='${element.show.id}' data-rating='${element.show.rating.average}'>${element.show.name}</li>`;

        $search_list.append($html);
      });

      $(".list").click(function () {
        let $list_id = $(this).attr("data-id");
        let $list_rating = $(this).attr("data-rating");
        localStorage.setItem("id", $list_id);
        localStorage.setItem("rating", $list_rating);
        window.location.replace("info-page.html");
      });

    });
  } else {
    $search_list.fadeOut();
  }

});