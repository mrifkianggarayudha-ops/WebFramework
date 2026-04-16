<?php

use Illuminate\Support\Facades\Route;

// Route utama - redirect ke game
Route::get('/', function () {
    return redirect('/game');
});

// Route untuk game pages
Route::get('/game', function () {
    return file_get_contents(public_path('index.html'));
});

Route::get('/game/hardware', function () {
    return file_get_contents(public_path('Hardwere.html'));
});

Route::get('/game/fungsi', function () {
    return file_get_contents(public_path('Fungsi.html'));
});
