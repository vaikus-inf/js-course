"use strict";

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: () => {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: () => {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
                  b = prompt('На сколько оцените его?', '');
            
            //if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            if (a && b && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');    
            } else {
                console.log('error');
                i--;
            } 
        }
    },
    detectPersonalLevel: () => {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    writeYourGenres: () => {
        // for (let i = 1; i <= 3; i++) {
        //     let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');

        //     if (genre == '' || genre == null) {
        //         console.log('Вы ввели некорректные данные или не ввели их вовсе');
        //         i--;
        //     } else {
        //         personalMovieDB.genres[i - 1] = genre;
        //     }
        // }

        //Альтернативный способ
        for (let i = 1; i <= 1; i++) {
            let genres = prompt('Введите Ваши любимые жанры через запятую', '').toLowerCase();

            if (genres == '' || genres == null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: () => {
        personalMovieDB.privat ? personalMovieDB.privat = false : personalMovieDB.privat = true;
    },
    showMyDB: (hidden) => {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    }
};

personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.writeYourGenres();

personalMovieDB.toggleVisibleMyDB();

personalMovieDB.showMyDB(personalMovieDB.privat);