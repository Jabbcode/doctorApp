<template>
    <div style="display: flex">
        <sidebar-component v-if="hidden"></sidebar-component>

        <div style="width: 100%;">
        
            <navbar-component v-on:cambiar="onCambiar"></navbar-component>
            <div style="margin: 16px">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            hidden: true
        }
    },
    methods: {
        onCambiar(dato) {
            this.hidden = dato
        }
   }
}
</script>

<style >
    
</style>