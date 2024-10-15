<template>
    <section id="testimonios" class="testimonios seccion-clara d-flex flex-column align-items-center">
        <h2 class="seccion-titulo">Testimonios</h2>
        <h3 class="seccion-descripcion">Esto es lo que nuestros clientes opinan de nosotros...</h3>

        <!-- Carrusel -->
        <div id="testimonios-carrusel" class="carousel carousel-dark slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="container">
                        <img class="testimonio-imagen rounded-circle" src="../assets/customers/pedro.jpg"
                            alt="Foto de Pedro">
                        <p class="testimonio-texto">"La compra fue muy fácil y rápida. Los productos son de excelente
                            calidad. Sin duda, volveré a comprar aquí."</p>
                        <div class="testimonio-info">
                            <p class="cliente">Pedro Santos</p>
                            <div class="stars">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="container">
                        <img class="testimonio-imagen rounded-circle" src="../assets/customers/maria.jpg"
                            alt="Foto de María">
                        <p class="testimonio-texto">"Muy buen servicio al cliente y la entrega fue puntual. Los
                            productos llegaron en perfecto estado. ¡Totalmente satisfecha!"</p>
                        <div class="testimonio-info">
                            <p class="cliente">María Galicia</p>
                            <div class="stars">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="container">
                        <img class="testimonio-imagen rounded-circle" src="../assets/customers/juan.jpg"
                            alt="Foto de Javier">
                        <p class="testimonio-texto">"Me encantó la variedad de productos y los precios son justos. El
                            envío fue súper rápido. ¡Definitivamente lo recomiendo</p>
                        <div class="testimonio-info">
                            <p class="cliente">Javier Cruz</p>
                            <div class="stars">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#testimonios-carrusel"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Anterior</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#testimonios-carrusel"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Siguiente</span>
            </button>
        </div>
    </section>
</template>

<script>
export default {
    name: 'TestimoniosCard'
}
</script>

<style scoped>
.seccion-titulo {
    font-size: 2rem;
    color: #455E9C;
}

.seccion-descripcion {
    font-size: 1.5rem;
    color: #656060;
}

.testimonios {
    padding: 40px 40px 80px 40px;
}

.testimonios .carousel {
    max-width: 800px;
}

.carousel-item {
    height: 500px;
}

.carousel-item .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.testimonio-imagen {
    height: 150px;
    width: 150px;
    margin: 0 0 20px;
}

.testimonio-texto {
    max-width: 70%;
    font-size: 20px;
    text-align: center;
    font-family: 'Poppins';
}

.testimonio-info {
    text-align: center;
}

.testimonio-info p {
    margin-bottom: 0;
}

.testimonio-footer .cliente {
    font-size: 1.2rem;
}

.stars i {
    color: goldenrod;
}

@media (max-width: 768px) {
    #testimonios {
        text-align: center;
    }

    .testimonio-imagen {
        width: 100px;
        height: 100px;
        margin: 5px 5px 5px 5px;
    }

    .testimonio-texto {
        max-width: 70%;
        font-size: 1.2rem;
        text-align: center;
    }
}
</style>