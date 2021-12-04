<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Reserva;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReservaController extends Controller
{
    public function store(Request $request)
    {
        DB::beginTransaction();
        $result = Reserva::create($request->all());;
        if($result->save()){
            DB::commit();
            return response($result, 200);
        }else{
            DB::rollBack();
            return response("No se pudo registrar los datos", 500);
        }
    }
}
