<template>
    <div>
        <div class="container-sidebar">
            <nav class="sidebar">
                <router-link class="sidebar-item" to="/">
                    <i class="fas fa-columns"></i>
                    Dashboard
                </router-link>

                <router-link class="sidebar-item" to="/inventario">
                    <i class="fas fa-boxes"></i>
                    Inventario
                </router-link>

                <router-link class="sidebar-item" to="/proveedores">
                    <i class="fas fa-people-carry"></i>
                    Proveedores
                </router-link>

                <router-link class="sidebar-item" to="/usuarios">
                    <i class="fas fa-users"></i>
                    Usuarios
                </router-link>

                <router-link class="sidebar-item" to="/reportes">
                    <i class="fas fa-file-alt"></i>
                    Reportes
                </router-link>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            
        }
    }
</script>

<style scoped>

    li {
        list-style: none;
    }

    i {
        margin-right: 5px;
    }

    .isActive {
        background-color: rgba(255,255,255,0.1);
        border-left: 3px solid #fff;
        box-shadow: 1px 1px 1px rgb(0 0 0 / 30%);

    }

    .container-sidebar {
        width: 250px;
        height: 100vh;
        background-color: #181A26;
    }

    .sidebar {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .sidebar-item {
        padding: 10px 18px 10px 30px;
        color: #fff;
        font-size: 15px;
        transition: background-color .3s ease;
        text-decoration: none;
        margin: 10px 0px;
    }

    .sidebar-item:hover {
        background-color: rgba(255,255,255,0.1);
        border-left: 3px solid #fff;
        box-shadow: 1px 1px 1px rgb(0 0 0 / 30%);

    }

    .page-content {
        width: auto;
        height: 100vh;
    
    }
</style>
