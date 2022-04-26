# Just Some Svelte Notes

```svelte

<script lang="ts" >
let count = 0

const increment = () => {
    count++
}

</script>

<style lang="scss" ></style>

<button on:click={increment} >
  {count}
</button>

{#if count > 0}
    <p>You clicked the button {count} times</p>
{/if}


{#each [1, 2, 3] as i}
    <p>{i}</p>
{/each}


```


### Props
```svelte
<script lang="ts" >
export const content = "Hello World"
</script>

<h1>{content}</h1>

```

```svelte
<Text 
    content="Hello World"
/>

```


### Stores
```svelte
<script lang="ts" >
import { writable } from "svelte/store"
const count = writable(0)
</script>

<h1>
    {$count}
</h1>

```
