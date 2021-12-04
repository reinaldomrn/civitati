<?php

use App\Relacion;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class RelacionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('relacion')->delete();
        $json = File::get("database/data/relacion.json");
        $data = json_decode($json);
        foreach ($data as $obj) {
            DB::insert("insert into relacion (idActividad, idRelacion) values ($obj->idActividad, $obj->idRelacion)");
        }
    }
}
