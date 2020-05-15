<template>
    <div id="SubirPublicacion">
        <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <form ><!-- class="was-validated" -->
                    <div class="col-md-12 mb-3">
                        <label for="validationServer01"><h5>Hola, Mario Lopez</h5></label><br/>
                        <br><!-- <label for="validationServer01">Correo: mp@gmail.com</label> -->
                        <p> 
                            ¡Gracias por compartir tu conocimiento!
                            <br/>
                            <br/>
                            <!-- <ul id="funciones">
                                <li>
                                    Puede subir, actualizar y gestionar publicaciones de su propiedad.
                                </li>
                                <li>
                                    Puede ser seguido por otros usuarios, y se les enviara notificaciones a estos cada que suba una publicacion
                                </li>
                            </ul>
                            <b>NOTA:</b> Su nombre de usuario seguira siendo la misma y podra seguir usando sus funcionalidades como usuario.
                            <br>
                            <br>
                            Favor llenar los siguientes datos: -->
                        </p>
                    </div>
                    <div class="col-md-8 mb-3">
                        <label for="exampleFormControlInput1">Titulo de la publicacion</label>
                        <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="Tarjeta Profesional">
                        <br/>
                        <label for="validationTextarea">Abstract</label>
                        <textarea class="form-control" id="validationTextarea" placeholder="Required example textarea" required></textarea>
                        <!-- <div class="invalid-feedback">
                        Please enter a message in the textarea.
                        </div> -->
                        <br>
                        <div class="mb-3">
                            <!-- <v-select multiple v-model="tag" :options="['Canada','United States']" /> -->
                            <label for="exampleFormControlInput2">Tags</label>
                            <!-- <select class="custom-select" required>
                            <option value="">Seleccionar...</option>
                            <option value="1" @click="addTag('Sistemas')">Sistemas</option>
                            <option value="2" @click="addTag('Quimica')">Quimica</option>
                            <option value="3" @click="addTag('Civil')">Civil</option>
                            </select> -->
                        </div>
                        <br>
                        <div v-for="item in tags" :key="item.id">
                            <button type="button" class="btn btn-outline-dark">{{item}}</button>
                        </div>
                        <br/>
                        <br/>
                        <!-- <div class="custom-control custom-checkbox mb-3">
                            <input type="checkbox" class="custom-control-input" id="customControlValidation1" required>
                            <label class="custom-control-label" for="customControlValidation1">
                                Acepto que todas mis publicaciones sean descargadas y compartidas a los usuarios de Ingenio.
                            </label>
                            <div class="invalid-feedback">Debe marcar la casilla</div>
                        </div> -->
                        <button type="submit" class="btn btn-dark mb-2">Subir publicacion</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import {Vuetify, VSelect } from 'vuetify'


export default {
  name: 'SubirPublicacion',
  data: function (){
    return {
        tags:{
            _1: "1",
            _2: "2",
            _3: "3",
            _4: "4",
            _5: "5"
        },
        tag: ''
    }
    },
    componenets:{
        Vuetify,
        VSelect
    },
    methods:{        
        addTag(tag){
            this.tag = tag;
            console.log(tag);
            // this.tags.push({tag: tag});
        }
    }
}
</script>

 <style scoped>
 
 </style>
