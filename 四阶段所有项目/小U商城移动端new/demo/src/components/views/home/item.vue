<template>
 <a href="#">
    <img :src="d.img" alt="">
     <p>
         {{d.name}}
    </p>
</a>
</template>
<script>
export default {
  props: ['d', 'index']
};
</script>
