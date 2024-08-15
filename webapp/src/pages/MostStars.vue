<template>
    <header>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold leading-tight tracking-tight text-gray-900">Most Stars: 'javascript'</h1>
            <h2 class="text-xl leading-tight tracking-tight text-gray-900 mt-1">
                Repos created since {{ formattedDate(fromDate) }}
            </h2>
        </div>
    </header>
    <main>
        <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <RepositoryList :fromDate="fromDate" />
        </div>
    </main>
</template>

<script setup lang="ts">
import RepositoryList from '../components/RepositoryList.vue';
import { format } from 'date-fns';

const fromDate = getLastMonthDateString();

const formattedDate = (dateString: string) => {
    return format(new Date(dateString), 'd. MMMM, yyyy');
};

function getLastMonthDateString() {
    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() - 1);

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}
</script>