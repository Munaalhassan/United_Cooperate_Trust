<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NewsEventImage extends Model
{
    use HasFactory;

    protected $fillable = [
        'news_event_id',
        'image_path',
        'caption',
        'sort_order',
    ];

    protected $appends = ['image_url'];

    public function newsEvent()
    {
        return $this->belongsTo(NewsEvent::class);
    }

    public function getImageUrlAttribute()
    {
        return $this->image_path ? asset('storage/' . $this->image_path) : null;
    }
}
