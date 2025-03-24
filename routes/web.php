<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});
Route::get('/contact', function () {
    return inertia('Contact');
});
Route::get('/about', function () {
    return inertia('About/About');
});
