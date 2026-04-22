<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('nav_funds', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('isin')->unique();
            $table->string('ccy', 3);
            $table->date('date');
            $table->decimal('price', 16, 4);
            $table->decimal('last_price', 16, 4);
            $table->decimal('change', 16, 4);
            $table->decimal('yield', 8, 2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('nav_funds');
    }
};
