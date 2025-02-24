<template>
    <div class="SideBar">
        <h2>Barra lateral</h2>
        <ul>
        <li><Router-Link to="/Contador">Contador</Router-Link></li>
        <li><Router-Link to="/lista-de-tareas">Lista de tareas</Router-Link></li>
        </ul>

    </div>
</template>
 

<script setup>

</script>


<style>
.SideBar {
    width: 200px;
    background-color: chocolate;
    padding: 20px;
}
</style>