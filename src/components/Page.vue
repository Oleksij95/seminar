<template>
    <div class="page_wrapper">
        <div class="top_line">
            <div class="page-title">
                <h2 v-if="selectedTheme">{{selectedTheme.name}} ({{filteredVideoList.length}}) / {{VIDEOS.length}}</h2>
                <h2 v-else>усі відео</h2>
            </div>
            <div class="btn_wrapper">
                <div class="search" v-click-outside="closeSearch">
                    <input type="text" class="term" v-model="term" @input="searchVideo">
                    <span class="search_btn"></span>
                    <div class="search_results" v-if="searchVideos && searchVideos.length > 0">
                        <a
                            :href="video.options.link"
                            v-for="(video, index) in searchVideos"
                            :key="index"
                            v-html="video.title"
                        >
                        </a>
                    </div>
                </div>
                <div class="views_type_wrapper">
                    <button
                        class="view_btn grid"
                        @click="changeView('4')"
                    >
                    </button>
                    <button
                        class="view_btn list"
                        @click="changeView('12')"
                    >
                    </button>
                </div>
            </div>
        </div>
        <VideoList />
    </div>
</template>

<script>
import VideoList from './VideoList.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
    components: {
        VideoList
    },
    data(){
        return{
            term: '',
            searchVideos: null
        }
    },
    computed: {
        ...mapGetters([
            'selectedTheme',
            'VIDEOS',
            'filteredVideoList'
        ])
    },
    methods: {
        ...mapActions([
            'getViewType'
        ]),
        changeView(viewType) {
            this.getViewType(viewType);
            let seminarOptions = {
                viewType: viewType
            }
            window.localStorage.setItem("seminarOptions", JSON.stringify(seminarOptions))
        },
        searchVideo() {
            this.searchVideos = this.VIDEOS.filter(i => i.theme.indexOf(this.term) > -1)
        },
        closeSearch() {
            this.searchVideos = null
        }
    },
    beforeMount() {
        if ( window.localStorage.getItem("seminarOptions") ) {
            this.getViewType(JSON.parse(window.localStorage.getItem("seminarOptions")).viewType)
        }
    }
}
</script>

<style lang="scss">
.page_wrapper{
    padding-top: 43px;
    padding-bottom: 100px;
}

.top_line{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
    .btn_wrapper{
        display: flex;
        justify-content: space-between;
        .search{
            margin-right: 18px;
            position: relative;
            input{
                width: 194px;
                height: 27px;
                border-radius: 5px;
                background-color: #ffffff;
                border: 1px solid #e6e6e6;
                padding: 0 35px 0 10px;
                box-shadow: none;
                outline: none;
            }
            .search_btn{
                width: 20px;
                height: 20px;
                position: absolute;
                z-index: 1;
                background: url("../assets/search.svg");
                background-repeat: no-repeat;
                cursor: pointer;
                right: 5px;
                top: 5px;
            }
            .search_results{
                position: absolute;
                background: #fff;
                z-index: 1;
                padding: 10px;
                margin-top: 2px;
                border-radius: 4px;
                a{
                    font-size: 14px;
                    text-decoration: none;
                    line-height: 16px;
                    display: block;
                    margin-bottom: 10px;
                    color: #232323;
                    font-weight: 300;
                    transition: color .3s;
                    &:hover{
                        color: #ed3434;
                    }
                }
            }
        }
    }
    h2{
        font-size: 35px;
        letter-spacing: 1px;
        line-height: 30px;
        color: #232323;
        font-weight: 300;
        text-transform: uppercase;
        margin-bottom: 0;
    }
}
.view_btn{
    background: none;
    border: none;
    width: 22px;
    height: 22px;
    &.grid{
        background: url("../assets/grid.svg");
        background-size: cover;
        margin-right: 20px;
    }
    &.list{
        width: 34px;
        height: 24px;
        background: url("../assets/view-list.svg");
        background-size: cover;
        padding-right: 0;
    }
}

@media (min-width: 768px) and (max-width: 991px) {
    .top_line{
        flex-wrap: wrap;
        h2{
            margin-bottom: 20px;
        }
    }
}

@media(max-width: 767px) {
    .page_wrapper{
        padding-top: 20px;
        padding-bottom: 60px;
    }

    .top_line{
        flex-direction: column;
        h2{
            font-size: 24px;
            letter-spacing: 1px;
            line-height: 30px;
            font-weight: 700;
        }
        .page-title{
            order: 3;
        }
        .btn_wrapper{
            flex-direction: column;
            align-items: center;
            .search{
                margin-right: 0;
                width: 300px;
                input{
                   width: 100%;
                }
            }
            .views_type_wrapper{
                margin-top: 22px;
                margin-bottom: 18px;
            }
        }
    }
}
</style>