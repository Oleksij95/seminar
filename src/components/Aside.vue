<template>
    <div class="aside">
        <div class="mobile_menu" @click="changeMobileMenuVisible">
            <button>МЕНю</button>
        </div>
        <div
            class="aside-menu"
            :class="{active: showMobileMenu}"
        >
            <Accordion
                v-for="accordion in ACCORDIONS"
                :key="accordion.accordion_id"
                :accordion=accordion
            />
        </div>
    </div>
</template>

<script>
import Accordion from './Accordion.vue'
import { mapActions, mapGetters } from 'vuex'
export default{
    methods: {
        ...mapActions([
            'toggleMobileMenu'
        ]),

        changeMobileMenuVisible() {
            this.toggleMobileMenu(!this.showMobileMenu)
        }
    },
    components: {
        Accordion
    },
    computed: {
        ...mapGetters([
            'ACCORDIONS',
            'showMobileMenu'
        ])
    }
}
</script>

<style lang="scss">
.aside{
    width: 278px;
    min-height: 100vh;
    box-shadow: 0px 3px 25px rgba(0,0,0,0.2);
    background-color: #ffffff;
    padding: 30px 15px;
    position: fixed;
    .mobile_menu{
        display: none;
    }
}

@media(max-width: 767px) {
    .aside{
        position: relative;
        box-shadow: none;
        background: transparent;
        min-height: auto;
        padding: 0;
        width: 100%;
        .aside-menu{
            position: absolute;
            z-index: 2;
            left: -150%;
            transition: left .4s;
            background: #fff;
            width: 100%;
            padding: 15px;
            &.active{
                left: 0;
            }
        }
        .mobile_menu{
            display: flex;
            align-items: center;
            justify-content: flex-end;
            min-height: 100px;
            background-color: #232323;
            padding: 0 15px;
            width: calc(100% + 24px);
            margin-left: -12px;
            button{
                width: 92px;
                height: 34px;
                border-radius: 17px;
                border: 1px solid #ffffff;
                color: #fff;
                background: url("../assets/menu.png") transparent;
                background-repeat: no-repeat;
                background-position: 13px 50%;
                text-transform: uppercase;
                font-size: 14px;
                letter-spacing: 1px;
                color: #ffffff;
                font-weight: 700;
                text-align: right;
                padding: 0 13px;
            }
        }
    }
}
</style>