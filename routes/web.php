<?php

use App\Http\Controllers\home\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::resource('/',HomeController::class);
