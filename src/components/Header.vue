<template>
    <header>
        <button @click="openMenu">
            <i class="fas fa-bars"></i>
        </button>
        <span>Vendre</span> 
        <!-- using a span because I already got an h1 for the actual content and ideally I would just use a logo instead -->
    </header>
    <nav v-if="showingMenu">
        <ul>
            <li>Mock nav 1</li>
            <li>Mock nav 2</li>
            <li>Mock nav 3</li>
            <li>Mock nav 4</li>
            <li>Mock nav 5</li>
        </ul>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            showingMenu: false,
        };
    },
    methods: {
        openMenu() {
            this.showingMenu = !this.showingMenu;
        },
    },
};
</script>

<style scoped>
header {
    background: #eeebfd;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 10rem;
}

.fas {
    font-size: 2rem;
}

button {
    position: absolute;
    left: 0;
    cursor: pointer;
    background: none;
    border: none;
    padding-left: 1rem;
    z-index: 999;
}

span {
    font-size: 4rem;
    flex-grow: 1;
}

nav {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #eeebfd;
}

ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    gap: 1rem;
}
</style>
