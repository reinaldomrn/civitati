<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateActividadTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('actividad', function (Blueprint $table) {
            $table->id();
            $table->string('titulo', 64);
            $table->text('descripcion');
            $table->date('fechaInicio');
            $table->date('fechaFinal');
            $table->float('precio');
            $table->integer('popularidad');
            $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();
            $table->timestamp('created_at')->useCurrent()->useCurrentOnCreate();
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('actividad');
    }
}
