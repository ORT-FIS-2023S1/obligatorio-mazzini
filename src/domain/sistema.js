class Sistema{
	constructor(){
		this.listaMenus = [];
		this.listaPedidos = [];
	}

	agregarMenu(menu){
	    this.listaMarcas.push(menu);
	}

	agregarPedido(pedido){
	    this.listaPedidos.push(pedido);
	}
	
	darTodosCelulares(){
		return this.listaCelulares;
	}
	
	darTodasMarcas(){
		return this.listaMarcas;
	}
	
	estaMarca(otraMarca){
		let esta = false;
		for(let i = 0; i<this.listaMarcas.length; i++){
			if(this.listaMarcas[i].marca.toLowerCase() == otraMarca.toLowerCase()){
				esta = true;
			}
		}
		return esta;
	}
	
	estaCelular(otroModelo){
		let esta = false;
		for(let i = 0; i<this.listaCelulares.length; i++){
			if(this.listaCelulares[i].modelo.toLowerCase() == otroModelo.toLowerCase()){
				esta = true;
			}
		}
		return esta;
	}
}