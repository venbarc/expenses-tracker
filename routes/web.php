<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// AUTH 
Route::middleware(['auth'])->group(function () {
   
});

// NOT AUTH 
// HOME 
Route::get('/', [HomeController::class, 'index'])->name('home');

Route::prefix('guest')->name('guest.')->group(function () {
    Route::prefix('createActivity')->name('createActivity.')->group(function () {
        
    });
});
