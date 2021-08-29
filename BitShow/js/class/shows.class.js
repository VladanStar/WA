/* class for displaying top50 shows on index.html */
class Shows {
  constructor() {
    this.showList = [];
  };

  addShow(object) {
    this.showList.push(object);
  }

  getShow() {
    let html = "";
    this.showList.forEach(element => {
      html += `<article class='col-8 col-md-4 mx-auto mb-2 px-2 article' data-id='${element.id}' data-rating='${element.rating}'>
              <div class='p-1 border rounded shadow-sm'>
                <img src='${element.img}' class='img-fluid' alt='tvShow'>
                <h3 class ='text-center'>${element.showName} &#11088; ${element.rating}</h3>
              </div>
              </article>`;
    });
    return html;
  }

};