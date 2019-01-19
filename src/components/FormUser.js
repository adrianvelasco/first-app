import React, { Component } from 'react';

class FormUser extends Component{
	constructor(){
		super();
		this.state = {
			nombre: '',
			apellido: '',
			usuario: '',
			password: ''
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e){
		e.preventDefault();
		this.props.onAddUser(this.state);
		this.setState({
			nombre: '',
			apellido: '',
			usuario: '',
			password: ''
		});
		console.log(this.state);
	}

	handleInputChange(e){
		const {value, name} = e.target;
		this.setState({
			[name]: value
		});
	}

	render(){
		return (
			<div className="card">
				<h3>Crear Usuario</h3>
				<form onSubmit={this.handleSubmit} className="card-body">
					<div className="row">
						<div className="col-6">
							<input 
								type="text"
								name="nombre"
								className="form-control"
								value={this.state.nombre}
								onChange={this.handleInputChange}
								placeholder="Nombre del Usuario"
							/>
						</div>
						<div className="col-6">
							<input 
								type="text"
								name="apellido"
								className="form-control"
								value={this.state.apellido}
								onChange={this.handleInputChange}
								placeholder="Apellido del Usuario"
							/>
						</div>
						<div className="col-6">
							<input 
								type="text"
								name="usuario"
								className="form-control"
								value={this.state.usuario}
								onChange={this.handleInputChange}
								placeholder="Usuario"
							/>
						</div>
						<div className="col-6">
							<input 
								type="password"
								name="password"
								className="form-control"
								value={this.state.password}
								onChange={this.handleInputChange}
								placeholder="Password"
							/>
						</div>
					</div>
					<div className="row mt-3">
						<div className="col-12">
							<button type="submit" className="btn btn-primary btn-block">
								Guardar
							</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
}

export default FormUser;