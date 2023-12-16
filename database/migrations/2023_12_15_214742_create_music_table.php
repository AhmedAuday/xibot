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
        Schema::disableForeignKeyConstraints();

        Schema::create('music', function (Blueprint $table) {
            $table->id();
            $table->string('Title');
            $table->string('Artist');
            $table->string('Genre');
            $table->string('FilePath');
            $table->foreignId('UserID')->constrained('users');
            $table->dateTime('DateTime');
            $table->timestamps();
        });

        Schema::enableForeignKeyConstraints();
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('music');
    }
};
