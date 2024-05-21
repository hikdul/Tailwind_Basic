# Tailwind

Aca mostraremos un par de practicas echas para practicar y entender Tailwind a profundidad. lo importante aca es ver lo realizado y tomar dichas nochas.

 _note:_ tener en cuenta que cuando hice el curso yo estaba en la version 3.4.3 y el curso estaba orientado a la version 3.3.1; por tanto puede que algunas cosas cambien en comparacion a los videos del curso.

 Para acceder al curso que es gratuito y pertenece a freeCodeCamp puede seguir el siguiente [enlace](https://www.youtube.com/watch?v=5HtRcMSO1Ro&ab_channel=freeCodeCampEspa%C3%B1ol)

## Ventajar de usar Tailwind

1. Manejo de estados hover, focus...
2. ahorrar tiempo en eleccion de nombre para clases  
3. cambios de forma segura
4. personalizacion de elemntos como colores, espaciados, etc.

## para instalar Tailwind

1. Instala las dependencias
`npm install -D tailwindcss`

2. Genera la intstalacion directa del tailwind
`npx tailwindcss init`

3. de este modo puedo generar configuraciones para mi tailwind

```
module.exports = {
  content: ["./src/**/*.{html,js}"],  
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Elementos a tomar en cuenta con Tailwind

### Colores [ex.](./0.basic/src/index.html)
donde bg es background y se veria algo como `bg-lime-600` que se considera una clase predefinida. Recuerda que siempre se debe de tener tailwind corriendo. para personalizar los colores se puede seguir la siguiente [guia](https://tailwindcss.com/docs/customizing-colors)

### Medidas [ex.](./0.basic/src/index.html)

basicamente son altos y anchos para poder trabajar con los espacios que ocupan nuestro elementos, para tener mas informacion a mano puede observar la documentacion en la siguiente [pagina](https://tailwindcss.com/docs/width)

### Estados [ex.](./0.basic/src/3-estados.html)

una de las caracteristicas mas intenesantes de talwind es el manejo de estados, estos son por ejemplo focus, hover... y podremos crear validaciones directamente con css sin tener que utilizar JS u otro elemento.

### Pseudoclases [ex.](0.basic/src/4-pseudoclases.html)

uso de las pseudoclases de css; estos son por ejemplo after, before, etc.

### Responsive Designe [ex.](0.basic/src/5-ResponsiveDesing.html)

basicamente me amplia los datos basandose en la siguiente tabla

<table>
  <thead>
    <tr>
      <th>Breakpoint</th>
      <th>prefix</th>
      <th>@media</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>sm</td>
      <td>640px</td>
      <td>@media (min-width: 640px) { ... }</td>
    </tr>
    <tr>
      <td>sm</td>
      <td>640px</td>
      <td>@media (min-width: 640px) { ... }</td>
    </tr>
    <tr>
      <td>md</td>
      <td>768px</td>
      <td>@media (min-width: 768px) { ... }</td>
    </tr>
    <tr>
      <td>lg</td>
      <td>1024px</td>
      <td>@media (min-width: 1024px) { ... }</td>
    </tr>
    <tr>
      <td>xl</td>
      <td>1280px</td>
      <td>@media (min-width: 1280px) { ... }</td>
    </tr>
    <tr>
      <td>2xl</td>
      <td>1536px</td>
      <td>@media (min-width: 1536px) { ... }</td>
    </tr>
  </tbody>
</table>
 	
de este modo me reduce aplicar los cambios directamente desde las clases. Tambien podremos modificar estos puntos de quiebre agregando el valor `screems` con la diferencio que al agregar un nuevo punto los que vienen por defecto quedan sin efecto alguno; asi que la recomendacion es agregar estos puntos de quiebre tambien. Si se introduce `screems` dentro de la propiedad `extends` simplemente se agrega un valor extra


### flexbox [ex.](0.basic/src/6-Flexbox.html)

no necesita presentacion, pero es un pequeno ejemplo de como aplicar flexbox y aplicar sus propiedades. Se aplica con la propiedad *flex*

### GRID [ex1](./0.basic/src/7-GRID.html) [ex2](./0.basic/src/7-GRID2.html)

en tailwind usar grid es bastante sencillo, incluso mas que usarlo con css directamente. Se aplica con la propiedad *Grid*

### Dark Mode [ex.](./0.basic/src/8-dark.html)

aca se podra observar el modo oscuro en su explendor y se aplica mediante la propiedad *Dark*. Este modo se activa o mejor dicho esta vistas se obtienen dependiendo del modo(oscuro o claro) que aplique el explorador. Siendo el modo claro el que se lleve todos los datos actuales de la web y el modo oscuro quien aplique los cambios que se cree aca.
