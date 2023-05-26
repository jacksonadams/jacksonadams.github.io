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
    new Post("https://images.unsplash.com/photo-1614687345016-9183348d8f35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VucmlzZSUyMHNreXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80", "February 19 2021", "Trip to Florida", "This trip to Florida was a blast! We found some cool shells and played some intense ping pong. The beach was a bit cold but the sunset was awesome."),

    new Post("https://images.unsplash.com/photo-1614687345016-9183348d8f35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VucmlzZSUyMHNreXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80", "February 11 2020", "Trip to Florida", "This trip to Florida was a blast! We found some cool shells and played some intense ping pong. The beach was a bit cold but the sunset was awesome."),

    new Post("https://images.unsplash.com/photo-1614687345016-9183348d8f35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VucmlzZSUyMHNreXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80", "February 5 2005", "Trip to Florida", "This trip to Florida was a blast! We found some cool shells and played some intense ping pong. The beach was a bit cold but the sunset was awesome."),

    new Post("https://www.tyndale.com/sites/readthearc/wp-content/uploads/sites/12/2019/07/rachel-strong-VhcxuEGNXo4-unsplash.jpg", "February 10 2022", "THRBC Men's Retreat", "During the Men's Retreat in March 2021, we spent time in the Word, had some good fellowship, and ate some great food."),

    new Post("https://www.tyndale.com/sites/readthearc/wp-content/uploads/sites/12/2019/07/rachel-strong-VhcxuEGNXo4-unsplash.jpg", "February 10 2022", "THRBC Men's Retreat", ""),
];