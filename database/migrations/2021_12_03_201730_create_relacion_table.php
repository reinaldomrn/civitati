<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRelacionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('relacion', function (Blueprint $table) {
            $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();
            $table->timestamp('created_at')->useCurrent()->useCurrentOnCreate();
        });

        Schema::table('relacion', function (Blueprint $table) {
            $table->foreignId('idActividad')
            ->constrained('actividad')
            ->onUpdate('cascade')
            ->onDelete('cascade');

            $table->foreignId('idRelacion')
            ->constrained('actividad')
            ->onUpdate('cascade')
            ->onDelete('no action');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('relacion');
    }
}
