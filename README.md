# My Finance

My Finance es una aplicación de finanzas personales desarrollada en React Native, diseñada para ayudarte a gestionar tus ingresos y gastos de manera efectiva. Con una interfaz intuitiva y funcionalidades avanzadas, My Finance te proporciona las herramientas necesarias para tener un control total sobre tus finanzas.

![My Finance Demo](demo.gif)

## **Características**

### **Funcionalidades Básicas**

- **Registro de Ingresos y Gastos:**
  - Añade, edita y elimina transacciones con facilidad.
  - Clasifica las transacciones en categorías personalizables como comida, transporte, entretenimiento, entre otras.
  - Permite agregar notas o descripciones adicionales a cada transacción.

- **Visualización de Datos:**
  - Visualiza un resumen de tus finanzas a través de gráficos interactivos.
  - Consulta informes por periodos de tiempo específicos (diario, semanal, mensual).
  - Filtra y agrupa tus transacciones por categorías, fechas o etiquetas.

- **Categorización y Etiquetas:**
  - Organiza tus finanzas mediante categorías y etiquetas personalizables.
  - Facilita la búsqueda y organización de tus transacciones.

### **Funcionalidades Avanzadas**

- **Presupuestos y Alertas:**
  - Establece presupuestos para distintas categorías y recibe alertas cuando estés cerca de superarlos.
  - Recibe notificaciones push para alertas de presupuesto y recordatorios de registrar gastos.

- **Sincronización y Copias de Seguridad:**
  - Sincroniza tus datos en la nube para mantenerlos actualizados y accesibles desde cualquier dispositivo.
  - Realiza copias de seguridad automáticas para proteger tu información.

- **Autenticación y Seguridad:**
  - Inicia sesión de forma segura con autenticación por correo electrónico, Google o Facebook.
  - Protege tu cuenta con opciones de seguridad adicionales como PIN o biometría (huella digital o reconocimiento facial).

- **Soporte Multimoneda y Conversión de Moneda:**
  - Gestiona tus finanzas en múltiples monedas, con conversión automática según las tasas de cambio actualizadas.
  - Personaliza las monedas utilizadas para distintas transacciones y categorías.

- **Notificaciones Personalizadas:**
  - Configura notificaciones para recibir alertas y recordatorios relevantes sobre tus finanzas.

## **Tecnologías Utilizadas**

- **Frontend:**
  - React Native: Desarrollo de la interfaz de usuario y lógica de la aplicación.
  - Redux / Context API: Gestión del estado global de la aplicación.

- **Backend:**
  - Firebase / AWS Amplify: Sincronización en la nube, autenticación y almacenamiento de datos.
  - SQLite: Almacenamiento local para mantener la funcionalidad sin conexión.

- **Autenticación:**
  - Firebase Authentication: Sistema de autenticación seguro para los usuarios.

- **APIs Externas:**
  - API de tasas de cambio: Conversión de monedas en tiempo real.
  - Firebase Cloud Messaging: Notificaciones push para alertas y recordatorios.

- **Testing:**
  - Jest: Pruebas unitarias para asegurar la funcionalidad del código.
  - Detox: Pruebas end-to-end para garantizar la estabilidad de la aplicación.
