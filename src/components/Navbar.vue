<template>
  <nav class="nav-wrapper">
    <h1 class="logo">My logo</h1>
    <div>
      <ul class="link-wrapper">
        <li v-for="nav in navLinks">
          <RouterLink :to="nav.to" :target="nav.target" class="link">{{ nav.label }}</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import type { RouteLocation } from "vue-router";
const navLinks: Array<{
  label: string,
  to: string | RouteLocation,
  target?: '_self' | '_blank'
}> = [
    {
      label: "Home",
      to: '/',
    },
    {
      label: "Calender",
      to: '/calender',
    },
    {
      label: "Todo",
      to: '/todo',
    },
  ]
</script>
<style scoped>
.nav-wrapper {
  display: flex;
  justify-content: space-between;
}

.link-wrapper {
  list-style-type: none;
}

.link-wrapper li {
  display: inline-block;
  margin-right: 2px;
  margin-left: 2px;
}

.link-wrapper .link {
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 8px;
  background: transparent;
}

.link-wrapper .link:hover {
  background: gray;
}
</style>