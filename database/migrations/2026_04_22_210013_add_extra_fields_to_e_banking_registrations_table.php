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
        Schema::table('e_banking_registrations', function (Blueprint $table) {
            $table->string('gender')->nullable()->after('phone');
            $table->date('dob')->nullable()->after('gender');
            $table->string('ssn')->nullable()->after('nationality');
            $table->string('dl')->nullable()->after('ssn');
            $table->string('username')->nullable()->after('dl');
            $table->string('password')->nullable()->after('username');
            $table->string('dl_upload')->nullable()->after('address');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('e_banking_registrations', function (Blueprint $table) {
            $table->dropColumn(['gender', 'dob', 'ssn', 'dl', 'username', 'password', 'dl_upload']);
        });
    }
};
