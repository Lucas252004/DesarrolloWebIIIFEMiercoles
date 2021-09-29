
let alumnos = {
    nombre: 'Lucas',
    edad: 17,
    mostrar: ()=>{
        return `Soy ${alumnos.nombre} y tengo ${alumnos.edad}`;
    }
};
let saludo = alumnos.mostrar();
ReactDOM.render(
    <div className="row">
        <div className="col-6 bg-primary text-white p-4">
            Aqui estoy en react {saludo}
        </div>
    </div>,
    document.getElementById('root')
);