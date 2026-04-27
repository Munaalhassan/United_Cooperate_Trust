<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\Admin::updateOrCreate(
            ['email' => 'admin@uctbank.com'],
            [
                'name' => 'Master Admin',
                'password' => \Illuminate\Support\Facades\Hash::make('Admin@UCT2026!'),
            ]
        );
    }
}
