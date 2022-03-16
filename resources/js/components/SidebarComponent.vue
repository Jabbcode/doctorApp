<template>
    <div>
        <div class="container-sidebar">
            <div class="side-menu-container">
                <nav class="sidebar">
                    <li class="sidebar-item">Dashboard</li>
                    <li class="sidebar-item">Inventario</li>
                    <li class="sidebar-item">Proveedores</li>
                    <li class="sidebar-item">Usuarios</li>
                    <li class="sidebar-item">Respaldo</li>
                </nav>
            </div>
            <div class="page-content">
                <p>This is an example content so we can see how this baby slides in</p>
            </div>
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

    .container-sidebar {
        display:flex;
    }
    .side-menu-container {
        width: 250px;
        height: 100vh;
        background-color: #181A26;
    }

    .sidebar {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 20px;
    }

    .sidebar-item {
        padding: 12px 18px;
        color: #fff;
        font-size: 15px;
        margin-left: 25px;
        transition: all .3s ease;
    }

    .sidebar-item:hover {
        background-color: rgba(255,255,255,0.1);
    }

    .page-content {
        width: auto;
        height: 100vh;
    
    }
</style>
