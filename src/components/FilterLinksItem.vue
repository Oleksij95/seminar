<template>

<div class="filter-item_wrapper">
    <div class="filter-item">
        <a
            href="#"
            :class="{active: filter.theme === selectedTheme.theme}"
            @click.prevent="selectTheme(filter)"
        >
            {{filter.name}} ({{filter.quantity}})
        </a>
    </div>
</div>
    

    
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default{
    props:{
        filter: {
            type: Object
        }
    },
    computed: {
        ...mapGetters([
            'VIDEOS',
            'filteredVideoList',
            'selectedTheme',
            'selectedFilter',
            'dateFilter'
        ])
    },
    methods: {
        ...mapActions([
            'setSelectedTheme',
            'getFilteredItem',
            'toggleMobileMenu'
        ]),

        selectTheme(filter) {
            let filtered = null;
            this.setSelectedTheme(filter)
            if (filter.theme === 'all') {
                this.getFilteredItem(this.VIDEOS)
            } else if(this.selectedFilter.length === 0 && !this.dateFilter) {
                filtered = this.VIDEOS.filter(i => i.theme === filter.theme)
                this.getFilteredItem(filtered)
            } else if (this.selectedFilter.length === 0 && this.dateFilter) {
                filtered = this.VIDEOS.filter(i => i.theme === filter.theme)
                filtered = filtered.filter(i => {
                    let videoDateMount = new Date(Date.parse(i.date)).getMonth();
                    return videoDateMount > 5
                })
                this.getFilteredItem(filtered)
            } else {
                let filteredForTheme = this.VIDEOS.filter(i => i.theme === filter.theme)
                filtered = filteredForTheme
                for (let i = 0; i < this.selectedFilter.length; i++) {
                    let filterItem = this.selectedFilter[i]
                    filtered = filtered.filter(f => f.options[filterItem] == true)
                    this.getFilteredItem(filtered)
                }
            }
            this.toggleMobileMenu(false)
        }
    }
}
</script>

<style lang="scss">
.filter-item{
    margin-bottom: 0;
    input{
        display: none;
    }
    a{
        font-size: 14px;
        line-height: 26px;
        color: #232323;
        font-weight: 300;
        text-decoration: none;
        &:hover{
            color: #e63333;
        }
        &.active{
            color: #e63333;
        }
    }
}



.filter{
    position: relative;
    padding-left: 25px;
    font-size: 14px;
    color: #232323;
    font-weight: 300;
    &::before{
        content: "";
        width: 16px;
        height: 16px;
        border-radius: 3px;
        border: 2px solid #ccc;
        position: absolute;
        left: 0;
        top: 4px;
    }
    &::after{

    }
}

.filter-item input:checked + label:before{
    background: #ff0000;
     border: 2px solid #ff0000;
}

</style>
