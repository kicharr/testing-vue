export const ToggleMixin = {
    data() {
        return {
            state: true,
            on: 'On',
            off: 'Off'
        }
    },
    methods: {
        toggle() {
            this.state = !this.state;
        }
    }
}