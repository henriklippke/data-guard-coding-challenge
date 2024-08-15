<template>
  <ul role="list" class="divide-y divide-gray-100">
    <li v-for="repository in repositories" :key="repository.url"
      class="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 py-5 sm:flex-nowrap">
      <div>
        <p class="text-sm font-semibold leading-6 text-gray-900">
          <a :href="repository.url" class="hover:underline" target="_blank">{{ repository.name }}</a>
        </p>
        <div class="mt-1 text-xs leading-5 text-gray-800">
          <p>
            {{ repository.description }}
          </p>
          <p class="text-gray-500 mt-2">
            Created:
            <time :datetime="repository.createdAt">{{ formattedDate(repository.createdAt) }}</time>
          </p>
        </div>
      </div>
      <dl class="flex w-full flex-none justify-between gap-x-8 sm:w-auto">
        <div class="flex w-16 gap-x-2.5 flex-row-reverse">
          <div class="flex w-16 gap-x-2.5 flex-row-reverse">
            <span class="sr-only">Total Stars</span>
            <StarIcon class="h-6 w-6 text-gray-400" />
            <dd class="text-sm leading-6 text-gray-900">{{ repository.stars }}</dd>
          </div>
        </div>
      </dl>
    </li>
  </ul>
  <button @click="loadMore" :disabled=!!loading :class="[
    'mt-4 px-4 py-2 text-sm font-semibold rounded-lg w-full',
    loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-primary hover:bg-primary text-white'
  ]">
    {{ loading ? 'Loading...' : 'Load More' }}
  </button>
</template>

<script setup lang="ts">
import { onMounted, defineProps, computed } from 'vue';
import { StarIcon, } from '@heroicons/vue/24/outline'
import { format } from 'date-fns';
import { useRepositoryStore } from '../store/repository';

const props = defineProps<{
  fromDate: string;
}>();

const repositoryStore = useRepositoryStore();
const repositories = repositoryStore.getRepositories;
const loading = computed(() => repositoryStore.getLoadingStatus);
const loadMore = () => repositoryStore.loadNext();

onMounted(() => {
  repositoryStore.reset(props.fromDate);
  repositoryStore.load();
});

const formattedDate = (dateString: string) => {
  return format(new Date(dateString), 'd. MMMM yyyy');
};
</script>