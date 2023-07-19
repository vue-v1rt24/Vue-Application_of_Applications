<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth.store';

//
const router = useRouter();
const store = useAuthStore();

//
const logout = () => {
  store.logout();
  router.push({ name: 'auth', query: { message: 'logout' } });
};
</script>

<template>
  <nav class="navbar">
    <RouterLink :to="{ name: 'home' }"><h3>Банк</h3></RouterLink>

    <ul class="navbar__menu">
      <li>
        <RouterLink :to="{ name: 'home' }">Заявки</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'help' }">Помощь</RouterLink>
      </li>
      <li>
        <a href="#">Сообщения</a>
      </li>
      <li>
        <a @click.prevent="logout" href="#">Выход</a>
      </li>
    </ul>
  </nav>
</template>

<style lang="css" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
}

/*  */
.navbar__menu {
  display: flex;
  align-items: center;
  column-gap: 20px;
}

.navbar__menu li {
  list-style: none;
}

.navbar__menu a.active {
  color: rgb(6, 164, 67);
}
</style>
