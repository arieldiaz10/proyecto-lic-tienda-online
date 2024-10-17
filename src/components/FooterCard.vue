<template>
    <!--Footer de la pagina web-->
    <footer class="seccion-oscura d-flex flex-column align-items-center justify-content-center">
        <LogoCard class="footer-logo"></LogoCard>
        <div class="footer-texto text-center">Diseñado y creado con pasión y preocupación.
            Solo lo mejor en todo momento.</div>

        <!-- <img class="footer-icono" src="" alt=""> -->
        <div class="iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center">
            <a href="https://x.com/?lang=es" target="_blank" rel="noopener noreferrer">
                <i class="bi bi-twitter-x"></i>
            </a>

            <a href="https://github.com/arieldiaz10/proyecto-lic-tienda-online/tree/productoo-melany" target="_blank" rel="noopener noreferrer">
                <i class="bi bi-github"></i>
            </a>

            <a href="https://sv.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <i class="bi bi-linkedin"></i>
            </a>

            <a href="https://www.instagram.com/?hl=es" target="_blank" rel="noopener noreferrer">
                <i class="bi bi-instagram"></i>
            </a>

            <a href="mailto:" target="_blank" rel="noopener noreferrer"><i class="bi bi-envelope"></i></a>
        </div>
        <br>
        <div class="divider"></div>
        <div class="derechos-aut">
            <div class="text-center">&#169; 2024 Copyright - Lenguajes Interpretados en el Cliente 02T<br><br></div>
            <div class="text-center">Creadores:</div>
            <div class="row">
                <div class="col-6">
                    Ariel Ernesto Díaz<br>
                    Arnulfo Antonio Escobar<br>
                    Manuel Eduardo Castro<br>
            
                </div>
                <div class="col-6">
                    Melany Fabiola Contreras<br>
                    Sofía Elizabeth Recinos<br>
                    Douglas Enrique Vanegas<br>
                </div>
            </div>           
        </div>
    </footer>
</template>

<script>
import LogoCard from './LogoCard.vue';

export default{
    name: 'FooterCard',
    components: {
        LogoCard
    }
}

</script>

<style scoped>

footer{
    min-height: 500px;
}

.seccion-oscura {
  color: white;
  background-color: #23345e;
  /* background-color: #131d37;*/
}

.footer-logo{
    /**height: 80px;
    width: 100px;**/
    margin: 10px;
}

.divider{
    width: 80%;
    height: 1px;
    background-color: #e0e0e0;
    border: solid #e0e0e0;
    border-width: 1px 0;
    box-shadow: inset 0 .5em 1.5em #e0e0e0, inset 0 .125em .5em #e0e0e0;
}

.footer-texto{
    font-size: 1.5rem;
    padding: 20px;
    margin-bottom: 30px;
    font-family: 'Hind Madurai', sans-serif;
}

.iconos-redes-sociales a{
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px;
    margin: 10px;
    border: 2px solid #e0e0e0;
    border-radius: 25%;
    transition: all 0.2s ease-in;
}

.iconos-redes-sociales i{
    color: white;
    font-size: 1.5rem;
    transition: all 0.2s ease-in;
}

.iconos-redes-sociales a:hover{
    background-color: white;
    border: 2px solid #688bb7;
}

.iconos-redes-sociales a:hover i{
    color:black;
}

.derechos-aut{
    font-size: 15px;
    color: #e0e0e0;
    padding: 20px;
}

</style>