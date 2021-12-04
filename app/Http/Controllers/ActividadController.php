<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class ActividadController extends Controller
{
    public function all($fecha)
    {
        return DB::table('actividad')
        ->whereDate("fechaInicio",  "<=", $fecha)
        ->whereDate("fechaFinal",  ">=", $fecha)
        ->orderByDesc("popularidad")
        ->get();
    }

    public function show($id, $fecha)
    {
        return DB::table('actividad')
        ->leftjoin('relacion as r', 'r.idActividad', '=', 'actividad.id')
        ->leftjoin('actividad as ar', 'r.idRelacion', '=', DB::raw("ar.id AND DATE(ar.fechaInicio) <= '{$fecha}' AND DATE(ar.fechaFinal) >= '{$fecha}'"))
        ->select(DB::raw('group_concat(ar.titulo) as relacionadas'), 'actividad.id', 'actividad.titulo', 'actividad.descripcion', 'actividad.precio', 'actividad.fechaInicio')
        ->where('actividad.id', '=', $id)
        ->groupBy('actividad.id', 'actividad.titulo', 'actividad.descripcion', 'actividad.precio', 'actividad.fechaInicio')
        ->get();
    }
}
