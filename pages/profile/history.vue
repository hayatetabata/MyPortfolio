<template lang="pug">
  v-content
    v-container
      v-timeline
        v-timeline-item(color="red lighten")
          span(slot="opposite") High School
          v-card(class="elevation-2")
            v-card-title(class="headline") My High School Memories...
            v-card-text High School

        v-timeline-item(color="red lighten")
          span(slot="opposite") University
          v-card(class="elevation-2")
            v-card-title(class="headline") University
            v-card-text University
</template>
