Proyecto de Automatización con Playwright TS

Este proyecto es un framework de automatización basado en TypeScript que utiliza Playwright. Automatiza el proceso de envío de un formulario de ejemplo en el formulario de práctica de DemoQA. El proyecto también se integra con Allure para generar informes de pruebas.

Estructura del Proyecto

src/
├── actors/
│   └── User.ts
├── assets/
│   └── test.png
├── interactions/
│   └── RandomData.ts
├── questions/
│   ├── ConfirmationPopup.ts
│   └── FormData.ts
├── tasks/
│   ├── FillForm.ts
│   └── SubmitForm.ts
├── tests/
│   └── formtest.spec.ts

Directorios y Archivos Clave

actors/: Contiene la clase User, que encapsula las acciones y preguntas que un usuario puede realizar.

assets/: Almacena recursos como imágenes utilizadas en los casos de prueba.

interactions/: Define componentes reutilizables como RandomData para generar datos de prueba dinámicos.

questions/: Contiene la lógica para validar o extraer información de la interfaz (por ejemplo, popups de confirmación, datos del formulario).

tasks/: Contiene tareas que representan acciones de usuario de alto nivel (por ejemplo, completar y enviar el formulario).

tests/: Incluye especificaciones de pruebas.

Prerrequisitos

Asegúrate de tener instalado lo siguiente:

Node.js (>= 16.x)

npm o yarn

Allure CLI

Configuración

Propiedades:

En el archivo playwright.config.ts podemos configurar propiedades que afectaran directamente a la ejecución de nuestros test, como por ejemplo:

use: {
    
    trace: 'on-first-retry',
    actionTimeout: 0,
    launchOptions: {
      slowMo: 1000
    }
  },

actionTimeout -> me indica cuando esperar a cada test
launchOptions -> propiedades que afecten directamente a la ejecución del test
slowMo -> para que los test no se ejecuten tan rápido si no en un tiempo en milisegundos que yo le defina
testDir: './tests', -> Ruta de la carpeta donde van a estar los test a ejecutar

Clona el repositorio:

git clone <https://github.com/sebas0484/PlayWright-TS.git>
git checkout <feature/reto_finkargo>

Instala las dependencias:

npm install

Instala Allure CLI (si no está instalado):

npm install -g allure-commandline --save-dev

Ejecución de Pruebas

Ejecuta las pruebas con Playwright:

npx playwright test

Ejecuta las pruebas con generación de reportes de Allure:

npx playwright test --reporter=line,allure-playwright
o
npx allure generate allure-results --clean

Genera y visualiza el informe de Allure:

allure serve allure-results
o
npx allure open

Comandos que pueden ser de ayuda:
npx playwright codegen -> Generar el inspector de playwright
npx playwright test --headed -> Realiza la ejecución e los test en primer plano
npx playwright test --debug -> ejecutar el inspector en modo debug
set DEBUG=pw:api && npx playwright test -> Tool de debug para poder validar los paso a paso desde consola y verificar el tiempo de ejecución de cada uno

Personalización de Pruebas

Elementos del Formulario: Actualiza los selectores en FillForm.ts y FormData.ts si cambia la estructura del formulario.

Características Clave

Diseño Modular: Separación de responsabilidades utilizando actores, tareas, interacciones y preguntas.

Datos Dinámicos: Utiliza faker.js para generar datos de prueba aleatorios.

Informes de Pruebas: Integración con Allure para generar informes completos.

Componentes Reutilizables: Las tareas y preguntas están diseñadas para ser reutilizables en diferentes pruebas.

Solución de Problemas

Si las pruebas fallan, verifica lo siguiente:

Asegúrate de que el sitio web bajo prueba esté disponible.

Verifica que los selectores en las tareas y preguntas coincidan con la estructura actual del sitio web.

Asegúrate de que Playwright y Allure CLI estén correctamente instalados.

Recursos

Documentación de Playwright: : https://playwright.dev/docs/intro

Documentación de Allure: https://allurereport.org/docs/

Documentación de faker.js: https://fakerjs.dev/guide/