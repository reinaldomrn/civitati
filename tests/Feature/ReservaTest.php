<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ReservaTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testSetReserva()
    {
        $response = $this->json('POST', 'api/reserva', [
            "idActividad" => 1,
            "numeroPersona" => 3,
            "precio" => 156.60,
            "fecha" => '2021-12-24'
        ]);

        $response->assertStatus(200)
        ->assertJsonStructure([
            "created_at", "fecha", "id", "idActividad", "numeroPersona", "precio", "updated_at"
        ]);

        $this->assertDatabaseHas('reservas', [
            "idActividad" => 1,
            "numeroPersona" => 3,
            "precio" => 156.60,
            "fecha" => '2021-12-24'
        ]);
    }
}
