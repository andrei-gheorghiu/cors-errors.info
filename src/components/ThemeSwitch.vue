<template>
  <label class="switch-container">
    <input type="checkbox"
           v-bind="$attrs"
           class="input"
           @change="$emit('update:darkMode', $event.target.checked)">
    <span class="switch" />
  </label>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ThemeSwitch',
  props: {
    darkMode: {
      type: String
    }
  },
  emits: ['update:darkMode']
})
</script>

<style scoped lang="scss">
$switch-container-width: 50px;
$switch-size: calc(#{$switch-container-width} / 2);

.switch-container {
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem;
  height: 100%;
  &.checked {
    pointer-events: none;
  }
}

.input {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.switch {
  display: flex;
  align-items: center;
  position: relative;
  height: $switch-size;
  flex-basis: $switch-container-width;
  border-radius: $switch-size;
  transition: background-color 0.25s ease-in-out;
  background-color: #ccc;
  flex-shrink: 0;

  &:before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    height: calc(#{$switch-size} - 2px);
    width: calc(#{$switch-size} - 2px);
    border-radius: 50px;
    background-color: white;
    transition: transform 0.21s cubic-bezier(.4,0,.2,1);
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.3), 0 2px 2px 0 rgba(0, 0, 0, 0.21), 0 3px 1px -2px rgba(0, 0, 0, 0.18);
  }
}

.input:checked + .switch {
  background-color: var(--f-3);
}

.input:checked + .switch::before {
  border-color: var(--f-3);
  transform: translateX(
      calc(#{$switch-container-width} - #{$switch-size})
  );
}

.input:focus + .switch::before {
  border-color: var(--f-3);
}

.input:focus:checked + .switch::before {
  border-color: var(--f-3);
}

.input:disabled + .switch {
  background-color: var(--gray);
}

.input:disabled + .switch::before {
  background-color: var(--gray-dark);
  border-color: var(--gray-dark);
}
.label {
  flex-grow: 1;
  margin: 0 .5rem;
  &.checked {
    color: white;
  }
}
</style>
