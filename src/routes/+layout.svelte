<script>
    import "../app.css"
    export const prerender = true;
</script>
<!-- <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
</nav> -->
<h1 class="text-4xl w-100 text-center font-bold my-5">AUCD Taboo</h1>
<div class="flex items-center w-screen h-[90vh] flex-col">
    <slot />
</div>

<style lang="postcss">
    :global(:root) {
        background-color: theme('colors.blue.200');
    }
</style>

