## Civitatis test
Esta aplicación web esta desarrollada con el lenguaje PHP haciendo uso del framework laravel y la libreria React.

## Pasos para la instalación de civitatis test

1. Renombrar el archivo ".env.example" por ".env"
2. Abrir el archivo ".env" y donde dice DB_DATABASE=laravel remplazar por DB_DATABASE=civitati
3. Crear la base datos con el nombre "civitati"
4. Abrir una consola de comando y navegar hasta la carpeta del proyecto y luego ejecutar los siguiente comandos
 - composer install
 - npm install
 - php artisan key:generate
 - php artisan migrate:fresh
 - php artisan db:seed --class=ActividadSeeder
 - php artisan db:seed --class=RelacionSeeder
 - npm run dev
 - php artisan serve
 5. Abrir un navegador y en la barra de dirección ingresar http://127.0.0.1:8000 y seguidamente enter


## Pasos para ejecutar las pruebas unitarias con phpunit
1. Abra un terminal y navegue hasta el directorio de la app
2. Ejecute el comando:
    Mac y linux: <code>vendor/bin/phpunit</code>
    Windows:  <code>php vendor/phpunit/phpunit/phpunit<code>