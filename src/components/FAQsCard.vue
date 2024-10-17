 <template>

<!-- FAQ 1 - Bootstrap Brain Component -->
<section class="bg-light py-3 py-md-5">
  <div class="container">
    <div class="row gy-5 gy-lg-0 align-items-lg-center">
      <div class="contenedor-imagen col-12 col-lg-6">
        <img class="img-fluid rounded" loading="lazy" src="../assets/question.png">
      </div>
      <div class="col-12 col-lg-6">
    <div class="row justify-content-lg-end">
        <div class="col-12 col-xl-11 p-4 shadow-sm bg-light rounded">
            <div class="contenedor-texto-superior">
                <h2 class="h1 mb-4 fw-bold text-primary" >¿Cómo podemos ayudarte?</h2>
                <p class="lead fs-5 mb-4" >Esperamos que encuentres respuestas a tus preguntas. Si necesitas ayuda, busca tu consulta en nuestro centro de asistencia o contáctanos por correo electrónico.</p>
            </div>
            <div class="accordion accordion-flush" id="accordionExample">
                <div class="accordion-item border-bottom mb-3">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button bg-white text-dark fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            ¿Cómo puedo realizar un pedido?
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>Para realizar un pedido, selecciona el producto que deseas comprar, agrégalo al carrito y sigue el proceso de pago. Recibirás una confirmación por correo electrónico cuando el pedido se haya completado.</p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item border-bottom mb-3">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed bg-white text-dark fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            ¿Puedo comprar desde mi celular?
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            Sí, nuestra tienda en línea es completamente compatible con dispositivos móviles. Puedes realizar compras desde cualquier smartphone o tableta.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed bg-white text-dark fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            ¿Cuáles son los métodos de pago disponibles?
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>Aceptamos tarjetas de crédito/débito (Visa, Mastercard, American Express), PayPal y transferencias bancarias.</p>
                        </div>
                    </div>
                </div>
            </div>
         </div>
       </div>
     </div>
    </div>
 </div>
</section>
</template>

<script> 
export default {
    name: "FAQsCard"
} 
</script>

<style scoped>
.contenedor-texto-superior  h2 {
    text-align: center;
}

.contenedor-texto-superior p {
    text-align: justify;
}

h2 {
    font-family: 'Nunito';
}
p, .accordion-body {
    font-family: 'Poppins';
}

.accordion-body {
    color: #656060;
}

@media (max-width: 768px) {
   .img-fluid {
    width: 60%;
   }
   .contenedor-imagen {
    display: flex;
    justify-content: center;
    align-items: center;
   }
}
</style>