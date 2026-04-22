<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NewsEvent extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'type',
        'date',
        'excerpt',
        'content',
        'image_path',
        'is_published',
    ];

    protected $appends = ['image_url'];

    public function getImageUrlAttribute()
    {
        return $this->image_path ? asset('storage/' . $this->image_path) : null;
    }
}
