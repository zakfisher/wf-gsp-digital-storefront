App = {
    cache: {
        collections: {},
        models: {}
    },
    centre: {
        id: 'gardenstateplaza',
        name: 'Garden State Plaza',
        theatreId: 9312,
        services: [
            {
                name: 'Free Wifi',
                img: 'http://res.cloudinary.com/wlabs/image/asset/f_auto,w_800,q_100/free-wifi-dd9d7f79667efb25dddc9b139d4a7425',
                desc: '<p>Surf while you shop at Westfield Garden State Plaza with our free WiFi service. Wherever you are at Westfield Garden State Plaza, you have the ability to connect to the internet via WiFi for free. To take advantage of our super-fast service, simply access the internet from your laptop or phone as normal and follow the on-screen prompts. All services subject to availability. Terms and conditions apply.</p>'
            },
            {
                name: 'Answers on the Spot',
                img: 'http://res.cloudinary.com/wlabs/image/asset/f_auto,w_800,q_100/answers-on-the-spot-f3ad2f62e64f369ae60b5946419868b6',
                desc: '<p>Not sure where a store is located? Want to know the price of an item? Need assistance with a wheelchair? Introducing Answers on the Spot, new service provided by Westfield Garden State Plaza.</p><p>Text the number 201.957.7655 with your mall questions and get an instant response from Westfield Garden State Plaza.</p>'
            },
            {
                name: 'ATMs',
                img: 'http://res.cloudinary.com/wlabs/image/asset/f_auto,w_800,q_100/atms-ed4ee2e5ee94affb2e518dcd5c9a9cdc',
                desc: '<p>If you\'re short on shopping cash or need to check your account balance, stop at one of our safe, convenient ATMs at the following locations:</p><h4>Level 1</h4><ul><li>Food Court</li><li>Corridor Near Cinnabon</li></ul><h4>Level 2</h4><ul><li>Bank of America (Entrance #5)</li><li>Corridor near Sydney Thomas</li><li>Entrance 2 (Near Ruby Tuesday)</li></ul>'
            },
            {
                name: 'Foreign Currency Exchange',
                img: 'http://res.cloudinary.com/wlabs/image/asset/f_auto,w_800,q_100/foreign-currency-7a283fdf4bc9b0ae626f499f3b78a48c',
                desc: '<p>Travelex is located on the lower level near Lord &amp; Taylor. They supply and buy more than 100 foreign exchange currencies. The retail branch also offers a wide range of travel and financial products, such as travel insurance and phone cards.</p><p>Please call Travelex for all your travel needs at 201.845.4141.</p>'
            },
            {
                name: 'Custom Gift Wrap',
                img: 'http://res.cloudinary.com/wlabs/image/asset/f_auto,w_800,q_100/custom-gift-wrap-0069d04f4a0af2e884b794a674a5853c',
                desc: '<p>Get your gifts beautifully wrapped at the following locations. Fees may apply.</p><ul><li>Papyrus located near Nordstrom on the Lower Level 201.291.1822</li><li>Macy’s located on the East side of the Center 201.843.9100</li><li>Nordstrom located on the North side of the Center 201.843.1122</li></ul>'
            },
            {
                name: 'Westfield Family Lounge',
                img: 'http://res.cloudinary.com/wlabs/image/asset/f_auto,w_800,q_100/6.5-3_us-3d4110e4d453009b38a84ff0df9b3eb0',
                desc: '<p>The two exclusive family lounges include: private nursing areas, baby changing-stations, bottle warmers, child-friendly bathrooms and a comfortable rest area with televisions airing children\'s programming. Both lounges are located on the lower level at the Food Court and by Cinnabon.</p>'
            },
            {
                name: 'Westfield PlaySpace',
                img: 'http://res.cloudinary.com/wlabs/image/asset/f_auto,w_800,q_100/Playspace-20fbaa5f091bec63c4c188501fb99bca',
                desc: '<p>A fun place for children to learn and play is the Westfield PlaySpace. Kids can climb and explore the bright, colorful play area.</p><p>The Westfield Family PlaySpace is located in the Food Court on the Lower Level. Children are required to be supervised by an adult at all times.</p>'
            },
            {
                name: 'Westfield Kid-Friendly Dining',
                img: 'http://res.cloudinary.com/wlabs/image/asset/f_auto,w_800,q_100/6.5-4_us-e89c7342e816ff4115b0ba30a922d10c',
                desc: '<p>Several restaurants at Westfield Garden State Plaza cater to children with special menus and activities designed to keep the young ones happy.</p><ul><li>California Pizza Kitchen</li><li>Johnny Rockets</li><li>Nordstrom Café</li><li>Ruby Tuesday</li><li>Grand Lux Café</li></ul>'
            },
            {
                name: 'Expectant Mother Parking',
                img: 'http://res.cloudinary.com/wlabs/image/asset/f_auto,w_800,q_100/FamilyParking-4266874219584379e03c9995ea387801',
                desc: '<p>Take advantage of preferred, up-front parking spaces close to the center entrances just for moms-to-be. Look for “Expectant Mother Parking” signs designating special parking spaces.</p>'
            },
            {
                name: 'Westfield Family Events',
                img: 'http://res.cloudinary.com/wlabs/image/asset/f_auto,w_800,q_100/FamilyEvents-c2a28013f2accf8171b5ae8c00b30679',
                desc: '<p>Play, shop, eat - find fun events, ideas and offers for the whole family!</p>'
            },
            {
                name: 'Lost and Found',
                img: 'http://res.cloudinary.com/wlabs/image/asset/f_auto,w_800,q_100/lost-and-found-276633453540058849b3bbaba270e4b8',
                desc: '<p>Misplaced an item during your visit? Please contact Westfield Security Team at 201.368.0748 for immediate assistance.</p>'
            },
            {
                name: 'Smarte Carte&reg; Strollers',
                img: 'http://res.cloudinary.com/wlabs/image/asset/f_auto,w_800,q_100/smarte-cart-e7e4f7b22fb9edd90e26ea8e704cceb6',
                desc: '<p>Visiting us with kids in tow? Try a Smarte Carte stroller! Little ones will love riding in these colorful vehicles, and you’ll love keeping them close while you shop.</p><p>Smarte Carte strollers feature:</p><ul><li>Plenty of space for personal items and purchases</li><li>Two convenient cup holders and a snack tray</li><li>A moving steering wheel to keep little hands occupied</li><li>Lap safety belt</li></ul><p>Self-serve strollers are available at the following locations:</p><h4>Double Strollers</h4><ul><li>Entrance #3 by Coffee Bean &amp; Tea Leaf</li></ul><h4>Single Strollers</h4><ul><li>Food Court Entrance Between Neiman Marcus and Macy\'s near the restroom</li></ul>'
            },
            {
                name: 'Employment',
                img: 'http://res.cloudinary.com/wlabs/image/asset/f_auto,w_800,q_100/6.5-10_us-47731f7c0e11fc75b158e9fae449f65f',
                desc: '<p>Join the world-class team of Westfield or one of Westfield Garden State Plaza\'s department stores, restaurants or specialty shops.</p>'
            }
        ]
    },
    date: (function() {
        var m = new moment();
        return m.format('YYYY-MM-DD');
    })(),
    formatRuntime: function(runtime) {
        // FROM: PT01H45M
        // TO: 01 hr 45 min
        var hour = parseInt(runtime.substr(2, 2));
        var minute = parseInt(runtime.substr(5, 2));
        return hour + ' hr ' + minute + ' min';
    },
    formatSchedule: function(start, end) {
        var s = new moment(start);
        var e = new moment(end);
        // OCT 17 FRIDAY 10:00am - 9:00pm
        return (s.format('MMM D dddd h:mmA') + ' - ' + e.format('h:mmA')).toUpperCase();
    },
    load: function() {
        App.render('Loading', '#template-loading-page', {});
    },
    render: function(page, template, data) {
        $('main').attr('data-page', page).html(_.template($(template).html(), data));
    },
    error: function(message, title, disclaimer) {
        App.Views.header.render(title, disclaimer);
        App.render('Error', '#template-error', { message: message });
    }
};

App.Collections = {
    Deals: Backbone.Collection.extend({
        url: '/deal/master/deals.json?centre=' + App.centre.id + '&state=live',
        cache: function(deals, render) {
            console.log('api');
            // Fetch retailer for each deal
            var retailersFetched = 0;
            $(deals.models).each(function(i, deal) {
                var retailerId = deal.get('deal_stores')[0].retailer_id;
                deal.Retailer = new App.Models.Retailer();
                deal.Retailer.urlRoot += retailerId + '.json';
                deal.Retailer.fetch({
                    success: function(retailer) {
                        retailersFetched++;
                        deal.retailer = retailer;
                        // Render once all retailers are cached
                        if (retailersFetched == deals.models.length) {
                            App.cache.collections.deals = deals;
                            render();
                        }
                    },
                    error: function (model, response) {
                        App.error('Unable to fetch retailers.', 'Deals & Offers');
                    }
                });
            });
        }
    }),
    Events: Backbone.Collection.extend({
        url: '/event/master/events.json?centre=' + App.centre.id + '&country=us&published=true',
        cache: function(events, render) {
            console.log('api');
            // Sort events by end date
            events.models = events.models.sort(function(a, b) {
                a = a.get('occurrences')[a.get('occurrences').length -1].start;
                b = b.get('occurrences')[b.get('occurrences').length -1].start;
                if (a > b) return 1;
                if (a < b) return -1;
                return 0;
            });
            // Format event schedule for each event
            $(events.models).each(function(i, event) {
                event.schedule = {};
                $(event.get('occurrences')).each(function(j, occurrence) {
                    var start = new moment(occurrence.start);
                    var end = new moment(occurrence.finish);
                    event.schedule[start.format('MMM D')] = {
                        day: start.format('dddd'),
                        startTime: start.format('h:mmA'),
                        endTime: end.format('h:mmA')
                    };
                });
            });
            App.cache.collections.events = events;
            render();
        }
    }),
    Hours: Backbone.Collection.extend({
        url: '/trading-hour/master/centre_trading_hours/range.json?centre_id=gardenstateplaza&from=' + App.date + '&to=' + App.date
    }),
    Movies: Backbone.Collection.extend({
        url: 'http://data.tmsapi.com/v1/theatres/' + App.centre.theatreId + '/showings?api_key=khdmmearvwdhrskchcatf9vb&numDays=7&numDays=7&startDate=' + App.date,
        cache: function(movies, render) {
            console.log('api');
            // Sort showtimes and Fetch trailers for each movie
            var trailersFetched = 0;
            $(movies.models).each(function(i, movie) {
                // Sort showtimes
                movie.showtimes = {};
                $(movie.get('showtimes')).each(function(i, showtime) {
                    var m = new moment(showtime.dateTime);
                    var date = m.format('MMM D');
                    if (!movie.showtimes.hasOwnProperty(date)) {
                        movie.showtimes[date] = {
                            day: m.format('dddd'),
                            times: [m.format('h:mmA')]
                        };
                    }
                    else {
                        movie.showtimes[date].times.push(m.format('h:mmA'));
                    }
                });
                // Fetch trailers
                var rootId = movie.get('rootId');
                movie.Trailer = new App.Models.Trailer();
                movie.Trailer.urlRoot += rootId;
                movie.Trailer.fetch({
                    success: function(trailer) {
                        trailersFetched++;
                        movie.trailer = trailer;
                        // Render once all trailers are cached
                        if (trailersFetched == movies.models.length) {
                            App.cache.collections.movies = movies;
                            render();
                        }
                    },
                    error: function (model, response) {
                        App.error('Unable to fetch trailers.', 'Now Playing at AMC Theaters', 'Tickets available through the Westfield app, available on the iTunes store.');
                    }
                });
            });
        }
    }),
    Stores: Backbone.Collection.extend({
        url: '/store/master/stores.json?centre_id=' + App.centre.id + '&sort=name&sort_dir=asc&per_page=1000',
        cache: function(stores, render) {
            console.log('api');
            App.cache.collections.stores = stores;
            render();
        }
    })
};
App.Collections.deals = new App.Collections.Deals;
App.Collections.events = new App.Collections.Events;
App.Collections.hours = new App.Collections.Hours;
App.Collections.movies = new App.Collections.Movies;
App.Collections.stores = new App.Collections.Stores;

App.Models = {
    Retailer: Backbone.Model.extend({
        urlRoot: '/store/master/retailers/'
    }),
    Trailer: Backbone.Model.extend({
        urlRoot: 'http://data.tmsapi.com/v1/screenplayTrailers?api_key=khdmmearvwdhrskchcatf9vb&player_url=0&trailersonly=1&rootids='
    })
};

App.Views = {
    Deals: Backbone.View.extend({
        render: function() {
            var render = function() {
                var deals = App.cache.collections.deals;
                console.log(deals.models);
                if (deals.models.length > 0) {
                    App.render('Deals', '#template-deal-list', {
                        deals: deals.models
                    });
                }
                else {
                    App.error('No deals found.', 'Deals & Offers');
                }
            };

            // Render with cached data
            if (App.cache.collections.hasOwnProperty('deals')) {
                console.log('cache');
                render();
                return;
            }

            // Fetch all deals
            App.Collections.deals.fetch({
                success: function(deals) {
                    App.Collections.deals.cache(deals, render);
                },
                error: function(collection, response) {
                    App.error('Unable to fetch deals.', 'Deals & Offers');
                }
            });
        }
    }),
    Events: Backbone.View.extend({
        render: function() {
            var render = function() {
                var events = App.cache.collections.events;
                console.log(events.models);
                if (events.models.length > 0) {
                    App.render('Events', '#template-event-list', {
                        events: events.models
                    });
                }
                else {
                    App.error('No events are happening today.', 'Upcoming Events');
                }
            };

            // Render with cached data
            if (App.cache.collections.hasOwnProperty('events')) {
                console.log('cache');
                render();
                return;
            }

            // Fetch new data
            App.Collections.events.fetch({
                success: function(events) {
                    App.Collections.events.cache(events, render);
                },
                error: function(collection, response) {
                    App.error('Unable to fetch events.', 'Upcoming Events');
                }
            });
        }
    }),
    Header: Backbone.View.extend({
        render: function(title, disclaimer) {
            var defaultDisclaimer = 'Access this and and more information using the Westfield app or website.';
            $('title').html('Westfield ' + App.centre.name + ' ' + title);
            $('header h2').html(title);
            if (typeof disclaimer !== 'undefined') {
                defaultDisclaimer = disclaimer;
            }
            $('header p.disclaimer').html(defaultDisclaimer);
        },
        renderCentreInfo: function() {
            $('header h1').html(App.centre.name);
            App.Collections.hours.fetch({
                success: function(hours) {
                    var open = hours.at(0).get('opening_time');
                    var close = hours.at(0).get('closing_time');
                    var openHour = parseInt(open.substr(0, 2));
                    var closeHour = parseInt(close.substr(0, 2));
                    if (openHour < 12) open += 'am';
                    else open += 'pm';
                    if (closeHour > 12) {
                        closeHour -= 12;
                        close = closeHour + close.substr(2) + 'pm';
                    }
                    else if (closeHour == 12) {
                        close += 'pm';
                    }
                    else {
                        close += 'am';
                    }
                    var range = open + ' - ' + close;
                    $('header p.hours').html('Today\'s Hours: ' + range);
                },
                error: function(collection, response) {
                    console.log('Unable to fetch hours.');
                }
            });
        }
    }),
    Movies: Backbone.View.extend({
        el: 'main',
        events: {
            'click div.video': 'playTrailer'
        },
        playTrailer: function(e) {
            if ($(e.currentTarget).is('.none')) return;
            var index = $(e.currentTarget).parents('article').attr('data-index');
            var movie = App.Collections.movies.at(index);
            $(e.currentTarget).html(_.template($('#template-movie-trailer').html(), {
                trailers: movie.trailer.get('response').trailers
            }));
        },
        render: function() {
            var render = function(movies) {
                var movies = App.cache.collections.movies;
                console.log(movies.models);
                if (movies.models.length > 0) {
                    App.render('Movies', '#template-movie-list', {
                        movies: movies.models
                    });
                }
                else {
                    App.error('No movies found.', 'Now Playing at AMC Theaters', 'Tickets available through the Westfield app, available on the iTunes store.');
                }
            };

            // Render with cached data
            if (App.cache.collections.hasOwnProperty('movies')) {
                console.log('cache');
                render();
                return;
            }

            // Fetch all movies
            App.Collections.movies.fetch({
                success: function(movies) {
                    App.Collections.movies.cache(movies, render);
                },
                error: function(collection, response) {
                    App.error('Unable to fetch movies.', 'Now Playing at AMC Theaters', 'Tickets available through the Westfield app, available on the iTunes store.');
                }
            });
        }
    }),
    Services: Backbone.View.extend({
        render: function() {
            App.render('services', '#template-service-list', {
                services: App.centre.services
            });
        }
    }),
    Stores: Backbone.View.extend({
        render: function() {
            var render = function() {
                var stores = App.cache.collections.stores;
                console.log(stores.models);
                if (stores.models.length > 0) {
                    App.render('Stores', '#template-store-list', {
                        stores: stores.models
                    });
                }
                else {
                    App.error('No stores found.', 'Stores');
                }
            };

            // Render with cached data
            if (App.cache.collections.hasOwnProperty('stores')) {
                console.log('cache');
                render();
                return;
            }

            // Fetch new data
            App.Collections.stores.fetch({
                success: function(stores) {
                    App.Collections.stores.cache(stores, render);
                },
                error: function(collection, response) {
                    App.error('Unable to fetch stores.', 'Stores');
                }
            });
        }
    })
};
App.Views.deals = new App.Views.Deals;
App.Views.events = new App.Views.Events;
App.Views.header = new App.Views.Header;
App.Views.movies = new App.Views.Movies;
App.Views.services = new App.Views.Services;
App.Views.stores = new App.Views.Stores;

App.Router = Backbone.Router.extend({
    routes: {
        'deals'    : 'deals',
        'events'   : 'events',
        'movies'   : 'movies',
        'services' : 'services',
        'stores'   : 'stores'
    },
    initialize: function() {
        Backbone.history.start({pushState: true});
        App.Views.header.renderCentreInfo();
        // Use pushState without triggering a refresh
        $(document).on('click', 'a[data-bypass]', function(e) {
            e.preventDefault();
            App.router.navigate($(e.currentTarget).attr('href'), true);
        });
        // Event listener for collapsible content
        $(document).on('click', '.toggle', function(e) {
            var content = $(e.currentTarget).parents('article').find('.toggle-content');
            if (content.is('.open')) content.removeClass('open');
            else content.addClass('open');
        });
    },
    deals: function() {
        App.load();
        App.Views.header.render('Deals & Offers');
        App.Views.deals.render();
    },
    events: function() {
        App.load();
        App.Views.header.render('Upcoming Events');
        App.Views.events.render();
    },
    movies: function() {
        App.load();
        App.Views.header.render('Now Playing at AMC Theaters', 'Tickets available through the Westfield app, available on the iTunes store.');
        App.Views.movies.render();
    },
    services: function() {
        App.load();
        App.Views.header.render('Center Services');
        App.Views.services.render();
    },
    stores: function() {
        App.load();
        App.Views.header.render('Stores');
        App.Views.stores.render();
    }
});

// Auto-prefix Westfield API calls
$.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
    options.crossDomain = true;
    if (options.url.indexOf('http') == -1) {
        options.url = window.location.protocol + '//api.westfield.io/api' + options.url;
    }
});

// Underscore templating syntax = {{ }}, {{= }}
_.templateSettings = {
    interpolate: /\{\{=(.+?)\}\}/g,
    evaluate: /\{\{(.+?)\}\}/g
};

App.router = new App.Router;