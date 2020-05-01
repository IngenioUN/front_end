<template>  
<!----------------------------------------------- Barra de navegacion ------------------------------------------------------->
    <div id="NavBar">
        <div class="row">            
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <nav class="navbar navbar-expand-lg bg-dark navbar-dark d-flex justify-content-between">                    
                    <a class="navbar-brand text-success" href="#"><i><h1>Ingenio</h1></i></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link text-success" data-toggle="tab" href="#home">Inicio</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link text-success dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categorias</a>
                                <div class="dropdown-menu">
                                <a class="dropdown-item" href="#one">Sistemas</a>
                                <div role="separator" class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#two">Electricidad</a>
                                <div role="separator" class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#three">Medicina</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link text-success dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Autores</a>
                                <div class="dropdown-menu">
                                <a class="dropdown-item" href="#one">Valeria Huepa</a>
                                <div role="separator" class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#two">Tatiana Zambrano</a>
                                <div role="separator" class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#three">Jose Peña</a>
                                <div role="separator" class="dropdown-divider"></div>   
                                <a class="dropdown-item" href="#three">Carlos Rincon</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link text-success dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Lo mas recientes</a>
                                <div class="dropdown-menu">
                                <a class="dropdown-item" href="#one">2020</a>
                                <div role="separator" class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#two">2019</a>
                                <div role="separator" class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#three">2018</a>
                                <div role="separator" class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#three">2017</a>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-success" href="#fat">Lo mas visto</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-success" href="#fat">Sobre Nosotros</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link text-success" href="#mdo">Contactenos</a>
                            </li>
                            <li class="nav-item">
                                <button type="button" class="btn btn-outline-success" @click="form.type=1">Registrarse</button>
                            </li>
                            <li class="nav-item">
                                <button type="button" class="btn btn-outline-success" @click="form.type=0">Iniciar Sesion</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
<!----------------------------------------------- Barra de navegacion ------------------------------------------------------->    
</template>>

<script>
export default {
  name: 'NavBar'
}
</script>
