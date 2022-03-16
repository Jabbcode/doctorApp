<template>
    <div class="container-navbar">
        <div class="container-buttons">
            <button @click="toggle()" class="toggle">
                <i class="fa-solid fa-bars"></i>
            </button>
            <div class="buscador">
                <input type="text" placeholder="Buscar" class="input" />
                <button class="button">
                    <i class="fa-solid fa-magnifying-glass icon"></i>
                </button>
            </div>
        </div>
        <div class="perfil">
            <i class="fa-solid fa-bell icon-bell"></i>
            <div class="img-perfil">
                J
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
        toggle() {
            this.hidden = !this.hidden
            this.$emit('cambiar', this.hidden);
        }
    },
}
</script>

<style scoped>
    .container-navbar {
        height: 70px;
        padding: 5px;
        border-bottom: 1px solid #E5E7EB;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 1px 0px 1px rgb(0 0 0 / 50%);

    }

    .container-buttons {
        display: flex;
        align-items: center;
    }

    .toggle {
        border: none;
        background-color: transparent
    }

    .buscador {
        position: relative;
        top: -20px;
        margin-left: 10px;
    }

    .input {
        border-radius: 10px;
        border: 0.5px solid #E5E7EB;
        padding: 8px 15px 8px 40px;
        position: absolute;
        font-size: 1rem;
        outline: none;
    }

    .button {
        position: absolute;
        border: none;
        background-color: transparent;
        top: 9px;
        left: 10px;
    }
    .icon {
        color: #878D98;
    }

    .icon-bell {
        font-size: 20px;
        margin-right: 10px;
    }

    .perfil {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .img-perfil {
        border-radius: 100%;
        border: 1px solid #E5E7EB;
        padding: 5px 15px;
        margin: 0 10px;
    }
</style>