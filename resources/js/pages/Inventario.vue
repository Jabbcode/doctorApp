<template>
    <div>
        <router-link to="/inventario/crear">Agregar</router-link>
    <div>

    </div>
        <table>
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Accion</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="producto in productos">
                    <th scope="row">{{ producto['nombre'] }}</th>
                    <td>{{ producto['cantidad'] }}</td>
                    <td>{{ producto['precio'] }}</td>
                    <td>
                        <button>
                            <i class="fa-solid fa-pen"></i>
                        </button>

                        <button @click="eliminarProducto(producto['id'])">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                productos: [],
                paginate: ['productos']
            }
        },
        mounted() {
            this.mostrarProductos()
        },
        methods: {
            async mostrarProductos() {
                await axios.get('http://127.0.0.1:8000/api/productos')
                .then(response => {
                    this.productos = response.data
                })
                .catch(error => {
                    this.productos = []
                })
            },
            async eliminarProducto(id) {
                await axios.delete(`http://127.0.0.1:8000/api/productos/${id}`)
                .then( response => {
                    this.mostrarProductos()
                })
                .catch(error => {
                    this.productos = []
                })
            }
        }
    }
</script>

<style scoped>
    table {
        table-layout: fixed;
        width: 100%;
        border: 1px solid #000;
    }

    thead {
        border: 1px solid #000;
    }

    thead th:nth-child(1) {
        width: 30%;
    }

    thead th:nth-child(2) {
        width: 20%;
    }

    thead th:nth-child(3) {
        width: 25%;
    }

    thead th:nth-child(4) {
        width: 35%;
    }

    th, td {
        padding: 20px;
    }

    tr {
        border-bottom: 1px solid #000;
    }
</style>