document.addEventListener('DOMContentLoaded', function () {
    // Eliminar productos
    const deleteButtons = document.querySelectorAll('.bote');
    deleteButtons.forEach((btn) => {
        btn.addEventListener('click', function () {
            const productRow = btn.closest('.filas');
            productRow.remove();
            updateTotal();
        });
    });

    // Mostrar modal al hacer clic en Proceder al pago
    const proceedButton = document.getElementById('btnirModal');
    const modal = document.getElementById('myModalCliente');
    const closeButton = document.getElementById('close');

    if (proceedButton) {
        proceedButton.addEventListener('click', function () {
            modal.style.display = 'block';
        });
    }

    if (closeButton) {
        closeButton.addEventListener('click', function () {
            modal.style.display = 'none';
        });
    }

    // Regex para validaciones
    const telefonoRegex = /^[0-9]{10}$/;
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const tarjetaRegex = /^[0-9]{16}$/;
    const fechaCaducidadRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
    const cvvRegex = /^[0-9]{3,4}$/;
    // const direccionRegex = /^[a-zA-Z0-9\s,'-]+$/;

    // Validación del formulario
    const finalizarCompraButton = document.querySelector('.modal2 button[type="submit"]');
    if (finalizarCompraButton) {
        finalizarCompraButton.addEventListener('click', function (event) {
            event.preventDefault();
           

            const fieldsToValidate = [
                { id: 'correoElectronico', regex: correoRegex, errorMsg: 'Debe ingresar un correo electrónico válido' },
                { id: 'celular', regex: telefonoRegex, errorMsg: 'Debe ingresar un número de celular válido' },
                { id: 'numTarjeta', regex: tarjetaRegex, errorMsg: 'Debe ingresar un número de tarjeta válido' },
                { id: 'fechaCaducidad', regex: fechaCaducidadRegex, errorMsg: 'Debe ingresar una fecha de caducidad válida (MM/YY)' },
                { id: 'cVv', regex: cvvRegex, errorMsg: 'Debe ingresar un CVV válido' },
                // { id: 'direccion', regex: direccionRegex, errorMsg: 'Debe ingresar una dirección válida' }
            ];

            fieldsToValidate.forEach(field => {
                const input = document.getElementById(field.id);
                const value = input ? input.value : '';
                const existingError = input ? input.nextElementSibling : null;
                let isValid = true;

                if (!field.regex.test(value)) {
                    if (input && (!existingError || existingError.tagName !== 'SPAN')) {
                        const span = document.createElement('span');
                        span.textContent = `* ${field.errorMsg}`;
                        span.classList.add('error-message');
                        input.classList.add('error');
                        insertAfter(span, input);
                    }
                    isValid = false;
                } else {
                    if (!input.value) {
                        isValid = false;
                        input.classList.add('error');
                        alert(`El campo ${input.name} es obligatorio.`);
                    } else {
                        input.classList.remove('error');
                    }

                    if (isValid) {
                        window.location.href = ' http://127.0.0.1:5501/Proyecto-1/pages/checkout%E2%80%93payment-success.html';
                         // Aquí podrías redirigir a otra página o realizar otras acciones
                    }
                };

            });            
            
            

        });
    }

    function insertAfter(newNode, referenceNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

    // Actualizar total de productos
    function updateTotal() {
        let total = 0;
        const productValues = document.querySelectorAll('.valor-1 span');
        productValues.forEach(value => {
            total += parseFloat(value.textContent);
        });
        const discount = 15;
        const finalTotal = total - discount;
        document.querySelector('.total-de-productos .valores small').textContent = `$${total.toFixed(2)}`;
        document.querySelector('.total-de-productos .valores-total small').textContent = `$${finalTotal.toFixed(2)}`;
    }

    updateTotal();
});
