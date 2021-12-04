<?php

use App\Actividad;
use Illuminate\Support\Facades\File;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ActividadSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('actividad')->delete();
        $json = File::get("database/data/actividades.json");
        $data = json_decode($json);
        foreach ($data as $obj) {
            DB::insert("insert into actividad (titulo, descripcion, fechaInicio, fechaFinal, precio, popularidad) values ('$obj->titulo', '$obj->descripcion', '$obj->fechaInicio', '$obj->fechaFinal', $obj->precio, $obj->popularidad)");
        }
    }
}
