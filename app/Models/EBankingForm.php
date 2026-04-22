<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EBankingForm extends Model
{
    use HasFactory;

    protected $table = 'ebanking_forms';

    protected $fillable = [
        'category',
        'title',
        'file_path',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];
}
