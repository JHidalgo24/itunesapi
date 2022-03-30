$(function () {
    $("#fetch").on('click',function (e) {
    let search = $('#artistName').val();
    let lim = 10;
    search.replace(' ', '+')
    $.get(
        //endpoint
        'https://itunes.apple.com/search?',
        //query params,
        {
            term: search,
            entity:'musicArtist, album',
            media:'music',
            limit:lim
        },
        //function to call when a result is returned
        function (data) {
            for (let i = 2; i < 13; i++) {
                $('#result').append(`
                <div class=" card " style="width: 18rem; height: auto">
                  <div class="card-body">
                    <img  class="card-img-top"  src="${data.results[i].artworkUrl60}" alt="">
                    <h5 class="card-title">Artist: ${data.results[i].artistName}</h5>
                    <h6 class="card-title">Collection Name: ${data.results[i].collectionName}</h6>
                    <p class="card-link">Genre:${data.results[i].primaryGenreName}</p>
                  </div>
                </div>
                `)
            }

        },

        //return type expected
        'json'

    )
})
})