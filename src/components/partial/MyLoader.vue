
<template>
    <div class="has-loader" :class="[props.active && 'has-loader-active']">
        <div
            v-if="props.active"
            class="v-loader-wrapper is-active"
            :class="[
                grey && 'is-grey',
                translucent && 'is-translucent',
                card === 'regular' && 's-card',
                card === 'smooth' && 'r-card',
                card === 'rounded' && 'l-card',
            ]"
        >
            <div class="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>

        <slot></slot>
    </div>
</template>

<script setup lang="ts">
export type MyLoaderSize = 'small' | 'large' | 'xl'
export type MyLoaderWrapperRadius = 'regular' | 'smooth' | 'rounded'
export interface MyLoaderProps {
    size?: MyLoaderSize
    card?: MyLoaderWrapperRadius
    active?: boolean
    grey?: boolean
    translucent?: boolean
}

const props = withDefaults(defineProps<MyLoaderProps>(), {
    size: undefined,
    card: undefined,
})
</script>


<style lang="scss">
.has-loader {
    position: relative;

    &.has-loader-active {
        overflow: hidden;
    }

    .v-loader-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        background: #ffffff;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s;
        z-index: 5;

        &.is-active {
            opacity: 1;
            pointer-events: all;

            &.is-translucent {
                opacity: 0.65;
            }
        }

        &.is-grey {
            background: #f3f4f6;
        }

        .loader {
            height: 3rem;
            width: 3rem;

            &.is-small {
                height: 2rem;
                width: 2rem;
            }

            &.is-large {
                height: 5rem;
                width: 5rem;
            }

            &.is-xl {
                height: 7rem;
                width: 7rem;
            }
        }
    }
}
.lds-ripple {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
}
.lds-ripple div {
    position: absolute;
    border: 4px solid #000000;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
}
@keyframes lds-ripple {
    0% {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 1;
    }
    100% {
        top: 0px;
        left: 0px;
        width: 72px;
        height: 72px;
        opacity: 0;
    }
}
</style>
