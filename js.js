$(function () {
    $("#fetch").on('click',function (e) {
    let search = $('#artistName').val()
    search.replace(' ', '+')
    $.get(
        //endpoint
        'https://itunes.apple.com/search?',
        //query params,
        {
            term: search,
            entity:'musicArtist',
            limit:10
        },
        //function to call when a result is returned
        function (data) {
            console.log(data.results[1].artworkUrl100)
            for (let i = 0; i < 10; i++) {
                $('#result').append(`
                <div class=" card" style="width: 18rem;">
                  <div class="card-body">
                    <h5 class="card-title">${data.results[i].artistName}</h5>
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