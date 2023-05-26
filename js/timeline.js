/*
    timeline.js
    Applies to the Family History page.
    Loads post data into the timeline.
*/


// Post object type
class Post {
    constructor(image, date, title, description) {
        this.image = image;
        this.date = date;
        this.title = title;
        this.description = description;
    }
}

let Posts = [
    new Post("https://images.unsplash.com/photo-1614687345016-9183348d8f35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VucmlzZSUyMHNreXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80", "February 19 2021", "Trip to Florida 2021", "This trip to Florida was a blast! We found some cool shells and played some intense ping pong. The beach was a bit cold but the sunset was awesome."),

    new Post("https://images.unsplash.com/photo-1614687345016-9183348d8f35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VucmlzZSUyMHNreXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80", "February 11 2020", "Trip to Florida 2020", "This trip to Florida was a blast! We found some cool shells and played some intense ping pong. The beach was a bit cold but the sunset was awesome."),

    new Post("https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80", "February 5 2005", "Trip to Florida 2005", "This trip to Florida was a blast! We found some cool shells and played some intense ping pong. The beach was a bit cold but the sunset was awesome."),

    new Post("https://www.tyndale.com/sites/readthearc/wp-content/uploads/sites/12/2019/07/rachel-strong-VhcxuEGNXo4-unsplash.jpg", "February 10 2022", "THRBC Men's Retreat", "During the Men's Retreat in March 2021, we spent time in the Word, had some good fellowship, and ate some great food."),

    new Post("https://www.tyndale.com/sites/readthearc/wp-content/uploads/sites/12/2019/07/rachel-strong-VhcxuEGNXo4-unsplash.jpg", "September 9 2022", "SBL Family Fall Retreat", ""),

    new Post("https://images.unsplash.com/photo-1682688759457-52bcb4dc1578?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80", "June 3 2023", "Hawaii", ""),
];

function createPost (post) {
    /*
        <div class = "timeline-post">
            <img class = "timeline-post-img" src = "https://images.unsplash.com/photo-1614687345016-9183348d8f35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VucmlzZSUyMHNreXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80">
            <div class = "timeline-post-text">
                <h3 class = "timeline-post-title">Trip to Florida</h3>
                <p class = "timeline-post-date">February 13 2021</p>
            </div>
        </div>
    */

    let timelinePost = document.createElement("div");
    $(timelinePost).addClass("timeline-post");

    let img = document.createElement("img");
    $(img).addClass("timeline-post-img");
    $(img).attr("src", post.image);

    let postText = document.createElement("div");
    $(postText).addClass("timeline-post-text");

    let title = document.createElement("h3");
    $(title).addClass("timeline-post-title");
    $(title).text(post.title);

    let date = document.createElement("p");
    $(date).addClass("timeline-post-date");
    $(date).text(post.date);

    $(timelinePost).append(img);
    $(postText).append(title);
    $(postText).append(date);

    if(post.description.length > 0){
        let desc = document.createElement("p");
        $(desc).addClass("timeline-post-description");
        $(desc).text(post.description);
        $(postText).append(desc);
    }

    $(timelinePost).append(postText);

    return timelinePost;
}

function sortPostsByLatest () {
    Posts.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
}

function addPosts(){
    sortPostsByLatest();
    for(let i = 0; i < Posts.length; i ++){
        let newPost = createPost(Posts[i]);
        if(i % 2 == 0){
            $(".timeline-left").append(newPost);
        } else {
            $(".timeline-right").append(newPost);
        }
    }
}

$(document).ready(function() {
    addPosts();

    $(".timeline-post").on("click", function(){
        if(!($(this).hasClass("timeline-post-selected"))){
            $(".timeline-post-selected").removeClass("timeline-post-selected");
            $(".timeline-post-img, .timeline-post-description").slideUp();
            $(this).addClass("timeline-post-selected");
            $(this).find(".timeline-post-img, .timeline-post-description").slideDown();
        } else {
            $(this).removeClass("timeline-post-selected");
            $(this).find(".timeline-post-img, .timeline-post-description").slideUp();
        }
    });
});