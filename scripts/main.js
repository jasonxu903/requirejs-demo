requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'scripts/',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: 'app/',
        jquery: 'lib/jquery.min'
    }
});

requirejs(['jquery', 'app/gotop', 'app/carousel', 'app/waterfall'], function ($, GoTop, Carousel, WaterFallLayout) {
    new GoTop($('.container'))
    
    Carousel.init($('.carousel'))
    
    new WaterFallLayout()
})