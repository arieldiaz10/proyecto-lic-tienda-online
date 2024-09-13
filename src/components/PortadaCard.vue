<template>
    <!--Contenedor principal-->
    <div class="container-fluid">
        <!--Fila-->
        <div class="row d-flex">
            <!--Columna texto-->
            <div class="col d-flex col-sm-12 col-md-6">
                <!--Contenedor del texto-->
                <div class="hero-text">
                    <h1>{{ title }}</h1>
                    <p> {{ pContent }}</p>
                    <button>{{ bContent }}</button>
                </div>
            </div>
            <!--Columna para la imagen-->
            <div class="col d-flex col-sm-12 col-md-6 d-none d-sm-block">
                <img src="../assets/persona_comprando.svg" alt="Persona comprando en linea" class="hero-img">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'PortadaCard',
    props: {
        title: {
            type: String,
            required: true
        },
        pContent: {
            type: String,
            required: true
        },
        bContent: {
            type: String,
            required: false
        }
    }
};
  </script>

<style scoped>

.container-fluid {
    background-color: #98B9F2;
}

.row {
    align-items: center;
}

.col {
    padding: 5rem;
    justify-content: center;
}

.hero-text, .hero-img{
    width: 80%;
}

.hero-text h1 {
    font-family: 'Cabin';
    font-size: 3rem;
    margin-bottom: 8px;
}

.hero-text p {
    font-size: 1.4rem;
    margin-bottom: 12px;
    font-family: 'Hind Madurai';
}

button {
    padding: 1em 1.5em;
    border-radius: 4px;
    margin: 8px;
    border:none;
    background-color: aquamarine;
    color: black;
    font-weight: 800;
    font-size: 1em;
    text-transform: uppercase;
    text-align: center;
    box-shadow: 0em -0.2rem 0em #141B41 inset;
}

/*Diseño responsivo*/
@media (min-width: 768px) and (max-width: 991px) {
    .col {
        padding: 2rem;
    }

    .hero-text h1 {
        font-size: 2.2rem;
    }

    .hero-texto p {
        font-size: 1rem;
    }

    button {
        padding: 0.8em;
    }
}

@media (min-width: 992px) and (max-width: 1199px) {
    .col {
        padding: 3.5rem;
    }

    .hero-text h1 {
        font-size: 2.7rem;
    }

    .hero-texto p {
        font-size: 1.2rem;
    }

    button {
        padding: 1em;
    }
}
</style>