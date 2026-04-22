<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Publication extends Model
{
    protected $fillable = [
        'title',
        'category',
        'file_path',
        'file_type',
        'file_size',
        'published_at',
    ];

    protected $casts = [
        'published_at' => 'date',
    ];
}
