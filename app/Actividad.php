<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Actividad extends Model
{
    //
    protected $fillable = ['titulo' ,'descripcion', 'fechaInicio', 'fechaFinal', 'precio', 'popularidad'];

}
