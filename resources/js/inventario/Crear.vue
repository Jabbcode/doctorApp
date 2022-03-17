<template>
    <form @submit.prevent="crear">
        <input v-model="producto.nombre" type="text" placeholder="nombre"/>
        <input v-model="producto.cantidad" type="number" placeholder="cantidad"/>
        <input v-model="producto.precio" type="number" placeholder="precio"/>
        <button type="submit">Agregar</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            producto: {
                img: '',
                nombre: '',
                cantidad: 0,
                precio: 0,
                cantidad_vendida: 0
            }
        }
    },
    methods: {
        async crear() {
            axios.post('http://127.0.0.1:8000/api/productos', this.producto)
            .then( response => {
                this.$router.push({name: "inventario"})
            })
            .catch( error => {
                console.log(error)
            })
        }
    }
}
</script>

<style scoped>
    
</style>