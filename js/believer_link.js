/*
    believer_link.js
    Applies to deal_history.html.
    Loads post information into the webpage.
*/

// Post object type
class Post {
    constructor(title, date, content, image) {
        this.title = title;
        this.date = date;
        this.content = content;
        this.image = image;
    }
}

// Post data
// ADD: put on SQL database and get through PHP
let Posts = [
    new Post (
        "The fruit of the Spirit", 
        "November 9 2022", 
        "<p>In pulvinar nulla a velit placerat bibendum. Integer ut orci urna. Praesent at interdum augue. Nulla auctor lacus sed risus tempus, rutrum aliquet orci gravida. Maecenas finibus porttitor mi nec feugiat. Sed risus neque, porttitor non viverra ut, pretium quis enim. Vivamus quis odio finibus, aliquet turpis eget, eleifend justo. Proin eget sem sapien. Mauris ipsum tellus, egestas in nisl nec, scelerisque accumsan metus. Donec nisl mauris, porta sed dolor cursus, imperdiet euismod eros. Ut vel leo sit amet magna tristique ullamcorper eget vitae turpis. Nunc quis lacus dolor. Vestibulum neque nibh, eleifend non consectetur a, dictum at turpis. Cras volutpat odio ut orci posuere rutrum. Suspendisse dignissim at orci sed porttitor.</p><p>Etiam porta mauris orci, tristique ullamcorper nulla gravida in. Proin ullamcorper ante ac est ullamcorper vestibulum. Aliquam erat volutpat. Phasellus gravida sed nisl at lobortis. Duis blandit lorem libero, nec viverra orci lacinia quis. Curabitur tristique molestie leo, eget ullamcorper erat auctor eu. Nulla ullamcorper vel elit a bibendum. Fusce eleifend eget est ut aliquet. Aenean tristique porttitor metus et finibus. Quisque vitae erat feugiat, imperdiet neque id, varius eros. Sed ac pellentesque nibh. Aliquam sit amet ex ut diam tincidunt faucibus eget id felis.</p>", 
        "https://hips.hearstapps.com/hmg-prod/images/assortment-of-colorful-ripe-tropical-fruits-top-royalty-free-image-995518546-1564092355.jpg?crop=0.982xw:0.736xh;0,0.189xh&resize=640:*"
    ),

    new Post (
        "The Trinity", 
        "September 4 2002", 
        "<p>In pulvinar nulla a velit placerat bibendum. Integer ut orci urna. Praesent at interdum augue. Nulla auctor lacus sed risus tempus, rutrum aliquet orci gravida. Maecenas finibus porttitor mi nec feugiat. Sed risus neque, porttitor non viverra ut, pretium quis enim. Vivamus quis odio finibus, aliquet turpis eget, eleifend justo. Proin eget sem sapien. Mauris ipsum tellus, egestas in nisl nec, scelerisque accumsan metus. Donec nisl mauris, porta sed dolor cursus, imperdiet euismod eros. Ut vel leo sit amet magna tristique ullamcorper eget vitae turpis. Nunc quis lacus dolor. Vestibulum neque nibh, eleifend non consectetur a, dictum at turpis. Cras volutpat odio ut orci posuere rutrum. Suspendisse dignissim at orci sed porttitor.</p><p>Etiam porta mauris orci, tristique ullamcorper nulla gravida in. Proin ullamcorper ante ac est ullamcorper vestibulum. Aliquam erat volutpat. Phasellus gravida sed nisl at lobortis. Duis blandit lorem libero, nec viverra orci lacinia quis. Curabitur tristique molestie leo, eget ullamcorper erat auctor eu. Nulla ullamcorper vel elit a bibendum. Fusce eleifend eget est ut aliquet. Aenean tristique porttitor metus et finibus. Quisque vitae erat feugiat, imperdiet neque id, varius eros. Sed ac pellentesque nibh. Aliquam sit amet ex ut diam tincidunt faucibus eget id felis.</p><p>Etiam porta mauris orci, tristique ullamcorper nulla gravida in. Proin ullamcorper ante ac est ullamcorper vestibulum. Aliquam erat volutpat. Phasellus gravida sed nisl at lobortis. Duis blandit lorem libero, nec viverra orci lacinia quis. Curabitur tristique molestie leo, eget ullamcorper erat auctor eu. Nulla ullamcorper vel elit a bibendum. Fusce eleifend eget est ut aliquet. Aenean tristique porttitor metus et finibus. Quisque vitae erat feugiat, imperdiet neque id, varius eros. Sed ac pellentesque nibh. Aliquam sit amet ex ut diam tincidunt faucibus eget id felis.</p><p>Etiam porta mauris orci, tristique ullamcorper nulla gravida in. Proin ullamcorper ante ac est ullamcorper vestibulum. Aliquam erat volutpat. Phasellus gravida sed nisl at lobortis. Duis blandit lorem libero, nec viverra orci lacinia quis. Curabitur tristique molestie leo, eget ullamcorper erat auctor eu. Nulla ullamcorper vel elit a bibendum. Fusce eleifend eget est ut aliquet. Aenean tristique porttitor metus et finibus. Quisque vitae erat feugiat, imperdiet neque id, varius eros. Sed ac pellentesque nibh. Aliquam sit amet ex ut diam tincidunt faucibus eget id felis.</p>", 
        "https://img.freepik.com/free-photo/seoraksan-mountains-is-covered-by-morning-fog-sunrise-seoul-korea_335224-313.jpg?w=2000"
    ),

    new Post (
        "What is the difference between good and bad music?", 
        "February 28 2019", 
        "<p>In pulvinar nulla a velit placerat bibendum. Integer ut orci urna. Praesent at interdum augue. Nulla auctor lacus sed risus tempus, rutrum aliquet orci gravida. Maecenas finibus porttitor mi nec feugiat. Sed risus neque, porttitor non viverra ut, pretium quis enim. Vivamus quis odio finibus, aliquet turpis eget, eleifend justo. Proin eget sem sapien. Mauris ipsum tellus, egestas in nisl nec, scelerisque accumsan metus. Donec nisl mauris, porta sed dolor cursus, imperdiet euismod eros. Ut vel leo sit amet magna tristique ullamcorper eget vitae turpis. Nunc quis lacus dolor. Vestibulum neque nibh, eleifend non consectetur a, dictum at turpis. Cras volutpat odio ut orci posuere rutrum. Suspendisse dignissim at orci sed porttitor.</p><p>Etiam porta mauris orci, tristique ullamcorper nulla gravida in. Proin ullamcorper ante ac est ullamcorper vestibulum. Aliquam erat volutpat. Phasellus gravida sed nisl at lobortis. Duis blandit lorem libero, nec viverra orci lacinia quis. Curabitur tristique molestie leo, eget ullamcorper erat auctor eu. Nulla ullamcorper vel elit a bibendum. Fusce eleifend eget est ut aliquet. Aenean tristique porttitor metus et finibus. Quisque vitae erat feugiat, imperdiet neque id, varius eros. Sed ac pellentesque nibh. Aliquam sit amet ex ut diam tincidunt faucibus eget id felis.</p>", 
        "https://daily.jstor.org/wp-content/uploads/2023/01/good_times_with_bad_music_1050x700.jpg"
    ),

    new Post (
        "The land of the free and the home of the brave", 
        "March 18 2015", 
        "<p>In pulvinar nulla a velit placerat bibendum. Integer ut orci urna. Praesent at interdum augue. Nulla auctor lacus sed risus tempus, rutrum aliquet orci gravida. Maecenas finibus porttitor mi nec feugiat. Sed risus neque, porttitor non viverra ut, pretium quis enim. Vivamus quis odio finibus, aliquet turpis eget, eleifend justo. Proin eget sem sapien. Mauris ipsum tellus, egestas in nisl nec, scelerisque accumsan metus. Donec nisl mauris, porta sed dolor cursus, imperdiet euismod eros. Ut vel leo sit amet magna tristique ullamcorper eget vitae turpis. Nunc quis lacus dolor. Vestibulum neque nibh, eleifend non consectetur a, dictum at turpis. Cras volutpat odio ut orci posuere rutrum. Suspendisse dignissim at orci sed porttitor.</p><p>Etiam porta mauris orci, tristique ullamcorper nulla gravida in. Proin ullamcorper ante ac est ullamcorper vestibulum. Aliquam erat volutpat. Phasellus gravida sed nisl at lobortis. Duis blandit lorem libero, nec viverra orci lacinia quis. Curabitur tristique molestie leo, eget ullamcorper erat auctor eu. Nulla ullamcorper vel elit a bibendum. Fusce eleifend eget est ut aliquet.</p>", 
        "https://ichef.bbci.co.uk/news/976/cpsprodpb/1DFD/production/_121777670_gettyimages-1339537007.jpg"
    ),

    new Post (
        "Justification vs. sanctification", 
        "June 6 2013", 
        "<p>In pulvinar nulla a velit placerat bibendum. Integer ut orci urna. Praesent at interdum augue. Nulla auctor lacus sed risus tempus, rutrum aliquet orci gravida. Maecenas finibus porttitor mi nec feugiat. Sed risus neque, porttitor non viverra ut, pretium quis enim. Vivamus quis odio finibus, aliquet turpis eget, eleifend justo. Proin eget sem sapien. Mauris ipsum tellus, egestas in nisl nec, scelerisque accumsan metus. Donec nisl mauris, porta sed dolor cursus, imperdiet euismod eros. Ut vel leo sit amet magna tristique ullamcorper eget vitae turpis. Nunc quis lacus dolor. Vestibulum neque nibh, eleifend non consectetur a, dictum at turpis. Cras volutpat odio ut orci posuere rutrum. Suspendisse dignissim at orci sed porttitor.</p><p>Etiam porta mauris orci, tristique ullamcorper nulla gravida in. Proin ullamcorper ante ac est ullamcorper vestibulum. Aliquam erat volutpat. Phasellus gravida sed nisl at lobortis. Duis blandit lorem libero, nec viverra orci lacinia quis. Curabitur tristique molestie leo, eget ullamcorper erat auctor eu. Nulla ullamcorper vel elit a bibendum. Fusce eleifend eget est ut aliquet. Aenean tristique porttitor metus et finibus. Quisque vitae erat feugiat, imperdiet neque id, varius eros. Sed ac pellentesque nibh. Aliquam sit amet ex ut diam tincidunt faucibus eget id felis.</p><p>Etiam porta mauris orci, tristique ullamcorper nulla gravida in. Proin ullamcorper ante ac est ullamcorper vestibulum. Aliquam erat volutpat. Phasellus gravida sed nisl at lobortis. Duis blandit lorem libero, nec viverra orci lacinia quis. Curabitur tristique molestie leo, eget ullamcorper erat auctor eu. Nulla ullamcorper vel elit a bibendum. Fusce eleifend eget est ut aliquet. Aenean tristique porttitor metus et finibus. Quisque vitae erat feugiat, imperdiet neque id, varius eros. Sed ac pellentesque nibh. Aliquam sit amet ex ut diam tincidunt faucibus eget id felis.</p>", 
        "https://media.wired.co.uk/photos/6297a5d79c54054914418514/3:2/w_2385,h_1590,c_limit/Offices-Luring-Workers-Back-With-Plants-Business-1278321240.jpg"
    ),

    new Post (
        "Systems vs. goals", 
        "January 1 2019", 
        "<p>In pulvinar nulla a velit placerat bibendum. Integer ut orci urna. Praesent at interdum augue. Nulla auctor lacus sed risus tempus, rutrum aliquet orci gravida. Maecenas finibus porttitor mi nec feugiat. Sed risus neque, porttitor non viverra ut, pretium quis enim. Vivamus quis odio finibus, aliquet turpis eget, eleifend justo. Proin eget sem sapien. Mauris ipsum tellus, egestas in nisl nec, scelerisque accumsan metus. Donec nisl mauris, porta sed dolor cursus, imperdiet euismod eros. Ut vel leo sit amet magna tristique ullamcorper eget vitae turpis. Nunc quis lacus dolor. Vestibulum neque nibh, eleifend non consectetur a, dictum at turpis. Cras volutpat odio ut orci posuere rutrum. Suspendisse dignissim at orci sed porttitor.</p><p>Etiam porta mauris orci, tristique ullamcorper nulla gravida in. Proin ullamcorper ante ac est ullamcorper vestibulum. Aliquam erat volutpat. Phasellus gravida sed nisl at lobortis. Duis blandit lorem libero, nec viverra orci lacinia quis. Curabitur tristique molestie leo, eget ullamcorper erat auctor eu. Nulla ullamcorper vel elit a bibendum. Fusce eleifend eget est ut aliquet. Aenean tristique porttitor metus et finibus. Quisque vitae erat feugiat, imperdiet neque id, varius eros. Sed ac pellentesque nibh. Aliquam sit amet ex ut diam tincidunt faucibus eget id felis.</p><ul><li>Step one</li><li>Step two</li></ul><p>Nulla ullamcorper vel elit a bibendum. Fusce eleifend eget est ut aliquet. Aenean tristique porttitor metus et finibus. Quisque vitae erat feugiat, imperdiet neque id, varius eros. Sed ac pellentesque nibh.</p>", 
        "https://upload.wikimedia.org/wikipedia/commons/9/97/Bullet-Journal-by-Matt-Ragland.jpg"
    ),
];

// Determines if a date is later than another, in the format "January 25 2002"
function isDateLater(a, b){
    // Of format January 25 2002 and February 8 2023
    let [monthA, dayA, yearA] = a.split(" ");
    let [monthB, dayB, yearB] = b.split(" ");

    let months = "January February March April May June July August September October November December";

    if(yearA > yearB){
      return true;
    } else if (yearA < yearB){
      return false;
    } else {
      if(months.indexOf(monthA) > months.indexOf(monthB)){
        return true;
      } else if (months.indexOf(monthA) < months.indexOf(monthB)){
        return false;
      } else {
        return (parseInt(dayA) > parseInt(dayB));
      }
    }
}

// Sorts the Posts array by latest date
function sortPostsByLatest () {
    Posts.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
    createPostList();
}

// Sorts the Posts array by oldest date
function sortPostsByOldest () {
    Posts.sort((a, b) => Date.parse(a.date) - Date.parse(b.date))
    createPostList();
}

// Sorts the Posts array by title from A-Z
function sortPostsByTitleAZ () {
    Posts.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
    createPostList();
}

// Sorts the Posts array by title from Z-A
function sortPostsByTitleZA () {
    Posts.sort((a, b) => (b.title > a.title) ? 1 : ((a.title > b.title) ? -1 : 0))
    createPostList();
}

// Bolds correct title after sort
function selectTitleAfterSort(){
    // Get title of current post
    let title = $(".post-content-title").text();

    // Get all titles
    let postTitles = $(".post-item-title");

    // Loop through and find match
    for(let i = 0; i < postTitles.length; i ++){
        if(postTitles[i].textContent == title){
            $(postTitles[i]).addClass("post-item-title-selected");
            return;
        }
    }
}

function updateSearchTitles (query) {
    // Search through titles 
    let postItems = $(".post-item");

    // Reset list by hiding all
    $(postItems).hide();

    // If query is in title, show it
    let postTitleItems = $(".post-item>h3");
    for(let i = 0; i < postTitleItems.length; i ++){
        let postTitle = $(postTitleItems[i]).text();
        if(postTitle.toLowerCase().includes(query.toLowerCase())){
            let postItem = $(postTitleItems[i]).parent();
            $(postItem).show();
        }
    }
}

// Creates one list item
function createPostListItem (postNum){
    /* Creating this HTML element:

        <div class = "post-item">
            <h3 class = "post-item-title">The fruit of the Spirit</h3>
            <h5 class = "post-item-date">November 8 2022</h5>
        </div>

    */

    // Post to get data from
    let post = Posts[postNum];

    // Create elements
    let postItem = document.createElement("div");
    $(postItem).addClass("post-item");

    let postItemTitle = document.createElement("h3");
    $(postItemTitle).addClass("post-item-title");
    $(postItemTitle).attr("onclick", "setPost(" + postNum + ")")
    postItemTitle.textContent = post.title;

    let postItemDate = document.createElement("h5");
    $(postItemDate).addClass("post-item-date");
    postItemDate.textContent = post.date;

    // Append elements together
    $(postItem).append(postItemTitle);
    $(postItem).append(postItemDate);

    // Add element to page
    $(".post-list").append(postItem);
}

// Creates the entire list
function createPostList(){
    $(".post-list").html("");
    for(let i = 0; i < Posts.length; i ++){
        createPostListItem(i);
    }
}

// Sets the post
function setPost(num){
    /* Creating this element:

        <div class = "post-content-image-container">
            <img class = "post-content-image" src = "">
        </div>
        <div class = "post-content-body">
            <h3 class = "post-content-title">The fruit of the Spirit</h3>
            <h5 class = "post-content-date">February 8 2018</h5>
            <div class = "post-content-text">
                <p> </p>
                <p> </p>
            </div>
        </div>
    */

    // Post to pull data from
    let post = Posts[num];

    // Clear current post
    let postContent = $(".post-content");
    $(postContent).html("");
    $(postContent).hide();

    // Create elements
    let postContentImageContainer = document.createElement("div");
    $(postContentImageContainer).addClass("post-content-image-container");

    let postContentImage = document.createElement("img");
    $(postContentImage).addClass("post-content-image");
    $(postContentImage).attr("src", post.image);

    let postContentBody = document.createElement("div");
    $(postContentBody).addClass("post-content-body");

    let postContentTitle = document.createElement("h3");
    $(postContentTitle).addClass("post-content-title");
    postContentTitle.textContent = post.title;

    let postContentDate = document.createElement("h5");
    $(postContentDate).addClass("post-content-date");
    postContentDate.textContent = post.date;

    let postContentText = document.createElement("div");
    $(postContentText).addClass("post-content-text");
    postContentText.innerHTML = post.content;

    // Link elements together
    $(postContentImageContainer).append(postContentImage);
    $(postContentBody).append(postContentTitle);
    $(postContentBody).append(postContentDate);
    $(postContentBody).append(postContentText);

    // Add new elements to webpage
    $(postContent).append(postContentImageContainer);
    $(postContent).append(postContentBody);

    // Fade in elements
    $(postContent).fadeIn(400);
}

// Load data into webpage
$(document).ready(function() {
    // Load posts by latest date
    sortPostsByLatest();

    // Sorting
    $(".post-sort-select").on("change", function (e) {
        var selectedValue = this.value;

        switch(selectedValue){
            case "latest":
                sortPostsByLatest();
                break;
            case "oldest":
                sortPostsByOldest();
                break;
            case "titleAZ":
                sortPostsByTitleAZ();
                break;
            case "titleZA":
                sortPostsByTitleZA();
                break;
        }

        selectTitleAfterSort();
    });

    // Searching
    $(".post-search-bar").on("keyup", function (e) {
        let query = $(this).val();
        updateSearchTitles(query);
    });

    // Detect post clicks
    $(document).on("click", ".post-item-title", function() { 
        $(".post-item-title").removeClass("post-item-title-selected");
        $(this).addClass("post-item-title-selected");
    });
});

