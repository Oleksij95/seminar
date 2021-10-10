<template>
    <div class="accordion" >

        <b-card no-body class="mb-1 accordion-wrapper">
            <b-card-header header-tag="header" class="accordion-head" role="tab">
                <b-button block v-b-toggle="'accordion-' + accordion.accordion_id" variant="info">
                    <img :src="require('../assets/' + accordion.icon)" >
                    {{accordion.accordion_name}}
                </b-button>
            </b-card-header>
            <b-collapse :id="'accordion-' + accordion.accordion_id" visible role="tabpanel">
                <b-card-body>
                    <b-card-text v-if="accordion.type === 'filter'">
                        <FilterSelectItem
                            v-for="filter in accordion.accordion_filters"
                            :key="filter.id"
                            :filter=filter
                        /> 
                    </b-card-text>

                    <b-card-text v-if="accordion.type === 'links'">
                        <FilterLinksItem
                            v-for="filter in accordion.accordion_filters"
                            :key="filter.id"
                            :filter=filter
                        /> 
                    </b-card-text>

                </b-card-body>
            </b-collapse>
        </b-card>
        
    </div>
</template>

<script>
import FilterSelectItem from './FilterSelectItem'
import FilterLinksItem from './FilterLinksItem'
export default{
    props: {
        accordion: {
            type: Object
        }
    },
    components: {
        FilterSelectItem,
        FilterLinksItem
    }
}

</script>


<style lang="scss">

.accordion{
    margin-bottom: 15px;
}
.accordion-wrapper{
    &.card{
        border-radius: 10px;
        overflow: hidden;
    }
    .card-header{
        background: transparent;
        padding: 0;
        border-radius: 0;
        border-bottom: none;
        position: relative;
        &::after{
            content: "";
            width: 12px;
            height: 6px;
            position: absolute;
            top: 15px;
            right: 13px;
            background: url("../assets/chevron.svg");
            background-size: cover;
        }
        button{
            background-color: #e6e6e6;
            border: none;
            width: 100%;
            box-shadow: none;
            border-radius: 0;
            text-align: left;
            text-transform: uppercase;
            display: flex;
            img{
                margin-right: 10px;
            }
        }
    }
}
</style>
