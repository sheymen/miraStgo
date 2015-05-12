$(function() {

    //Set up instafeed
    var feed = new Instafeed({
        clientId: 'ae570fb01b5f4628afd952682d4a0c6d',
        target: 'instafeed',
        get: 'tagged',
        tagName: 'MIRASTGO',
        links: true,
        limit: '28',
        sortBy: 'most-recent',
        resolution: 'standard_resolution',
        template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a href="{{link}}"><img src="{{image}}"></a><div class="likes">{{likes}} Likes</div></div><div class="description">{{caption}}<div class="date">{{model.date}}</div></div></div></div>'
    });

    // call feed.next() on button click
        $('#load-more').on('click', function() {
          feed.next();
        });

    feed.run();

});





