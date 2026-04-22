<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EBankingRegistration extends Model
{
    use HasFactory;

    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'phone',
        'gender',
        'dob',
        'nationality',
        'ssn',
        'dl',
        'username',
        'password',
        'account_type',
        'occupation',
        'address',
        'dl_upload',
        'status',
        'admin_notes',
    ];
}
