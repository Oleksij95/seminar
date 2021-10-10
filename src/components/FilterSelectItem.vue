<template>

<div class="filter-item_wrapper">
    <div class="filter-item">
        <input
            type="checkbox"
            :id="filter.id"
            @input="setSelectFilter($event, filter)"
        >
        <label
            :for="filter.id"
            class="filter"
        >
            {{filter.name}} ({{filter.quantity}})
        </label>
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
    methods: {
        ...mapActions([
            'addSelectFilter',
            'removeSelectFilter',
            'getFilteredItem',
            'toggleMobileMenu',
            'setDateFilter'
        ]),
        setSelectFilter(e, filter){
            if (e.target.checked) {
                if (filter.value === 'new') {
                    this.getFilteredItem(this.filteredVideoList.filter(i => {
                        let videoDateMount = new Date(Date.parse(i.date)).getMonth();
                        return videoDateMount > 5
                    }))
                    this.setDateFilter(true)
                } else {
                    this.addSelectFilter(filter.value)
                    for (let i = 0; i < this.selectedFilter.length; i++) {
                        let filter = this.selectedFilter[i]
                        this.getFilteredItem(this.filteredVideoList.filter(i => i.options[filter] === true))
                    }
                }
            } else {
                this.removeSelectFilter(filter.value)
                let filtered = this.VIDEOS

                if (filter.value === 'new') {
                    this.setDateFilter(false)
                }
                
                if (this.selectedTheme === "" && this.selectedFilter.length === 0) {
                    this.getFilteredItem(this.VIDEOS)
                } else if (typeof(this.selectedTheme) === "object" && this.selectedFilter.length === 0) {
                    if (this.selectedTheme.theme === 'all') {
                        this.getFilteredItem(this.VIDEOS)
                    } else {
                        this.getFilteredItem(this.VIDEOS.filter(i => i.theme === this.selectedTheme.theme))
                    }
                    
                } else if (typeof(this.selectedTheme) === "object" && this.selectedFilter.length > 0){
                    if (this.selectedTheme.theme === 'all') {
                       for (let i = 0; i < this.selectedFilter.length; i++) {
                            let filter = this.selectedFilter[i]
                            filtered = this.VIDEOS.filter(i => i.options[filter] === true)
                        }
                    } else {
                        for (let i = 0; i < this.selectedFilter.length; i++) {
                            let filter = this.selectedFilter[i]
                            filtered = this.VIDEOS.filter(i => i.options[filter] === true && i.theme === this.selectedTheme.theme)
                        }
                    }
                    this.getFilteredItem(filtered)
                    
                }else if (this.selectedFilter.length > 0) {
                   
                    for (let i = 0; i < this.selectedFilter.length; i++) {
                        let filter = this.selectedFilter[i]
                        filtered = filtered.filter(i => i.options[filter] === true )
                        this.getFilteredItem(filtered)
                    }
                }
            }
            this.toggleMobileMenu(false)
        }
    },
    computed: {
        ...mapGetters([
            'filteredVideoList',
            'selectedFilter',
            'selectedTheme',
            'VIDEOS',
            'dateFilter'
        ])
    },
}
</script>

<style lang="scss">
.filter-item{
    margin-bottom: 11px;
    input{
        display: none;
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
