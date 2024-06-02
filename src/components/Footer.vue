<template>
    <footer>
        <span>Vendre</span>
        <address>
            <p>1234 Elm Street</p>
            <p>Springfield, IL 62704, USA</p>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-x-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
        </address>
    </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
footer {
    background: #eeebfd;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 100%;
    min-height: 10rem;
    padding: 1rem;
    margin-top: 4rem;
}
.fa-brands {
    font-size: 1.5rem;
    margin: 0 0.75rem;
}
span {
    font-size: 2rem;
}
p {
    margin: 0.5rem 0;
}
</style>