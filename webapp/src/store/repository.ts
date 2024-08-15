import axios from 'axios';
import { defineStore } from 'pinia';
import { toast } from 'vue3-toastify';

interface Repository {
    name: string;
    description: string;
    stars: number;
    url: string;
    createdAt: string;
}

interface RepositoryState {
    repositories: Repository[];
    page: number;
    fromDate: string;
    loading: boolean;
}

const PER_PAGE = 3;

export const useRepositoryStore = defineStore('repository', {
    state: (): RepositoryState => ({
        repositories: [],
        page: 1,
        fromDate: '2000-0-0',
        loading: false,
    }),

    getters: {
        getRepositories: (state): Repository[] => state.repositories,
        getLoadingStatus: (state): Boolean => state.loading,
    },

    actions: {
        async loadNext() {
            this.page++;
            return this.load();
        },

        async reset(fromDate: string) {
            this.page = 1;
            this.fromDate = fromDate;
        },

        async load() {
            this.loading = true;
            const url = `https://api.github.com/search/repositories?q=language:javascript+created:>${this.fromDate}&sort=stars&order=desc&per_page=${PER_PAGE}&page=${this.page}`;
            try {
                const response = await axios.get(url);
                this.addRepositories(response.data.items);
            } catch (error: any) {
                toast.error(`Some error occurred: ${error.message}`);
            }
            this.loading = false;
        },

        addRepositories(data: any[]) {
            const repositories = data.map((item) => ({
                name: item.full_name,
                description: item.description,
                createdAt: item.created_at,
                url: item.html_url,
                stars: item.stargazers_count,
            }));
            this.repositories.push(...repositories);
        },
    },
});
