'use strict';

const { src, dest, watch, series, parallel } = require('gulp');
const rename = require('gulp-rename');

function changeHtml(){
    return src('src/**/*.html')
        .pipe(dest('prod/'));
}

function convMin(){
    return src('src/scss/**/*.scss')
        .pipe(rename({suffix: '.min'}))
        .pipe(dest('prod/css'));
}

function addNewPng(){
    return src('src/img/**/*.png')
        .pipe(dest('prod/img/'));
}

function watchingAll(){
    watch('src/**/*.html',changeHtml);
    watch('src/scss/**/*.scss',convMin);
    watch('src/img/**/*.png',addNewPng)
}

exports.default = parallel(changeHtml, convMin, addNewPng, watchingAll);
