<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ActividadTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testGetActividades()
    {
        $response = $this->json('GET', 'api/actividades/2021-12-03');
        $response->assertStatus(200)
        ->assertJsonStructure([[
            "id", "titulo", "descripcion", "fechaInicio", "fechaFinal", "precio","popularidad", "created_at"
        ]]);
    }

    public function testGetActividadesEmpty()
    {
        $response = $this->json('GET', 'api/actividades/2022-12-015');
        $response->assertStatus(200)
        ->assertJsonStructure([]);
    }

    public function testGetActividad()
    {
        $response = $this->json('GET', 'api/actividad/1/2021-12-03');
        $response->assertStatus(200)
        ->assertJsonStructure([[
        "relacionadas", "id", "titulo", "descripcion", "precio" ,"fechaInicio"
        ]]);
    }
}
