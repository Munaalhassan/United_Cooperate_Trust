<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NavFund extends Model
{
    protected $fillable = [
        'name',
        'isin',
        'ccy',
        'date',
        'price',
        'last_price',
        'change',
        'yield',
    ];

    protected $casts = [
        'date' => 'date',
        'price' => 'decimal:4',
        'last_price' => 'decimal:4',
        'change' => 'decimal:4',
        'yield' => 'decimal:2',
    ];
}
