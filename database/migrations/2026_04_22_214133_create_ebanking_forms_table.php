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
        Schema::create('ebanking_forms', function (Blueprint $blueprint) {
            $blueprint->id();
            $blueprint->string('category'); // e.g., 'Natural Person', 'Legal Entities', 'Funds', 'Specific Conditions'
            $blueprint->string('title'); // e.g., 'Application form', 'BoD Resolutions template'
            $blueprint->string('file_path');
            $blueprint->boolean('is_active')->default(true);
            $blueprint->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ebanking_forms');
    }
};
