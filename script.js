var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Jatziry Diaz')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Programadora frontend JR')
    .pauseFor(1500)
    .deleteAll()
    .typeString('<strong>Estudiante frustrada</strong>')
    .pauseFor(1500)
    .start();