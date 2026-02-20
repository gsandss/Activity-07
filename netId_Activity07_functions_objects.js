
/*
Author: Gavin Sands
NetID: gsands11
Date: Febuary 18, 2026
*/


// Exercise 1

function maxOfTwo(n1, n2){
    if(n1 > n2){
        return n1;
    }
    else if (n2 > n1){
        return n2;
    }
    else{
        return "They are equal";
    }
}

console.log(`The max between ${n1} and ${n2} is :`, maxOfTwo(n1,n2));

// Exercise 2

function maxOfArray(array){

    let max = array[0];

    for(let i =1; i < array.length; i++){
        if(array[i] > max){
            max = array[i];
        }
    }   
    return max;
}

// Exercise 3

function showProperties(movie){
    console.log('Properties')
    for(let key in movie){
        console.log(key);
    }

    console.log('Values')
    for(let key in movie){
        console.log(movie[key]);
    }
}

const movie = {
title : 'Some movie',
releaseYear: 2018,
rating: 4.5,
director: 'Steven Spielberg'
};
showProperties(movie);

// Exercise 4

let circle={
    radius: 2,
    area: function(){
        return Math.PI * this.radius * this.radius;
    },
}

console.log(circle.area());

// Exercise 5

let circle={
    radius: 2,

    get radiusValue(){
        return this.radius;
    },

    set radiusValue(value){
        if (value > 0){
            this.radius=value;
        }
        else{
            console.log('Radius must be positive');
        }

    },

    area: function(){
        return Math.PI * this.radius * this.radius;
    },
}

// Exercise 6

let circle={
    radius: 2,

    getRadiusValue: function(){
        return this.radius;
    },

    setRadiusValue: function(value){
        if (value > 0){
            this.radius=value;
        }
        else{
            console.log('Radius must be positive');
        }

    },

    area: function(){
        return Math.PI * this.radius * this.radius;
    },
}



