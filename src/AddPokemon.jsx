import React, {useState} from "react";

const API_URL = 'http://localhost:8080'

const AddPokemon = () => {

    const [form, setForm] = useState({name: '', type:'', generation: '', personality: ''});

    const createPokemon = async (pokemon) => {
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(pokemon)
        };
        const response = await fetch(`${API_URL}/pokemon`,requestOptions) 
        const data = await response.text();
      }
    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name] : e.target.value,
        });
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if (form.name.length > 0 && form.type.length > 0 && form.generation.length > 0 && form.personality.length > 0){
          createPokemon(form)
          setForm({name: '', type:'', generation: '', personality: ''})
        }
    }

    return (
        <div>
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4 p-3 border border-primary border-5">
                    <h2 className="fw-light" align="center">Nuevo Pokemon!</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nombre: </label>
                            <input className="form-control" type="text" id="name" name="name" value={form.name} onChange={handleChange}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="type" className="form-label">Tipo: </label>
                            <input className="form-control" type="text" id="type" name="type" value={form.type} onChange={handleChange}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="generation" className="form-label">Generacion: </label>
                            <input className="form-control" type="number" id="generation" name="generation" value={form.generation} onChange={handleChange}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="personality" className="form-label">Personalidad: </label>
                            <input className="form-control" type="text" id="personality" name="personality" value={form.personality} onChange={handleChange}></input>
                        </div>
                        <input class="btn btn-primary" type="submit"></input>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddPokemon;