

    app.factory('suggestions', [function(){
    var demoSuggestions = {
    posts: [
    {
    title: 'Free pizza at club meetings',
    upvotes: 15,
    comments: [{ body: "hi", upvotes: 5}],
    },
    {
    title: 'End all club emails with Laffy Taffy jokes',
    upvotes: 9,
    comments: [],
    },
    {
    title: 'Retrofit water fountain with Gatorade',
    upvotes: 3,
    comments: [],
    },
    {
    title: 'Sing halfway through meetings',
    upvotes: 7,
    comments: [],
    }
    ]
    };
    return demoSuggestions;
    }]);

