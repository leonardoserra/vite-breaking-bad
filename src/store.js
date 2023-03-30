import { reactive } from 'vue';

export const store = reactive(
    {
        cards: [],
        selected: '',
        loading: true
    }
);
