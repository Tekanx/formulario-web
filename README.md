# formulario-web
### Evaluación 2

A continuación se realiza el proyecto de la evaluación número 2, donde se realiza un formulario que pide ingresar al usuario sus datos, estos son:

• Nombre: (tipo:string)
• Apellidos: (tipo:string)
• RUT: (tipo:string)
• Correo Electrónico : (tipo: email)
• Teléfono Móvil : (tipo: number)
• Selecciona 1 o más lenguajes de programación de su interés (tipo: checklist)
		o Python
		o Java
		o TypeScript
		o PHP
		o C#
		o C++
• Cuál es su nivel de conocimiento en programación? (tipo :range)
• Cuantos años de experiencia laboral tiene? (tipo:radio)
• Una descripción breve acerca de usted: (tipo: textArea)

A su vez, se pide tener dos botones con la siguiente funcionalidad:

- Botón 1: Enviar Datos
- Botón 2: Limpiar Datos

Usar el evento Submit para el botón 1 y validar lo siguiente:
-  Todos los campos deben ser obligatorios
-  El formato de RUT debe ser número sin puntos + digito de verificación
-  El formato de teléfono móvil debe contener 9 dígitos
-  El tipo de campo TextArea debe contener Máximo 300 caracteres.

Una vez se han realizado las respectivas validaciones, se debe ocultar el formulario
y debe imprimir el siguiente mensaje: "hemos recibido sus datos, pronto nos
estaremos comunicando con usted"

El botón limpiar datos, debe ser una función llamada limpiarDatos, cuyo objetivo es limpiar los campos si se encuentran llenos.

### End
